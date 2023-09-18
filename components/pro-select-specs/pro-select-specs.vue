<template>
	<view class="proSpecs">
		<u-popup :show="proSpecsState" @close="onClose" closeable round="10" z-index="20001"
		:overlayStyle="{zIndex:20000}"
		>
			<view class="proSpecsWrapper">
				<view class="top"></view>

				<view class="body">
					<scroll-view class="scrollView" scroll-y>
						<view class="proItem">
							<product-item :item="detailData" :btnState="false"></product-item>
						</view>

						<view class="selectWrapper" v-if="selectShow">
							<view class="list" v-for="(item,itemIndex) in detailData.sku_select">
								<view class="title">{{item.skuName}}</view>
								<view class="group">
									<view class="btn" 
									:class="skuArr.includes(child.name) ? 'active': ''"
									@click="clickSelect(itemIndex,childIndex)" v-for="(child,childIndex) in item.children">{{child.name}}</view>
								</view>
							</view>
						</view>
						
						<view class="numSelect">
							<view class="title">购买数量</view>
							<u-number-box v-model="numvalue"></u-number-box>
						</view>
					</scroll-view>
				</view>

				<view class="footer">
					<u-button color="#EC544F" icon="shopping-cart" iconColor="#fff"
					:disabled="confirmState"
					@click="clickConfirm"
					>确认</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapMutations
	} from "vuex"
	export default {
		name: "pro-select-specs",
		data() {
			return {
				numvalue:1,
				userSelect:[]
			};
		},
		computed: {
			...mapGetters(["proSpecsState", "detailData"]),		
			selectShow(){
				return this.detailData?.sku_select?.length ?? null
			},
			skuArr(){
				return this.userSelect.map(item=>{
					return item.name
				})
			},
			confirmState(){
				if(this.userSelect.length == this.detailData?.sku_select?.length){
					return false;
				}else{
					return true;
				}
			}
		},
		methods: {
			...mapMutations(["SET_PRO_SPECS","SET_DETAIL_STATE","SET_CARS_LIST"]),
			onClose() {
				this.SET_PRO_SPECS(false);
				this.userSelect=[]
				this.numvalue=1
			},
			//点击选择按钮
			clickSelect(itemIndex,childIndex){				
				let obj = {
					id:this.detailData.sku_select[itemIndex]._id,
					name:this.detailData.sku_select[itemIndex].children[childIndex].name
				}				
				let index = this.userSelect.findIndex(item=>{
					return item.id == obj.id
				})				
				if(index<0){
					this.userSelect.push(obj)
				}else{
					this.userSelect.splice(index,1,obj)
				}
			},
			//点击选择规格确认按钮
			clickConfirm(){
				let proItem = JSON.parse(JSON.stringify(this.detailData))
				if(this.skuArr.length) proItem.skuArr = this.skuArr;
				proItem.add = true
				this.SET_CARS_LIST({item:proItem,num:this.numvalue})
				this.onClose();
				this.SET_DETAIL_STATE(false);
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.proSpecsWrapper {
		height: 70vh;

		.top {
			height: 80rpx;
			width: 100%;
		}

		.body {
			height: calc(100% - 220rpx);

			.scrollView {
				height: 100%;
				padding: 0 30rpx;
				.proItem{
					border-bottom:1px solid $border-color-light;
				}

				.selectWrapper {
					border-bottom: 1px solid $border-color-light;
					padding: 10rpx 0;					
					.list {
						padding: 20rpx 0;
						.title {
							font-size: 32rpx;
							font-weight: bold;
							padding-bottom: 20rpx;
						}
						.group {
							@include flex-box-set(start);
							flex-wrap: wrap;
							.btn {
								padding: 0rpx 25rpx;
								height: 60rpx;
								border: 1rpx solid $border-color-light;
								margin-right: 20rpx;
								border-radius: 10rpx;
								color: $text-font-color-2;
								margin-bottom: 20rpx;
								@include flex-box-set();
								background: $page-bg-color;
								&.active {
									border-color: $brand-theme-color;
									color: $brand-theme-color;
									background: rgba(236, 87, 79, 0.1);
								}
							}
						}
					}
				}
				
				.numSelect{
					display: flex;
					align-items: center;
					padding:30rpx 0;
					border-bottom:1px solid $border-color-light;
					.title{
						font-size: 32rpx;
						font-weight: bold;					
						padding-right: 30rpx;
					}
				}
			}
		}

		.footer {
			height: 140rpx;
			border-top: 1px solid $border-color-light;
			@include flex-box-set();
			padding: 0 200rpx;
		}
	}
</style>
