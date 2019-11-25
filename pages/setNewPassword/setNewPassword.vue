<template>
	<!-- 设置新密码 -->
	<view class="container" >
		<view class="pass">
			<text class="title">新密码</text>
			<input class="phone" type="text" :password="isPassword" :value="newPwd"  @input="newpassword" placeholder="6-16位数字、字母" />
			<view class="line"></view> 
		</view>
		<view class="pass">
			<text class="title">确认密码</text>
			<input class="phone" type="text" :password="isPassword1" :value="newPwd1" @input="newpassword1" placeholder="请再次输入新密码" />
		</view>
		<view class="next" @click="next">确认</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isPassword:true,
				isPassword1:true,
				newPwd:'',
				newPwd1:'',
				iscode:'',
				phone:''
			}
		},
		onLoad(options) {
			this.iscode=options.code;
			this.phone=options.phone;
		},
		methods:{
			newpassword:function(e){
				this.newPwd=e.detail.value
			},
			newpassword1:function(e){
				this.newPwd1=e.detail.value
			},
			next(){
				var _this=this;
				var str =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				if(!str.test(this.newPwd)){
					uni.showToast({
						title:'密码格式不正确',
						icon:'none',
						duration:2000
					})
				}
				if(this.newPwd==""){
					uni.showToast({
						title:"请输入新密码",
						icon:"none",
						duration:2000
					})
					return false
				}
				if(this.newPwd1==""){
					uni.showToast({
						title:'请确认密码',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.newPwd1!==this.newPwd){
					uni.showToast({
						title:'两次密码不一致',
						icon:'none',
						duration:2000
					})
					return false
				}
				var str =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				if(!str.test(this.newPwd)){
					uni.showToast({
						title:'密码格式不正确',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.url+'users/forgot/change/',
					method:'POST',
					data:{
						mobile:this.phone,
						password:this.newPwd,
						sec_password:this.newPwd1,
						code:this.iscode,
					},
					header:{
					},
					success(res) {
						console.log(res)
						uni.navigateTo({
							url:'../login/login'
						})
						uni.showToast({
							title:'密码已重设，请登录',
							icon:'none',
							duration:2000
						})
					}
				})
			}
		}
	}
</script>

<style>
	page{
		background:#EDEEEE;
	}
	.pass{
		width:100%;
		height:120rpx;
		background: #FFFFFF;
		position: relative;
	}
	.title{
		float: left;
		width:140rpx;
		height: 120rpx;
		line-height: 120rpx;
		margin-left: 48rpx;
		font-size:34rpx;
	}
	.phone{
		float: right;
		width:540rpx;
		height:120rpx;
		font-size: 30rpx;
	}
	.line{
		width:650rpx;
		height:1rpx;
		border-bottom: 1rpx solid #EDEDED;
		position: absolute;
		left:48rpx;
		bottom:0;
	}
	.next{
		margin: 100rpx auto;
		width:600rpx;
		height:90rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
