<template>
	<view class="selfAddress">
		<view class="headTop">
			<view class="title">地址簿</view>
			<navigator class="addressBtn" url="/pages/address/edit">
				+ 添加地址
			</navigator>
		</view>
		
		<view class="list">
			<view class="item" v-for="item in addressList" :key="item._id" @longpress="goUpdate(item._id)">
				<view class="head">
					<view class="user">{{item.username}},{{item.mobile}}</view>
					<view class="select"  @click="selectAddress(item)">
						<u-button v-if="item.selected" color="#EC544F" plain size="mini" text="默认地址"></u-button>
						<u-button color="#666" v-else plain size="mini" text="设为默认" @click="setDefault(item._id)"></u-button>
					</view>
				</view>
				<view class="buttomdown">
					<view class="more">
						{{item.area_name+item.address}}
					</view>
					<view class="deleteicon"   @click="deleteaddress(item._id)">
						<uni-icons custom-prefix="custom-icon" type="trash" size="30"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const addressCloudObj = uniCloud.importObject("mall-address")
	export default {
		data() {
			return {
				addressList:[]
			};
		},
		onShow(){
			this.getAddressData()
		},
		methods:{
			async getAddressData(){
				let res = await addressCloudObj.getList();				
				this.addressList = res.data
			},
			//设置默认地址
			async setDefault(id){
				let res = await addressCloudObj.updateDef(id);
				this.getAddressData()
			},
			//跳转到修改页面
			goUpdate(id){
				uni.navigateTo({
					url:"./edit?id="+id
				})
			},
			//用户选择地址
			selectAddress(item){
				let {address,area_name,username,mobile} = item;
				let deliveryData = {
					address:area_name+address,
					username,
					mobile
				}
				uni.$emit("selectAddressEvent",deliveryData)
				uni.navigateBack();
			},
			async deleteaddress(addressId){
				uni.showModal({
					title: '提示',
					content: '确定删除',
					success: async function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							let res = await addressCloudObj.removeAddRessById(addressId);
							if(res.code==-1){
								uni.showToast({
									title:res.msg,
									icon:"error"
								})
								return;
							}
							uni.redirectTo({
							   url: '/pages/address/list'
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background: $page-bg-color;
}
.selfAddress{
	padding:30rpx;
	.headTop{
		@include flex-box();
		font-size: 30rpx;
		font-weight: bold;
		.addressBtn{
			border:1px solid #000;
			border-radius: 50rpx;
			padding:6rpx 15rpx;
		}
	}
	.list{
		padding-top:30rpx;
		.item{
			background: #fff;
			padding:40rpx 20rpx;
			margin-bottom: 30rpx;
			border-radius: 15rpx;
			.head{
				@include flex-box();
				font-weight: bold;
				.left{
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
			.more{
				font-size: 28rpx;
				color:$text-font-color-3;
				padding-top:10rpx;
			}
			.buttomdown{
				display: flex;
				justify-content: space-between;
				.deleteicon{
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
		}
	}
}
</style>
