<template>
	<view>

		<view class="searchLayout">
			<u-search placeholder="请输入搜索内容" v-model="keyword" clearabled showAction actionText="搜索" animation
				@search="onSearch" @custom="onSearch" @clear="onClear"></u-search>

			<view class="historyList" v-if="goodsData.length==0">
				<view class="item" v-for="(item,index) in historyList" :key="item">
					<view class="text" @click="clickHitText(item)">{{item}}</view>
					<view class="close" @click="onClose(index)">
						<u-icon name="close" size="16" color="#999"></u-icon>
					</view>
				</view>
			</view>

			<view class="goodsLayout">
				<view class="item" v-for="item in goodsData" :key="item._id">
					<product-item :item="item"></product-item>
				</view>
			</view>
			
			<view v-if="noData">
				<u-empty
					mode="search"
					icon="https://cdn.uviewui.com/uview/empty/search.png"
				>
				</u-empty>
			</view>
		</view>


		<pro-detail-popup></pro-detail-popup>
		<pro-select-specs></pro-select-specs>

		<view class="carOut">
			<car-layout v-if="buyNum>0"></car-layout>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from "vuex"
	const goodsCloudObj = uniCloud.importObject("mall-goods");
	export default {
		data() {
			return {
				keyword: "",
				historyList: [],
				goodsData: [],
				noData:false
			};
		},
		onLoad() {
			let historyList = uni.getStorageSync("historyList") || []
			this.historyList = historyList
		},
		computed: {
			...mapGetters(["buyNum","carsList"])
		},
		watch:{
			carsList:{
				deep:true,
				handler(){
					this.setNumValue();
				}
			}			
		},
		methods: {			
			//搜索事件
			onSearch() {
				this.historyList.unshift(this.keyword)
				this.historyList = [...new Set(this.historyList)];
				uni.setStorageSync("historyList", this.historyList);
				this.getData()
			},
			//删除历史
			onClose(index) {
				console.log(index);
				this.historyList.splice(index, 1);
				uni.setStorageSync("historyList", this.historyList)
			},
			//点击搜索历史的文字
			clickHitText(value) {
				this.keyword = value;
				this.getData();
			},
			//清空搜索框
			onClear(){
				this.keyword=""
				this.goodsData=[]
			},

			async getData() {
				let res = await goodsCloudObj.searchGoods(this.keyword);
				console.log(res);
				this.goodsData = res.data				
				this.setNumValue();
				if(this.goodsData.length){
					this.noData = false
				}else{
					this.noData = true
				}
			},
			setNumValue() {
				this.goodsData.forEach(item => {
					this.$set(item, "numvalue", 0)
				})
				this.carsList.forEach((item1,index1)=>{
					let index = this.goodsData.findIndex((item2,index2)=>{
						return item2._id == item1.goodsid
					})
					if(index>=0){
						this.$set(this.goodsData[index],'numvalue',item1.numvalue)
					}
				})			
			}
		}
	}
</script>

<style lang="scss">
	.searchLayout {
		padding: 30rpx;
		padding-bottom:150rpx;
		.historyList {
			margin-top: 30rpx;

			.item {
				@include flex-box();
				font-size: 32rpx;
				padding: 30rpx 0;
				color: #333;
				border-bottom: 1px solid $border-color-light;
			}
		}
	}
	.carOut{
		position:fixed;
		bottom: 0;
		left:0;
		width: 100%;
	}
</style>
