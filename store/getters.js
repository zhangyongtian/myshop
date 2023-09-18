const getters = {
	statusBarHeight:state=>state.system.statusBarHeight,
	titleBarHeight:state=>state.system.titleBarHeight,
	bodyBarHeight:state=>{
		if(state.system.foldState) return state.system.titleBarHeight;
		return 100;
	},
	totalHeight:state=>{
		if(state.system.foldState){
			return state.system.statusBarHeight+state.system.titleBarHeight+10
		}
		return state.system.statusBarHeight+state.system.titleBarHeight+100+10
	},
	foldState:state=>state.system.foldState,
	carsList:state=>state.cars.carsList,
	totalPrice:state=>{
		return state.cars.carsList.reduce((prev,next)=>{
			return prev+=next.price*next.numvalue
		},0)
	},
	
	preferentialPrice:state=>{
		let price = state.cars.carsList.reduce((prev,next)=>{
			return prev+=next.price*next.numvalue
		},0)
		
		let before = state.cars.carsList.reduce((prev,next)=>{
			let before_price = next.before_price? next.before_price:0
			return prev+=before_price*next.numvalue
		},0)
		
		return before - price
	},
	
	buyNum:state=>{
		return state.cars.carsList.reduce((prev,next)=>{
			return prev+=next.numvalue
		},0)
	},
	brandData:state=>state.brand.brandData,
	detailPopState:state=>state.goods.detailPopState,
	detailData:state=>state.goods.detailData,
	proSpecsState:state=>state.goods.proSpecsState
		
}
export default getters;