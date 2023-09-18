//这个函数就是测试调度没有实际意义

const { log } = require("console");

const db = uniCloud.database();
module.exports = {
	_before: function () { // 通用预处理器

	},
	async _timing(){
		// return await db.collection("demo-time-run").add({
		// 	title:"测试标题"+Math.random(),
		// 	time:Date.now()
		// })
		console.log("hello ")
		
		return "1"
	},
	setData(){
		console.log("hello ")
		return "1"
	}
}
