<template>
	<view class="addressForm">
		<u--form
			labelPosition="top"
			:model="addressForm"
			:rules="addressRules"
			labelWidth="100"
			ref="uForm"			
		>
		
			<u-form-item
				label="姓名"
				prop="username"					
			>
				<u--input
					v-model="addressForm.username"
					placeholder="请输入姓名"
				></u--input>
			</u-form-item>
			
			
			<u-form-item
				label="联系电话"
				prop="mobile"					
			>
				<u--input
					v-model="addressForm.mobile"
					placeholder="请输入联系电话"
				></u--input>
			</u-form-item>
			
			<u-form-item label="选择地区">				
				<uni-data-picker v-model="addressForm.area_code" placeholder="请选择地址" popup-title="请选择所在地区" collection="opendb-city-china" field="code as value, name as text" orderby="value asc" self-field="code" parent-field="parent_code"
				 @change="pickerChange">
				 </uni-data-picker>				
			</u-form-item>
			
			
			<u-form-item
				label="详细地址"
				prop="address"					
			>
				<u--input
					v-model="addressForm.address"
					placeholder="请输入街道门牌号"
				></u--input>
			</u-form-item>
			
			<u-form-item label="是否默认">
				<u-switch v-model="addressForm.selected"
					inactiveColor="#eee"
				></u-switch>
			</u-form-item>
			
			<u-form-item></u-form-item>
			
			<u-form-item>
				<u-button type="primary" @click="onSubmit">提交</u-button>
			</u-form-item>
		
		</u--form>
	</view>
</template>

<script>
	const addressCloudObj = uniCloud.importObject("mall-address");
	let addressId;
	export default {
		data() {
			return {
				addressForm:{
					username:"",
					mobile:"",
					address:"",
					selected:false,
					area_code:"",
					area_name:""
				},
				addressRules:{
					username:[
						{
							required: true,
							message: '姓名是必填的',							
							trigger: ['blur', 'change']
						},{
							min: 2,
							max: 8,
							message: '长度在2-8个字符之间',
							trigger: ['blur', 'change']
						}
					],
					mobile:[
						{
							required: true,
							message: '电话是必填的',							
							trigger: ['blur', 'change']
						},{							
							validator: (rule, value, callback) => {								
								return uni.$u.test.mobile(value);
							},
							message: '手机号码不正确',							
							trigger: ['change','blur']
						}
					],
					address:[
						{
							required: true,
							message: '地址是必填的',							
							trigger: ['blur', 'change']
						}
					]
				}
			};
		},
		
		onLoad(e){
			addressId = e?.id ?? null;
			if(addressId) this.getAddressOne();
		},
		
		methods:{
			onSubmit(){
				this.$refs.uForm.validate().then(async res => {
					let title;
					if(this.addressForm._id){
						let resData =  await addressCloudObj.updateOne(this.addressForm)
						title="修改成功"
					}else{
						let resData =  await addressCloudObj.add(this.addressForm)
						title="新增成功"
					}										
					uni.showToast({
						title,
						mask:true
					})
					setTimeout(()=>{
						uni.navigateBack()
					},1000)		
										
										
				}).catch(errors => {
					uni.$u.toast('校验失败')
				})
			},
			
			//地区选择时间改变的时候
			pickerChange(e){
				console.log(e);
				let area_name = e.detail.value.map(item=>{
					return item.text
				})
				
				this.addressForm.area_name = area_name.join("")
			},
			
			//获取一条地址信息
			async getAddressOne(){
				let res = await addressCloudObj.getOne(addressId);
				console.log(res);
				this.addressForm = res.data[0]
			}
		}
	}
</script>

<style lang="scss">
.addressForm{
	padding:30rpx;
}
</style>
