const brandCloudObj = uniCloud.importObject("mall-brand")

const brand = {
	state:{
		brandData:{
			
		}
	},
	mutations:{
		SET_BRAND(state,value){
			state.brandData = value
		}
	},
	actions:{
		async getBrandData(context){			
			let arr = Object.keys(context.state.brandData)
			if(arr.length) return;
			let res =await brandCloudObj.get()
			context.commit("SET_BRAND",res.data[0])
		}
	}
}

export default brand