<template> 
	<!-- 设置登录密码 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<text class="email1" >手机号：{{phone}}</text>
		</view>
		<view class="linee"></view>
		<view class="list">
				<input class="code"  type="number" @input='getCodeValue' :value="code" placeholder="请输入手机验证码" />
				<button class="getcode"  @click='getCodeBtn' :disabled="disabled">{{codename}}</button>
		</view>
		<view class="set">设置登录密码</view>
		<view class="list">
			<view class="title">登录密码</view>
			<input class="code" style='width:400rpx;' :password="isPassword" :value="pwd" @input='getLoginPassword'  placeholder="6-16位数字,字母" />
			<image :class="isPassword?'close':'cloose'" :src="isPassword?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list">
			<view class="title">确认密码</view>
			<input class="code" :password="isPassword1" :value="pwd1" @input='getLoginPassword1' placeholder="请再次输入登录密码" />
			<image :class="isPassword1?'close':'cloose'" :src="isPassword1?'../../static/images/password.png':'../../static/images/openeye.png'" @click="show1" mode=""></image>
		</view>
		<view class="save"  @click="save">确认</view>
		
	</view>
</template> 
 
<script>
	export default{
		data(){
			return{
				isPassword:true,
				isPassword1:true,
				phone:this.global_.phone,
				codename: ' 获取验证码 ',
				pwd:'',
				pwd1:'',
				iscode:'',
				code:'',
				disabled:false,
				
			}
		},
        onBackPress(option){
              plus.key.hideSoftKeybord()    
            },
		methods:{
			getLoginPassword:function(e){
				this.pwd=e.detail.value
			},
			getLoginPassword1:function(e){
				this.pwd1=e.detail.value
			},
			getCodeValue:function(e){
				this.code=e.detail.value
			},
			show:function(){
				this.isPassword=!this.isPassword
			},
			show1:function(){
				this.isPassword1=!this.isPassword1
			},
			other:function(){
				uni.navigateTo({
					url:'../change-pass/change-pass'
				})
			},
			getCode: function () {
			      var _this = this;
			        uni.request({
						//短信接口
					  url: _this.url + 'users/login/sms/',
			          method: 'POST',
			          data: {
			            mobile: this.phone,
			          },
			          header: {
			            "Content-Type": "application/x-www-form-urlencoded"
			          },
			          success(res) {
			            //根据code判断
						console.log(res)
			            var ocode = res.statusCode
			            if (ocode == 200) {
			              _this.iscode = res.data.data;
						  var num = 61;
						  var timer = setInterval(function () {
						    num--;
						    if (num <= 0) {
						      clearInterval(timer);
						  	
						      _this.codename = '重新发送',
						      _this.disabled = false
						    } else {
						  	
						      _this.codename = num + "s"
						      _this.disabled = true
						    }
						  }, 1000)
			            }else if(ocode == 411){
			            	uni.showToast({
			            	  title: '操作太频繁，请稍候重试',
			            	  icon: 'none',
			            	  duration: 2000
			            	})
			            	return false;
			            }
			            
			          }
			        })
			},
			//获取验证码
			getCodeBtn: function(e){
			      this.getCode();
			      var _this = this
			},
			save(){
				var _self=this;
				
				if(this.pwd==""){
					uni.showToast({
					  title: '请输入登录密码',
					  icon: 'none',
					  duration: 2000
					})
					return false
				}
				var str =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				if(!str.test(this.pwd)){
					uni.showToast({
						title:'密码格式不正确',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.pwd1==""){
					uni.showToast({
					  title: '请确认登录密码',
					  icon: 'none',
					  duration: 2000
					})
					return false
				}
				if(this.pwd1!==this.pwd){
					uni.showToast({
						title:'两次密码不一致',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.code==""){
					uni.showToast({
						title:"验证码不能为空",
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.code!=this.iscode){
					uni.showToast({
						title:'验证码错误',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.url+'updataloginpassword/',
					method: 'POST',
					data: {
						mobile:this.phone,
						password:this.pwd,
						password1:this.pwd1,
						code:this.code
					},
					headers: {
					    "Content-Type": "application/json"
					},
					success: res => {
						if(res.statusCode==200){
							uni.showToast({
								title:'登陆密码设置成功',
								icon:'none',
								duration:2000
							})
							uni.removeStorageSync('phone')
							uni.removeStorageSync('token')
							uni.reLaunch({
								url:'../../pages/login/login'
							})
						}
						if(res.statusCode==400){
							uni.showToast({
								title:'验证码已过期',
								icon:'none'
							})
						}
					},
				    fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.line{
		height:50rpx;
	}
	.list{
		height:100rpx;
		width:100%;
		background: #fff;
		padding-left:48rpx;
		box-sizing: border-box;
	}
	.title{
		float: left;
		width:150rpx;
	    line-height: 100rpx;
	    font-size:30rpx;
	    color:#333333;
	}
	.email1{
		line-height: 100rpx;
		font-size:30rpx;
		color:#333333;
	}
	.code{
		float: left;
		width:450rpx;
		height:100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}
	.getcode{
		float: right;
		border-radius: 50rpx;
		width: 180rpx;
		height: 50rpx;
		font-size: 22rpx;
		background: #797979;
		color: #fff;
		text-align: center;
		line-height: 50rpx;
		margin-right:48rpx;
		margin-top:35rpx;
	}
	button[disabled] {
		background:  #797979 !important;
		color: #fff !important;
	}
	.close{
		float: right;
		display: block;
		width:34rpx;
		height:15rpx;
		margin-right:48rpx;
		margin-top:40rpx;
	}
	.cloose{
		float: right;
		display: block;
		width:34rpx;
		height:24rpx;
		margin-right:48rpx;
		margin-top:40rpx;
	}
	.linee{
		height:20rpx;
	}
	.set{
		line-height: 100rpx;
		font-size: 30rpx;
		margin-left:48rpx;
	}
	.save{
		margin: 100rpx auto 0;
		width:690rpx;
		height:88rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 88rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>
