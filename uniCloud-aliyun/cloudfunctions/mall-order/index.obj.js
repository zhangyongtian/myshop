const utils = require("self-utils");
const db = uniCloud.database();
const cmd = db.command;
module.exports = {
	_before:async function () { // 通用预处理器
		this.userInfo =await utils.getUserInfo(this);
		if(!this.userInfo.uid) throw this.userInfo;
	},
	async createOrder(data){
		data.user_id = this.userInfo.uid;
		data.order_no = getOrderId();
		await db.collection("mall-order").add(data)		
		return data.order_no;
	},
	//获取订单列表
	async getList(){
		return await db.collection("mall-order").where({
			user_id:this.userInfo.uid,
			status:cmd.neq(0)
		}).orderBy("createTime","desc").get()	
	},
	//管理员获取所有的订单
	async getAllList(){
		if(!this.userInfo.role.includes('manage')) return {msg:"没有权限",code:-1};	
		return await db.collection("mall-order").where({			
			status:cmd.neq(0)
		}).orderBy("createTime","desc").get()	
	},
	//管理员修改订单状态
	async updateDone(id){
		if(!this.userInfo.role.includes('manage')) return {msg:"没有权限",code:-1};	
		return await db.collection("mall-order").doc(id).update({
			done:true
		})
	},
	async _timing(){
		let time = Date.now() - 3600*1000*3
		await db.collection("mall-order").where({
			status:0,
			createTime:cmd.lt(time)
		}).remove()
	}
	
}

function getOrderId(){
	return Date.now()+"_"+String(Math.random()).substring(3,9)
}


