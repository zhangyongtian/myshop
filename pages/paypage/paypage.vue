<template>
	<view class="paypage">
		<delivery-layout :deliveryInfo="deliveryInfo"></delivery-layout>
		
		<view class="goodsList">
			<goods-list :goodsList="carsList" :totalPrice="totalPrice" :prePrice="preferentialPrice"></goods-list>
		</view>
		
		
		<!-- #ifndef MP-WEIXIN -->		
		<view class="paytype">
			<view class="box" :class="item.value == payDefValue ? 'active':''" v-for="item in payType"
			@click="clickPayBtn(item.value)"
			>
				<u-icon :name="item.icon" :color="item.color" class="icon" size="26"></u-icon>				
				<text class="font">{{item.name}}</text>
			</view>
		</view>		
		<!-- #endif -->
		
		
		<view class="payTabbar">
			<car-layout type="pay" :payBtnState="payBtnState" @confirmPay="onConfirmPay"></car-layout>
		</view>
		
		
		<uni-pay ref="uniPay" returnUrl="/pages/order/order"
		@success="paySuccess"
		@cancel="payCancel"
		@create="payCreate"
		></uni-pay>
		
		
	</view>
</template>

<script>
	import {mapGetters,mapMutations} from "vuex"	
	const addressCloudObj = uniCloud.importObject("mall-address");
	const orderCloudObj = uniCloud.importObject("mall-order",{
		customUI:true
	});
	export default {
		data() {
			return {
				deliveryInfo:{
					address:"",
					username:"",
					mobile:""
				},
				
				// #ifdef APP-PLUS || H5
				payDefValue:"alipay",
				// #endif
				
				// #ifdef MP-WEIXIN
				payDefValue:'wxpay',
				// #endif
				
				payType:[{
					name:"支付宝",
					value:"alipay",
					color:"#1578FF",
					icon:"zhifubao"
				},
				//TODO 这里如果网页对接微信的时候使用
				// ,{
				// 	name:"微信",
				// 	value:"wxpay",
				// 	color:"#04C15F",
				// 	icon:"weixin-fill"
				// }
				],
				
				payLoading:true
			};
		},
		computed:{
			...mapGetters(['carsList','totalPrice','preferentialPrice']),
			payBtnState(){
				let bool = Object.keys(this.deliveryInfo).every(item=>{
					return this.deliveryInfo[item]!=""
				})				
				return this.carsList.length>0 && this.totalPrice>0 && bool && this.payLoading
			}
		},
		onLoad(){
			this.getDefAddressData();	
			uni.$on("selectAddressEvent",(e)=>{				
				this.deliveryInfo = e;				
			})
		},
		onUnload(){
			uni.$off("selectAddressEvent")
		},
		
		methods:{
			...mapMutations(["SET_CARS_LIST"]),
			
			//点击支付按钮发起支付	
			async onConfirmPay(){
				this.payLoading = false;				
				let obj={
					deliveryInfo:this.deliveryInfo,
					carsList:this.carsList,
					createTime:Date.now(),
					payType:this.payDefValue,
					status:0,
					total_fee:this.totalPrice,
					done:false
				}				
				
				let order_no = await orderCloudObj.createOrder(obj);
				let out_trade_no = order_no+"_"+ String(Math.random()).substring(3,9)
				
				
				this.$refs.uniPay.createOrder({
					provider: this.payDefValue, // 支付供应商
					total_fee: this.totalPrice, // 支付金额，单位分 100 = 1元
					type: "goods", // 支付回调类型
					order_no, // 业务系统订单号
					out_trade_no, // 插件支付单号
					description: "购买商品的支付", // 支付描述
				})
			},
			
			
			//支付成功的回调
			paySuccess(e){
				this.payLoading = true;
				this.SET_CARS_LIST();
				console.log(e);
			},
			payCancel(e){
				this.payLoading = true;
				console.log(e);
			},
			payCreate(e){
				console.log(e);
			},
			
			
			
			
			
			//选择支付类型
			clickPayBtn(value){
				this.payDefValue = value
			},
			
			//获取默认地址
			async getDefAddressData(){
				let res = await addressCloudObj.getDefAddress();							
				if(!res.data.length) return;
				let {address,area_name,username,mobile}  = res.data[0];				
				this.deliveryInfo = {
					address:area_name+address,
					username,
					mobile
				}
				
			}
		}
	}
</script>

<style lang="scss">
page{
	background: $page-bg-color;
}
.paypage{
	padding:30rpx;
	.goodsList{
		margin-top:30rpx;
	}
	.paytype{
		@include flex-box();
		.box{
			width: 49%;
			height: 75rpx;
			background: #fff;
			border-radius: 10rpx;
			@include flex-box-set();
			border:1px solid #fff;
			filter: grayscale(100%);
			.font{
				padding-left:10rpx;
			}
		}
		.box:first-child.active{
			border-color:#1578FF;
			color:#1578FF;
			filter: grayscale(0%);
		}
		.box:last-child.active{
			border-color:#04C15F;
			color:#04C15F;
			filter: grayscale(0%);
		}
	}
	.payTabbar{
		position: fixed;
		width: 100%;
		bottom:0;
		left:0;
	}
}
</style>
