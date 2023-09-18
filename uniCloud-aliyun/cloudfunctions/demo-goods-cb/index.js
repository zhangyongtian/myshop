const db  = uniCloud.database();
const cmd = db.command;
exports.main = async (event, context) => {
	let user_order_success = true;
	let data={
		order_no:"1688264062148_927854",
		out_trade_no:"1688264062148_927854_288282",
		total_fee:1
	};
	let {
		order_no,
		out_trade_no,
		total_fee
	} = data; // uni-pay-orders 表内的数据均可获取到
	
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
	goodsRes.data.forEach(item=>{
		let idx =  carList.findIndex(item2=>{
			return item._id  == item2.goodsid
		})
		totalPrice += carList[idx].numvalue * item.price
	})
	
	return totalPrice;
	
	if(totalPrice == total_fee){
		db.collection("mall-goods").where({order_no}).update({
			status:1
		})
	}else{
		db.collection("mall-goods").where({order_no}).update({
			status:-2
		})
		user_order_success = false
	}
		
	
	return user_order_success;
};
