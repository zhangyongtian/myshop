const goods = {
	state:{
		detailPopState:false,
		detailData:{},
		proSpecsState:false
	},
	mutations:{
		SET_DETAIL_STATE(state,value){
			state.detailPopState = value
		},
		SET_DETAIL_DATA(state,value){
			value.description = value.description.replace(/\n/g,"<br/>");
			state.detailData=value
		},
		SET_PRO_SPECS(state,value){
			state.proSpecsState = value
		}
	}
}

export default goods