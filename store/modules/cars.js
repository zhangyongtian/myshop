const cars = {
	state:{
		carsList:[]
	},
	mutations:{		
		SET_CARS_LIST(state,params=null){
			if(!params) return state.carsList = [];
			let {item,num} = params;			
			console.log(params);
			
			let caritem = {
				goodsid:item._id || item.goodsid,
				numvalue:num,
				name:item.name,
				price:item.price,
				before_price:item.before_price,
				thumb:item.thumb,
				skuArr:item.skuArr || null,
				add:item.add || false
			}
						
			let idx = state.carsList.findIndex(car=>{
				if(car.skuArr){
					 return  car.goodsid == caritem.goodsid  && JSON.stringify(car.skuArr.sort())  ==  JSON.stringify(caritem.skuArr.sort()) 
				}else{
					return car.goodsid == caritem.goodsid
				}
				
			})
			
			if(idx<0){
				state.carsList.unshift(caritem)
			}else{
				if(caritem.add){
					state.carsList[idx].numvalue += caritem.numvalue
				}else{
					state.carsList[idx].numvalue = caritem.numvalue;
				}	
							
				if(state.carsList[idx].numvalue<=0) state.carsList.splice(idx,1);
				
				console.log(state.carsList);
			}
			
			
			
		}
	}
}

export default cars