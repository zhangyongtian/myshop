<template>
	<view>
		<view class="customHead" :style="{height:totalHeight+'px'}" v-if="brandData.name">
			<view class="bg">
				<image class="bgimg" :src="brandData.thumb[0].url" mode="aspectFill"></image>
			</view>
			<view class="container">
				<view class="statusBar" :style="{height:statusBarHeight+'px'}"></view>
				<view class="service" :style="{height:titleBarHeight+'px'}" v-if="!foldState">
					<view class="kefu">
						<u-icon name="server-fill" size="22" color="#fff"></u-icon>
					</view>
					<navigator url="/pages_manage/index/index" class="manage" v-if="manageState">
						<u-icon name="bag-fill" size="22" color="#fff"></u-icon>
						后台管理
					</navigator>
				</view>
				<view class="body" :class="foldState?'fold':''" :style="{height:bodyBarHeight+'px'}">
					<view class="brand" @click="clickBrand">
						<view class="pic">
							<image class="img" :src="brandData.thumb[0].url" mode="aspectFill"></image>
						</view>
						<view class="text">
							<view class="title">
								<text class="font">{{brandData.name}}</text>
								<u-icon class="icon" name="more-circle" size="22" color="#fff"></u-icon>
							</view>
							<view class="des">{{brandData.about}}</view>
						</view>
					</view>
					<!-- 给商家付款功能 -->
<!-- 					<view class="code" @click="clickPay">
						<view class="pic">
							<image class="img" src="../../static/images/qrcode.png" mode="aspectFill"></image>
						</view>
						<text class="pay">付款</text>
					</view> -->
				</view>

			</view>
		</view>


		<view v-if="brandData.name">
			<uni-popup ref="brandPopup" type="bottom">
				<view class="brandWrapper">
					<view class="close" @click="closeBrandPop">
						<u-icon name="arrow-down" color="#666"></u-icon>
					</view>

					<view class="brand">
						<view class="pic">
							<image class="img" :src="brandData.thumb[0].url" mode="aspectFill"></image>
						</view>
						<view class="title">{{brandData.name}}</view>
						<view class="des">{{brandData.about}}</view>
					</view>

					<view class="cell">
						<u-cell-group>
							<u-cell icon="phone" :title="brandData.mobile" isLink
								@click="clickMobile(brandData.mobile)"></u-cell>
							<u-cell icon="map" :title="brandData.address" isLink @click="clickMap(brandData.address)">
							</u-cell>
						</u-cell-group>
					</view>

				</view>
			</uni-popup>
			
			
			
			<u-modal :show="payPopState" showCancelButton title="付款给商家" @confirm="payConfirm" @cancel="payCancel">			
				<u--input
					placeholder="请输入付款金额"
					border="surround"
					clearable
					type="number"
					v-model="total_fee"
					focus
					autoBlur
				></u--input>			
			</u-modal>
					
					
			<uni-pay ref="uniPay"  return-url="/pages/order/order" @success="paySuccess" @cancel="payCancel"></uni-pay>
		
			
			
			
			
			
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from "vuex"

	const orderCloudObj = uniCloud.importObject("mall-order",{
		customUI:true
	});
	export default {
		name: "custom-head-bar",
		data() {
			return {
				payPopState:false,
				total_fee:null
			};
		},
		computed: {
			...mapGetters(["statusBarHeight", "titleBarHeight", "bodyBarHeight", "totalHeight", "foldState", "brandData"]),
			manageState(){
				console.log(uniCloud.getCurrentUserInfo().role.includes("manage"))
				return uniCloud.getCurrentUserInfo().role.includes("manage")
			}
		},
		props: {

		},
		created() {		
			
			this.getBrandData();
		},
		methods: {
			...mapMutations(["SET_BRAND"]),
			...mapActions(["getBrandData"]),
			//点击付款
			clickPay(){
				this.payPopState=true;
			},
			
			//点击付款弹窗
			payConfirm(){
				this.payPopState=false
				this.createOrder();
			},
			
			//取消付款
			payCancel(){
				this.payPopState=false
			},
			
			async createOrder(){
				let obj={
					createTime:Date.now(),					
					status:0,
					total_fee:Number(this.total_fee)*100,
					done:false,
					orderType:"payment"
				}
				let order_no = await orderCloudObj.createOrder(obj);
				let out_trade_no = order_no+"_"+ String(Math.random()).substring(3,9)
				
				this.$refs.uniPay.open({
					total_fee: Number(this.total_fee)*100, // 支付金额，单位分 100 = 1元
					type: "recharge", // 支付回调类型
					order_no, // 业务系统订单号
					out_trade_no, // 插件支付单号
					description: "直接向商户转账", // 支付描述
				});
				
			},
			
			
			
			//支付成功回调
			paySuccess(e){
				console.log(e);
			},

			//点击弹窗品牌更多信息
			clickBrand() {
				this.$refs.brandPopup.open();
			},
			//关闭品牌弹窗
			closeBrandPop() {
				this.$refs.brandPopup.close();
			},
			// 点击拨通电话
			clickMobile(value) {				
				uni.makePhoneCall({
					phoneNumber:value
				})
			},
			// 点击打开地图
			clickMap(value) {				
				
				uni.request({
					url:"https://restapi.amap.com/v3/geocode/geo",
					data:{
						key:"413e973aebeaaf1bf20d6f40ccf95049",
						address:value
					},
					success:res=>{						
						let location = res.data.geocodes[0].location
						let arr = location.split(",").map(item=>Number(item))						
						uni.openLocation({
							latitude:arr[1],
							longitude:arr[0]
						})
					}
				})
				
				
				
			}
		}
	}
</script>

<style lang="scss">
	.customHead {
		height: 400rpx;
		overflow: hidden;
		position: relative;

		.bg {
			width: 100%;
			height: 100%;
			background: #000;

			.bgimg {
				width: 100%;
				height: 100%;
				filter: blur(30rpx);
				transform: scale(2);
			}
		}

		.container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;

			.statusBar {}

			.service {
				padding-left: 30rpx;
				@include flex-box-set(start);
				color: #fff;

				.manage {
					margin-left: 20rpx;
					@include flex-box-set(start);
				}
			}

			.body {
				@include flex-box();
				padding: 0 45rpx;
				height: 100px;
				transition: 0.3s;

				.brand {
					width: 580rpx;
					@include flex-box-set(start);

					.pic {
						width: 110rpx;
						height: 110rpx;
						border-radius: 50%;
						overflow: hidden;
						transition: 0.3s;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.text {
						flex: 1;
						padding: 0 30rpx;
						color: #fff;

						.title {
							font-size: 36rpx;
							font-weight: 800;
							display: flex;
							align-items: center;

							.font {
								margin-right: 10rpx;
							}
						}

						.des {
							font-size: 26rpx;
							width: 100%;
							opacity: 0.8;
							padding-top: 5rpx;
							@include ellipsis()
						}
					}
				}

				.code {
					width: 80rpx;
					height: 80rpx;
					border-left: 1px solid rgba(255, 255, 255, 0.6);
					@include flex-box-set(between);
					flex-direction: column;

					.pic {
						width: 40rpx;
						height: 40rpx;

						.img {
							width: 100%;
							height: 100%;
						}
					}

					.pay {
						font-size: 22rpx;
						color: #fff;
						text-align: center;
					}
				}

				&.fold {
					padding: 0 30rpx;

					.brand {
						.pic {
							width: 60rpx;
							height: 60rpx;
						}

						.text {
							padding-left: 15rpx;

							.title {
								font-size: 28rpx;

								.icon {
									transform: scale(0.9);
								}
							}

							.des {
								display: none;
							}
						}

					}

					.code {
						display: none;
					}
				}

			}

		}

	}

	.brandWrapper {
		padding: 30rpx;
		border-radius: 20rpx 20rpx 0 0;
		background: #fff;
		@include flex-box();
		flex-direction: column;

		.close {
			background: $page-bg-color;
			padding: 5rpx 20rpx;
			border-radius: 30rpx;
		}

		.brand {
			@include flex-box();
			flex-direction: column;
			padding: 30rpx 0;

			.pic {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				overflow: hidden;

				.img {
					width: 100%;
					height: 100%;
				}
			}

			.title {
				font-size: 34rpx;
				color: $text-font-color-1;
				padding: 10rpx 0;
			}

			.des {
				font-size: 28rpx;
				color: $text-font-color-2;
			}

		}

		.cell {
			width: 100%;
			padding: 30rpx 0 100rpx;
		}
	}
</style>
