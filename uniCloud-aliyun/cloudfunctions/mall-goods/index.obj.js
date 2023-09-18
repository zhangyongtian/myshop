const utils = require("self-utils")
const db = uniCloud.database();

module.exports = {
	_before:async function () { // 通用预处理器
		this.userInfo =await utils.getUserInfo(this);
		
	},
	
	async getOne(id){
		let res = await db.collection("mall-goods").doc(id).get();
		res.data[0].price = res.data[0].price/100
		res.data[0].before_price = res.data[0].before_price ? res.data[0].before_price/100 : null
		return res
	},
	
	async update(params){
		if(!this.userInfo.uid)  return {msg:"没有权限",code:-1};
		if(!this.userInfo.role.includes('manage')) return {msg:"没有权限",code:-1};	
		let _params = {...params};
		delete _params._id;		
		_params.price = Number(_params.price).toFixed(2)*100
		_params.before_price = _params.before_price ? Number(_params.before_price).toFixed(2)*100 : null
		await db.collection("mall-goods").doc(params._id).update(_params);
	},
	
	
	async add(params){
		if(!this.userInfo.uid)  return {msg:"没有权限",code:-1};
		if(!this.userInfo.role.includes('manage')) return {msg:"没有权限",code:-1};	
		params.price = Number(params.price).toFixed(2)*100
		params.before_price = params.before_price ? Number(params.before_price).toFixed(2)*100 : null
		return await db.collection("mall-goods").add(params);		
	},
	
	//获取商品列表
	async getList(){
		let navData = await db.collection("mall-category").get();
		let goods = await db.collection("mall-goods").get();
		navData.data.forEach(item=>{
			let proGroup = goods.data.filter(g=>{
				return g.category_id == item._id
			})
			item.proGroup = proGroup
		})		
		let newsArr = navData.data.filter(item=>{
			return item.proGroup.length
		})		
		return newsArr
	},
	
	
	
	async remove(id){
		if(!this.userInfo.uid)  return {msg:"没有权限",code:-1};
		if(!this.userInfo.role.includes('manage')) return {msg:"没有删除权限",code:-1};		
		let res = await db.collection("mall-goods").doc(id).remove();
		return res;
	},
	
	async searchGoods(keyword){
		return await db.collection("mall-goods").where({
			name:new RegExp(keyword,'gi')
		}).get();
	}
	
	
}
