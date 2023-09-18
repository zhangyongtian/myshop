const db = uniCloud.database();
const utils = require("self-utils")
module.exports = {
	_before: async function () { // 通用预处理器
		this.userInfo =await utils.getUserInfo(this);
		this.params = this.getParams()[0]
	},
	async get(){		
		return await db.collection("mall-brand").get()
	},
	async add(){
		if(!this.userInfo.uid) return {msg:"没有权限",code:-1};
		if(!this.userInfo.role.includes('manage')) return {msg:"没有权限",code:-1};	
		return await db.collection("mall-brand").add(this.params)
	},
	async update(){
		if(!this.userInfo.uid) return {msg:"没有权限",code:-1};
		if(!this.userInfo.role.includes('manage')) return {msg:"没有权限",code:-1};	
		let params = {...this.params};
		delete params._id
		return await db.collection("mall-brand").doc(this.params._id).update(params)
	}
}
