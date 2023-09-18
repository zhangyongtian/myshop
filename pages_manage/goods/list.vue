<template>
	<view class="goodsList">
		<navigator url="./add" class="row add">
			<view class="left">
				<u-icon name="plus" color="#576b95" size="22"></u-icon>
				<text class="text">新增商品</text>
			</view>
		</navigator>
		<view class="row" v-for="item in goodsList" :key="item._id">
			<view class="title">
				<uni-section :title="item.name" type="line"></uni-section>
			</view>
			<view class="goodsRow" v-for="row in item.proGroup" :key="row._id">
				<view class="view">
					<view class="left">
						<image v-if="row.thumb.length" class="pic" :src="row.thumb[0].url" mode="aspectFill"></image>
						<image v-else class="pic" src="../../static/images/logo.png" mode="aspectFill"></image>
						
					</view>
					<view class="right">
						<view class="top">{{row.name}}</view>
						<view class="info">
							<view class="icon" @click="clickEdit(row._id)">
								<u-icon name="edit-pen" size="25"></u-icon>
							</view>
							<view class="icon" @click="clickRemove(row._id)">
								<u-icon name="trash" size="25"></u-icon>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const goodsCloudObj = uniCloud.importObject("mall-goods")
	export default {
		data() {
			return {
				goodsList:[]
			};
		},
		onShow() {
			this.isManage();
			this.getGoodsList();
		},
		methods: {
			//点击跳转到修改页面
			clickEdit(id){				
				uni.navigateTo({
					url:"./add?id="+id
				})
			},
			
			
			//删除某一个商品
			clickRemove(id){
				uni.showModal({
					title:"是否确认删除",
					success:res=>{
						if(res.confirm){
							this.removeGoods(id)
						}
					}
				})
				
				
			},
			
			//删除数据
			async removeGoods(id){
				let res =await goodsCloudObj.remove(id);					
				if(res.code==-1){
					uni.showToast({
						title:res.msg,
						icon:"error"
					})
					return;
				}		
				this.getGoodsList();
			},
			
			
			
			//获取商品列表
			async getGoodsList() {
				let res =await goodsCloudObj.getList();
				console.log(res);
				this.goodsList = res
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodsList {
		padding: 30rpx;

		.row {
			border-bottom: 1px solid #ededed;
			padding: 25rpx 0;

			.title {
				margin-left: -20rpx;
			}

			.goodsRow {
				.view {
					display: flex;
					padding: 10rpx 0;
					@include flex-box();

					.left {
						width: 150rpx;
						height: 150rpx;

						.pic {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}

					.right {
						flex: 1;
						padding-left: 20rpx;
						display: flex;
						justify-content: space-between;
						flex-direction: column;
						height: 150rpx;

						.top {
							font-size: 36rpx;
							font-weight: 600;
						}

						.info {
							display: flex;

							.icon {
								padding: 6rpx;
							}
						}
					}

				}
			}
		}

		.row.add {
			.left {
				color: $brand-theme-color-aux;
				@include flex-box-set(start);

				.text {
					font-size: 36rpx;
					padding-left: 10rpx;
				}
			}
		}
	}
</style>
