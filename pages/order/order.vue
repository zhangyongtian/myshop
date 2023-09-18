<template>
	<view>
	<uni-nav-bar title="我的订单"
	:border="false" backgroundColor="#fff" leftIcon="left"
	@clickLeft="clickLeft"
	statusBar
	></uni-nav-bar>	
	
	<view class="orderPage">		
		
		<view class="row" v-for="item in orderList" :key="item._id" @click="goDetail(item)">
			<view class="head">
				<view class="number" v-if="true">编号{{item.order_no}}</view>
				
				<view class="state">						
					<u-icon name="weixin-fill" size="22" color="#04C15F" v-if="item.payType == 'wxpay'"></u-icon>
					<u-icon name="zhifubao" size="22" color="#1578FF"  v-if="item.payType == 'alipay'"></u-icon>
					<text :class="item.status==-2?'err':''">
						{{statusText(item.status)}}
					</text> 
				</view>	
			</view>
			<view class="body" v-if="item.orderType!='payment'">{{getCarsListName(item.carsList)}}</view>
			<view class="body" v-else>直接转账给商家</view>
			<view class="footer">
				<view class="time">{{timeFormat(item.createTime,'yyyy-MM-dd hh:mm')}}</view>
				<view class="count" v-if="item.orderType!='payment'">
					共{{item.carsList.length}}件商品 ，实付<text class="price">￥{{priceFormat(item.total_fee)}}</text>
				</view>
			</view>
		</view>
	</view>
	
	</view>
</template>

<script>
	import {priceFormat,timeFormat} from "@/utils/tools.js"
	const orderCloudObj = uniCloud.importObject("mall-order");
	
	export default {
		data() {
			return {
				orderList:[]
			};
		},
		onLoad(){
			this.getOrderList();
		},
		methods:{
			priceFormat,
			timeFormat,
			//获取订单列表
			async getOrderList(){
				let res = await orderCloudObj.getList();
				console.log(res);
				this.orderList = res.data
			},
			
			//支付状态的显示
			statusText(value){
				let obj = {
					"-2":"支付异常",
					"-1": "已关闭",
					"1": "已支付",
					"0": "未支付",
					"2": "已部分退款",
					"3": "已全额退款"
				};
				return obj[value]
			},
			
			
			//跳转到详情页
			goDetail(value){
				let params = encodeURI(JSON.stringify(value));
				uni.navigateTo({
					url:"/pages/order/detail?item="+params
				})
			},
			//将购物车列表遍历生成名称
			getCarsListName(arr){
				let name = arr.map(item=>{
					return item.name
				})
				return name.join(" / ")
			},
			
			//点击左箭头返回首页
			clickLeft(){
				uni.reLaunch({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background: $page-bg-color;
}
.orderPage{
	padding:30rpx;
	.row{
		background: #fff;
		padding:40rpx 20rpx;
		border-radius: 20rpx;
		margin-bottom:30rpx;
		.head{
			@include flex-box();
			font-size:32rpx;	
			.number{
				@include flex-box-set(start);
				.way{
					background: #19be6b;
					color:#fff;
					font-size: 22rpx;
					padding:6rpx 20rpx;
					border-radius: 30rpx;
					margin-left: 10rpx;
					&.self{
						background: #FF9100;
					}
				}
			}
			.state{
				color:$brand-theme-color-aux;
				@include flex-box-set(start);
				.err{
					color:#F56C6C;
				}
			}
		}
		.body{
			border:1px solid $border-color;
			padding:60rpx 20rpx;
			border-radius: 10rpx;
			background: #F9F9F9;
			font-size: 34rpx;
			margin:30px 0;
		}
		.footer{
			@include flex-box();
			font-size: 26rpx;
			color:#a5a5a5;
			.price{
				font-weight: bold;
				color:#000;
			}
		}
	}
}
</style>
