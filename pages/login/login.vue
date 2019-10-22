<template>
	<!-- 登录 -->
	<view class="container">
		<image class='logo' src="../../static/images/FIL.png" mode=""></image>
		<view class='fil'>Filecoin</view>
		<view class="enter">
			<image class="icon" src="../../static/images/phone.png" mode=""></image>
			<input class="number" maxlength="11" type="number" :value="phone" placeholder="请输入手机号码" @input="getPhoneValue" @blur="getNumber"/>
		</view>
		<view class="enter">
			<image class="icon" src="../../static/images/lock.png" mode=""></image>
			<input class="number" type="text" :value="password" placeholder="请输入密码" @input="getPasswordValue" />
		</view>
		<view class="tip">
			<navigator url="../otherLogin/otherLogin" class="tips">快速登录</navigator>
			<navigator url="../getBackPassword/getBackPassword" class="tips">忘记密码</navigator>
		</view>
		<view class='btn' type="primary" @click="login">登录</view>
		<navigator url="../register/register" class="register">
			注册
		</navigator>
		<view class="agree" >
			<!-- <view class="check"></view> -->
			<label>
				<checkbox /><text>我已阅读并同意【<text style="color: #34b5c1;" @click="agree">星际云通用户协议</text>】</text>
			</label>
			
		</view>
		<!-- <neil-modal 
		    :show="show" 
		    @close="closeModal" 
		    title="标题" 
		    content="这里是正文内容，这里是正文内容，这里是正文内容，这里是正文内容，这里是正文内容，这里是正文内容"
		    @cancel="bindBtn('cancel')" 
		    @confirm="bindBtn('confirm')">
		</neil-modal>
		<uni-popup ref="popup" type="center" custom="true">
			<view class='pop'>标题</view>
		</uni-popup> -->
	</view>
</template>

<script>
	
	import neilModal from '@/components/neil-modal/neil-modal.vue';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		data() {
			return {
				show:false,
				phone:'',
				password:'',
				
			};
		},
		
		components: {
			neilModal,
		    uniPopup
		},
		methods:{
			getPhoneValue:function(e){
				this.phone=e.detail.value
			},
			getNumber:function(e){
				var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				this.phone=e.detail.value
			
				   if(!myreg.test(this.phone)){
					 uni.showToast({
					 	title:'请输入正确的手机号',
						icon:'none',
						mask:true,
						duration:2000
					 })
				   }
				  return false
				
			},
			getPasswordValue:function(e){
				this.password=e.detail.value
				console.log(this.password)
			},
			login() {
				//this.$refs.popup.open()
				if(this.phone==""){
					uni.showToast({
						icon:'none',
						title:'请输入手机号'
					})
					return false;
				}
				var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;	
				if(!myreg.test(this.phone)){
					 uni.showToast({
					 	title:'请输入正确的手机号',
						icon:'none',
						mask:true,
						duration:2000
					 })
					  return false
				 }
				 
				if(!this.password){
					uni.showToast({
						icon:'none',
						title:'请输入密码'
					})
					return false
				}
				uni.request({
					url: this.url+'users/login/',
					method: 'POST',
					data: {
						mobile:this.phone,
						password:this.password
					},
					headers: {
					    "Content-Type": "application/json"
					},
					success: res => {
						// plus.storage('token',res.data.token)
						// uni.setStorage('token',res.data.token)
						console.log(res)
						if(res.statusCode==400){
							uni.showToast({
								title:'用户信息不存在',
								icon:'none'
							})
						}
						if(res.statusCode==200){
							uni.reLaunch({
								url:'../index/index'
							});
						}
						
					},
		            fail: () => {},
					complete: () => {}
				});
				
			},
			agree(){
				uni.navigateTo({
					url:'../agreement/agreement'
				});
			}
			
		}
	}
</script>

<style>
	
	page{
		background: #121212;
	}
	.logo{
		width:185rpx;
		height:185rpx;
		margin-top:135rpx;
		margin-left: calc((100% - 185rpx)/2);
	}
	.fil{
		height:100rpx;
		line-height: 100rpx;
		text-align: center;
		color: #fff;
		font-size: 64rpx;
		margin-bottom: 100rpx;
	}
	.enter{
		
		width:600rpx;
		height:100rpx;
		margin: 30rpx auto;
		border-bottom: 1px solid #555555;
	}
	.icon{
		float:left;
	    display: block;
		width:50rpx;
		height:50rpx;
		margin-top:25rpx;
	}
	.number{
		float:right;
		width:520rpx;
		height:100rpx;
		color:#646464;
		font-size: 30rpx;
	}
	.tip{
		width:600rpx;
		margin: 0 auto;
		height:20rpx;
		display: flex;
		font-size: 28rpx;
		justify-content: space-between;
	}
	.tips{
		line-height: 20rpx;
		color:#646464;
	}
	.btn{
		width:680rpx;
		height:80rpx;
		background: #fff;
		border-radius: 50rpx;
		margin:80rpx auto;
		color:#333;
		text-align: center;
		line-height: 80rpx;
	}
	.register{
		width:150rpx;
		height:57rpx;
		border-radius: 30rpx;
		border: 1px solid #fff;
		margin:0 auto;
		color:#fff;
		font-size: 26rpx;
		line-height: 57rpx;
		text-align: center;
	}
	.agree{
		width:340rpx;
		height:30rpx;
		color:#fff;
		font-size: 18rpx;
		position: fixed;
		bottom:50rpx;
		left:calc((100% - 340rpx)/2);
	}
	.check{
		float: left;
		width:20rpx;
		height:20rpx;
		margin-right: 10rpx;     
		outline: 0;
		border: 1px solid #d1d1d1;
		background-color: #fff;
		border-radius: 3px;
		margin-top:5rpx;
	}
	/* #ifdef H5 */
	checkbox .uni-checkbox-input{
		border-radius: 50%;
	}
	checkbox .uni-checkbox-input.uni-checkbox-input-checked{
		border:1px solid #ff4500;
		background: #ff4500;
		color:#fff !important;
	}
	checkbox .uni-checkbox-input.uni-checkbox-input-checked:after{
		font-size: 36rpx;
	}
	/* #endif */
	/* #ifdef APP-PLUS||MP-WEIXIN */
	checkbox .wx-checkbox-input{             
		width:30rpx;
		height:30rpx;
		border-radius: 10rpx;
	}
	/* 选中后的背景样式 */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked{    
		border:1px solid #ff4500;
		background: #ff4500;
		color:#fff !important;
	}
	/* 选中后的对勾样式 */
	checkbox .wx-checkbox-input.wx-checkbox-input-checked:after{
		width:30rpx;
		height:30rpx;
		font-size: 36rpx;
	}
	/* #endif */

</style>
