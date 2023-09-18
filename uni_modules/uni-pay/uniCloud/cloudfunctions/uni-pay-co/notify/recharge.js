const db  = uniCloud.database();
const cmd = db.command;
module.exports = async (obj) => {
	let user_order_success = true;
	let { data = {} } = obj;
	let {
		order_no,
		out_trade_no,
		total_fee,
		provider
	} = data; // uni-pay-orders 表内的数据均可获取到
	
	db.collection("mall-order").where({order_no}).update({
		status:1,
		payType:provider
	})
	
	return user_order_success;
};
