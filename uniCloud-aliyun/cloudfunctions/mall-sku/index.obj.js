const db = uniCloud.database();
const cmd = db.command
module.exports = {
	_before: function () { // 通用预处理器
		this.params = this.getParams()[0]
	},
	async get(){
		return await db.collection("mall-sku").get()
	},
	async add(){
		this.params.checked = false;
		return await db.collection("mall-sku").add(this.params)
	},
	async updateChild(id,obj){
		obj.checked=false
		return await db.collection("mall-sku").doc(id).update({			
			children:cmd.push([obj])
		})
	}
}
