<template>
	<view class="goodsView">
		<uni-forms ref="goodsForm" :model="goodsFormData" :rules="goodsRules" :label-width="100" label-align="right">
			<uni-forms-item label="商品图片">
				<uni-file-picker
				v-model="goodsFormData.thumb"
				fileMediatype="image"
				mode="grid"
				></uni-file-picker>
			</uni-forms-item>
			
			<uni-forms-item label="商品名称" required name="name">
				<uni-easyinput v-model="goodsFormData.name" placeholder="请输入商品名称" trim="both"></uni-easyinput>
			</uni-forms-item>
			
			<uni-forms-item label="产品分类" required name="category_id">
				<uni-data-select
				collection="mall-category"
				field="_id as value, name as text"
				v-model="goodsFormData.category_id"
				></uni-data-select>
			</uni-forms-item>
			
			<uni-forms-item label="商品价格" required name="price">
				<uni-easyinput type="number" v-model="goodsFormData.price" placeholder="请输入商品价格" trim="both"></uni-easyinput>
			</uni-forms-item>
			
			<uni-forms-item label="商品原价">
				<uni-easyinput type="number" v-model="goodsFormData.before_price" placeholder="请输入原价" trim="both"></uni-easyinput>
			</uni-forms-item>
			
			<uni-forms-item label="商品属性">
				<u-cell :title="skuTitle" isLink :border="false" @click="clickSelect"></u-cell>
				<view class="skuList">
					<view class="item" v-for="item in goodsFormData.sku_select" @click="clickSelect">
						<view class="left">{{item.skuName}}:</view>
						<view class="right">{{skuChildName(item.children)}}</view>
					</view>
				</view>
			</uni-forms-item>
			
			
			<uni-forms-item label="商品描述">
				<uni-easyinput type="textarea" placeholder="请输入详细的描述信息" v-model="goodsFormData.description"></uni-easyinput>
			</uni-forms-item>
			
			<view class="btnView">
				<button type="primary" @click="onSubmit">确认提交</button>
			</view>
			
		</uni-forms>
		
		
		<uni-popup ref="attrWrapPop" type="bottom">
			<view class="attrWrapper">
				<view class="head">
					<view class="title">商品属性</view>
					<view class="addAttr" @click="clickAddAttr()">+ 添加属性</view>
				</view>				
				
				<view class="body">
					<view class="item" v-for="(item,index) in skuArr">
						<view class="top">							
							<checkbox :checked="item.checked" @click="changeCheckbox(index)"></checkbox>
							<view class="font">{{item.skuName}}</view>
						</view>
						<view class="btnGroup" v-if="item.checked">
							<view class="btn" 
							:class="child.checked?'active':''"
							v-for="(child,cIdx) in item.children" 
							@click="clickChlidBtn(index,cIdx)">{{child.name}}</view>
							<view class="btn" @click="clickAddAttr(index)">
								<u-icon name="plus"></u-icon>
							</view>
						</view>
					</view>
				</view>
								
				<view class="foot">
					<button type="primary" @click="clickConfirmSelect">确认选择</button>
				</view>
			</view>
			
			
		</uni-popup>
		
		
		<uni-popup ref="addAttrPop">
			<uni-popup-dialog  mode="input" title="新增" placeholder="请输入新增的内容"
			@confirm="dialogConfirm"
			></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	const skuCloudObj = uniCloud.importObject("mall-sku",{
		"customUI":true
	});
	
	const goodsCloudObj = uniCloud.importObject("mall-goods",{
		"customUI":true
	})
	
	let goodID;
	
	export default {
		data() {
			return {
				goodsFormData:{
					thumb:[],
					name:"",
					category_id:null,
					price:null,
					before_price:null,
					description:"",
					sku_select:[]
				},
				addAttrType:"parent",  //parent代表父，child代表子
				
				goodsRules:{
					name:{
						rules:[{
							required:true,
							errorMessage:"请输入产品名称"
						}]
					},
					price:{
						rules:[{
							required:true,
							errorMessage:"请输入产品价格"
						}]
					},
					category_id:{
						rules:[{
							required:true,
							errorMessage:"请输入产品分类"
						}]
					}
				},
				
				skuArr:[]
			};
		},
		
		onLoad(e){
			this.isManage();
			goodID = e?.id ?? null
			if(goodID) this.getGoodsOne()
			this.getSkuData();
		},
		
		computed:{
			skuTitle(){
				if(this.goodsFormData.sku_select.length){
					let arr = this.goodsFormData.sku_select.map(item=>{
						return item.skuName
					})
					return arr.join("/")
				}else{
					return "点击添加属性"
				}
			}
		},
		
		
		methods:{
			//获取一个商品
			async getGoodsOne(){				
				let res = await  goodsCloudObj.getOne(goodID);
				console.log(res);
				this.goodsFormData = res.data[0]
			},
			
			
			//属性返回子元素的名称
			skuChildName(arr){
				let nsArr =  arr.map(item=>{
					return item.name
				})
				return nsArr.join("/")
			},		
			
			
			//点击确认选择
			clickConfirmSelect(){
				let arr = this.skuArr.filter(item=>{
					let state =  item.children.some(child=>child.checked)
					return item.checked && state
				}).map(item=>{
					let children =  item.children.filter(child=>{
						return child.checked
					})
					return {
						...item,
						children
					}
				})
				this.goodsFormData.sku_select = arr
				this.$refs.attrWrapPop.close();			
				
			},
			//获取sku列表
			async getSkuData(){
				let res = await skuCloudObj.get();
				this.skuArr = res.data
				console.log(res);
			},
			
			
			//点击添加属性
			clickAddAttr(index=null){
				if(index==null){
					this.addAttrType="parent"
					this.attrIndex=null
				}else{
					this.addAttrType="child"
					this.attrIndex=index
				}
				this.$refs.addAttrPop.open();
			},			
			//添加属性弹窗的确认按钮
			async dialogConfirm(e){
				if(!e) return;	
				if(this.addAttrType=="parent"){
					let obj={
						skuName:e,
						checked:true,
						children:[]
					}
					let res = await skuCloudObj.add(obj)
					obj._id = res.id;					
					this.skuArr.push(obj)					
					
				}else if(this.addAttrType=="child"){					
					let obj={
						name:e,
						checked:true
					}
					let id = this.skuArr[this.attrIndex]._id;
					let res = await  skuCloudObj.updateChild(id,obj)					
					this.skuArr[this.attrIndex].children.push(obj)
				}
				
			},
			
			//点击属性的复选框
			changeCheckbox(index){
				this.skuArr[index].checked  = !this.skuArr[index].checked 
			},
			
			//点击属性值的子元素
			clickChlidBtn(index,cIdx){
				this.skuArr[index].children[cIdx].checked =  !this.skuArr[index].children[cIdx].checked
			},
			
			
			//点击选择属性
			clickSelect(){
				this.$refs.attrWrapPop.open();					
				this.arrSetCheck(this.skuArr,this.goodsFormData.sku_select,"_id")
				
			},
			//选中项的数组格式化
			arrSetCheck(arr1,arr2,key){
				arr1.forEach(item=>{
					arr2.forEach(row=>{
						if(item[key] == row[key]){
							item.checked = true
							if(item?.children?.length) this.arrSetCheck(item.children,row.children,"name")							
						}
					})
				})
			},
			
			
			
			
			//点击提交表单
			onSubmit(){
				this.$refs.goodsForm.validate().then(res=>{
					this.toDataBase();
					
				}).catch(err=>{
					console.log(err);
				})
				// uni.redirectTo({
				//    url: '/pages/index/index'
				// });
			},
			//上传到云数据库
			async toDataBase(){
				if(this.goodsFormData.thumb.length==0){
					let initData={
						url:"https://www.baidu.com/img/flexible/logo/pc/result.png",
						name:"",
						extname:""
					}
					this.goodsFormData.thumb.push(initData)
				}else{
					this.goodsFormData.thumb = this.goodsFormData.thumb.map(item=>{
						return {
							url:item.url,
							name:item.name,
							extname:item.extname
						}
					})
				}

				
				let toastTit;
				if(goodID){
					toastTit = "修改成功"
					await goodsCloudObj.update(this.goodsFormData)
				}else{
					toastTit = "新增成功"
					await goodsCloudObj.add(this.goodsFormData)
				}
	
				
				uni.showToast({
					title:toastTit
				})
				setTimeout(()=>{
					uni.navigateBack()
				},1500)				
				
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
.goodsView{
	padding:30rpx;
	.skuList{
		.item{
			padding:30rpx;
			background: $page-bg-color;
			margin:15rpx 0;
			@include flex-box-set(start);
		}
	}
}


.attrWrapper{
	padding:30rpx;
	background: #fff;
	border-radius: 20rpx 20rpx 0 0;
	.head{
		@include flex-box();
		font-size: 34rpx;
		margin-bottom:30rpx;
		.title{
			font-weight: bold;
		}
		.addAttr{
			color:$brand-theme-color-aux;
		}
	}
	.body{
		.item{
			border-top:1px solid $border-color-light;
			&:last-child{
				border-bottom:1px solid $border-color-light;
			}
			.top{
				padding:30rpx 0;
				@include flex-box-set(start);
				.font{
					padding-left: 10rpx;
					font-weight: bold;
				}
			}
			.btnGroup{
				padding:10rpx 0 30rpx;
				@include flex-box-set(start);
				flex-wrap: wrap;
				.btn{
					padding:0rpx 25rpx;
					height: 60rpx;
					border:1rpx solid $border-color-light;
					margin-right: 20rpx;
					border-radius: 10rpx;					
					color:$text-font-color-2;
					margin-bottom:20rpx;
					@include flex-box-set();
					&.active{
						border-color: $brand-theme-color;
						color:$brand-theme-color;
						background: rgba(236,87,79,0.1);
					}
				}
			}
		}
	}
	
	.foot{
		padding:50rpx 200rpx;
	}
}
</style>
