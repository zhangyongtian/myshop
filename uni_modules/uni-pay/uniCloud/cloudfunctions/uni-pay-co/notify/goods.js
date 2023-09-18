const db  = uniCloud.database();
const cmd = db.command;
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee
	} = data; // uni-pay-orders 表内的数据均可获取到
	
	//根据uni-pay-orders内的订单号，检索mall-order自己业务订单
	let orderRes = await db.collection("mall-order").where({order_no}).get();
	let carList = orderRes.data[0].carsList

	let ids = carList.map(item=>{
		return item.goodsid
	})

	//根据id组，获取对应的商品
	let goodsRes = await db.collection("mall-goods").where({
		_id:cmd.in(ids)
	}).get();
	
	
	let totalPrice = 0
	//循环遍历数据库中的商品
	goodsRes.data.forEach(item=>{
		//循环订单中购物车的数组
		let idx =  carList.findIndex(item2=>{
			return item._id  == item2.goodsid
		})
		totalPrice += carList[idx].numvalue * item.price
	})
	
	//判断前后端价格是否一致
	if(totalPrice == total_fee){
		//一致修改状态为1,为已付款
		db.collection("mall-order").where({order_no}).update({
			status:1
		})
	}else{
		//不一致改为-2,代表支付有 异常
		db.collection("mall-order").where({order_no}).update({
			status:-2,
			realPrice:totalPrice			
		})
		user_order_success = false
	}
		
	return user_order_success;
};
