<template>
	<!-- 设置交易密码 -->
	<view class="container" style='position: relative;'>
		<view class="line"></view>
		<view class="list">
			<text class="title">邮箱：</text>
			<text class="email" >{{email}}</text>
		</view>
		<view class="linee"></view>
		<view class="list">
			<input class="code" type="text" @input="getCodeValue" :value="code" placeholder="请输入邮箱验证码" />
			<view class="getcode" @click="getCodeNumber" :disabled="disabled">{{ codename }}</view>
		</view>
		<view class="set">设置交易密码</view>
		<view class="list">
			<input class="code" type="text" :value="password" @input="getPassword" placeholder="请输入交易密码,6位数字组合" />
			<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/pwd.png'" @click="show" mode=""></image>
		</view>
		<view class="linee"></view>
		<view class="list"> 
			<input class="code" type="text" :value="password1" @input="getPassword1" placeholder="请再次输入交易密码" />
			<image class="close" :src="hidden?'../../static/images/password.png':'../../static/images/pwd.png'" @click="show" mode=""></image>
		</view>
		<view class="save"  @click="setPwd">确认</view>
		<view class="shade" v-show="shade">
			<view class="pop">
				<view class='pop-title'>资金密码设置成功</view>
				<view class='pop-btn'>确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				hidden:true,
				email:'',
				email1:'',
				code:'',
				codename: ' 获取验证码',
				password:'',
				password1:'',
				shade:false
			}
		}, 
		onLoad() {
			var _this=this;
			_this.disabled = true;
			uni.request({
				url:this.urll+'setmoney/',
				method:'GET',
				header:{
					Authorization:'JWT'+' '+this.global_.token
				},
				success(res) {
					console.log(res)
					var email=res.data.data;
					var email1=res.data.data;
					_this.email1=email1;
					var l = email.split('@');
					email = l[0].substr(0, l[0].length - 5) + '****@' + l[1]
					_this.email=email
				}
			})
		},
		methods:{
			show:function(){
				this.hidden=false;
			},
			getCodeValue: function(e) {
				this.code = e.detail.value;
			},
			getPassword:function(e){
				this.password=e.detail.value
			},
			getPassword1:function(e){
				this.password1=e.detail.value
			},
			getCode: function () {
			      var _this = this;
			      
			        uni.request({
			          method: 'POST',
			          data: {
			            email: this.email1,
			          },
			            //短信接口
			          url:this.urll+'setemail/',
			          header: {
			             Authorization:'JWT'+' '+this.global_.token
			          },
			          success(res) {
			            //根据code判断
			            console.log(res)
			            var num = 121;
			            var timer = setInterval(function () {
			              num--;
			              if (num <= 0) {
			                clearInterval(timer);
			                _this.codename = '重新发送',
			                _this.disabled = false
			
			              } else {
			                _this.codename = num + "s"
			                
			              }
			            }, 1000)
			          }
			        })
			
			},
			//获取验证码
			getCodeNumber: function(e) {
				this.getCode();
				var _this = this;
				_this.disabled = true;
			},
			setPwd:function(){
				if(this.code==''){
					uni.showToast({
						icon:'none',
						title:'请输入验证码',
						duration:2000
					})
					return false;
				}
				if(this.password==''){
					uni.showToast({
						icon:'none',
						title:'请输入交易密码',
						duration:2000
					})
					return false;
				}
				if(this.password1==''){
					uni.showToast({
						icon:'none',
						title:'请确认交易密码',
						duration:2000
					})
					return false;
				}
				if(this.password1!==this.password){
					uni.showToast({
						icon:'none',
						title:'两次密码不一致',
						duration:2000
					})
					return false;
				}
				uni.request({
					url:this.urll+'setmoney/', 
					method:'POST',
					data:{
						email:this.email1,
						email_msg:this.code,
						password1:this.password,
						password2:this.password1
						
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						if(res.statusCode==200){
							uni.switchTab({
								url:'../my/my'
							})
						}
					}
				})
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
	.title,.email{
	    line-height: 100rpx;
	    font-size:30rpx;
	    color:#333333;
	}
	.code{
		float: left;
		width:500rpx;
		height:100rpx;
		line-height: 100rpx;
		font-size: 30rpx;
	}
	.getcode{
		float:right;
		width:150rpx;
		height:50rpx;
		background: #f2f2f2;
		border: 1rpx solid #797979;
		border-radius: 50rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 50rpx;
		margin-right:48rpx;
		margin-top:25rpx;
		color:#333;
	}
	.close{
		float: right;
		display: block;
		width:50rpx;
		height:25rpx;
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
		width:654rpx;
		height:90rpx;
		background: #444343;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
	.shade{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.5);
	}
	.pop{
		width:500rpx;
		height:250rpx;
		margin:450rpx auto 0;
		background: #fff;
		border-radius: 20rpx;
	}
	.pop-title{
		text-align: center;
		font-size: 32rpx;
		color:#121212;
		line-height: 150rpx;
	}
	.pop-btn{
		width:126rpx;
		height:56rpx;
		margin:20rpx auto 0;
		border-radius: 10rpx;
		background: #121212;
		color: #fff;
		font-size: 30rpx;
		text-align: center;
		line-height: 56rpx;
	}
</style>
