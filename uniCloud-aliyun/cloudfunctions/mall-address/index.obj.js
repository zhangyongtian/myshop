const db=uniCloud.database();
const utils = require("self-utils")
module.exports = {
	_before:async function () { // 通用预处理器
		this.userInfo =await utils.getUserInfo(this);
	},
	
	async add(data){
		if(!this.userInfo.uid) return this.userInfo;		
		data.user_id = this.userInfo.uid
		data.time = Date.now();
		if(data.selected){
			await db.collection("mall-address").where({
				user_id:this.userInfo.uid
			}).update({
				selected:false
			})
		}		
		return await db.collection("mall-address").add(data);
	},
	async getList(){
		if(!this.userInfo.uid) return this.userInfo;
		return await db.collection("mall-address").where({
			user_id:this.userInfo.uid
		}).orderBy("selected","desc").orderBy("time","desc").get()		
	},
	//修改地址默认
	async updateDef(id){
		if(!this.userInfo.uid) return this.userInfo;
		await db.collection("mall-address").where({
			user_id:this.userInfo.uid
		}).update({
			selected:false
		})
		
		return await db.collection("mall-address").doc(id).update({
			selected:true
		})
		
	},
	
	//获取一条地址信息
	async getOne(id){
		return await db.collection("mall-address").doc(id).get();
	},
	
	//修改一条记录
	async updateOne(data){		
		if(!this.userInfo.uid) return this.userInfo;		
		data.user_id = this.userInfo.uid
		data.time = Date.now();		
		if(data.selected){
			await db.collection("mall-address").where({
				user_id:this.userInfo.uid
			}).update({
				selected:false
			})
		}
		let newData = {...data};
		delete newData._id;
		return await db.collection("mall-address").doc(data._id).update(newData);
	},
	
	//获取默认地址
	async getDefAddress(){
		if(!this.userInfo.uid) return this.userInfo;
		return await db.collection("mall-address").where({
			user_id:this.userInfo.uid,
			selected:true
		}).get();
	},
	async removeAddRessById(addressId){
		if(!this.userInfo.uid) return this.userInfo;		
		let res = await db.collection("mall-address").doc(addressId).remove();
		return res;
	}
}
