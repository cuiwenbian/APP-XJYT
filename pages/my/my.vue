<template>
	<!-- 我的 -->
    <view class="container" style="position: relative;">
		 <view class="height"></view>
		<view class="top">
			<image class="bg" src="../../static/images/background.png" mode="aspectFill">
				<!-- #ifdef APP-PLUS -->
				<image class="logout" src="../../static/images/logout.png" mode="" @click="logout"></image>
				<!-- #endif -->
			</image>
			<view class="avator" @click="personal"><image class="img" src="../../static/images/avator.jpg" mode=""></image></view>
			<view class="phone">{{phone}}</view>
		</view>
		<view class="line"></view>
    	<view class="list">
    		<view class="listItem" @click="wallet">
				<view class="pic">
				<image  src="../../static/images/icon-wallet.png" style="width:50rpx;height:44rpx;" mode=""></image>
				</view>
				<view class="txt">我的钱包</view>
			</view>
			<view class="listItem" @click="address">
				<view class="pic">
					<image   src="../../static/images/icon-address.png" style="width:40rpx;height:46rpx; " mode=""></image>
				</view>
				<view class="txt" >提币地址</view>
			</view>
			<view class="listItem" @click="certification">
				<view class="pic">
					<image  src="../../static/images/icon-identity.png" style="width:48rpx;height:36rpx;" mode=""></image>
				</view>
				<view class="txt" >实名认证</view> 
			</view>
			<view class="listItem" @click="mymachine">
				<view class="pic">
					<image  src="../../static/images/icon-machine.png" style="width:46rpx;height:40rpx;" mode=""></image>
				</view>
				<view class="txt" >我的矿机</view>
			</view>
			<view class="listItem" @click="tradePassword">
				<view class="pic">
					<image  src="../../static/images/icon-trade.png" style="width:43rpx;height:52rpx;" mode=""></image>
				</view>
				<view class="txt" >交易密码</view>
			</view>
			<view class="listItem" @click="loginPassword">
				<view class="pic">
					<image  src="../../static/images/icon-login.png" style="width:43rpx;height:52rpx;" mode=""></image>
				</view>
				<view class="txt" >登录密码</view>
			</view>
			<view class="listItem"  @click="bindEmail" >
				<view class="pic">
					<image   src="../../static/images/icon-emails.png" style="width:48rpx;height:36rpx;" mode=""></image>
				</view>
				<view class="txt" >邮箱绑定</view>
			</view>
			<view class="listItem" @click="suggest">
				<view class="pic">
					<image  src="../../static/images/icon-suggest.png" style="width:44rpx;height:46rpx;" mode=""></image>
				</view>
				<view class="txt" >建议反馈</view>
			</view>
			<!-- #ifdef MP-WEIXIN -->
			<view class="listItem" @click="logout">
				<view class="pic">
					<image  src="../../static/images/icon-quit.png" style="width:44rpx;height:46rpx;" mode=""></image>
				</view>
				<view class="txt" >退出应用</view>
			</view>
			<!-- #endif -->	
    	</view>
		<view class="shade" v-if="shade">
			<view class="pop">
				<view class='pop-title'>确定退出登录？</view>
				<view class="pops">
					<view class='pop-btn quxiao' @click="cancel">取消</view>
					<view class='pop-btn yess' @click="sure">确认</view>
				</view>
			</view>
		</view>
    </view>
</template>
<!-- 我的 -->
<script>
	export default {
		data() {
			return {
				phone:'',
				shade:false
			}
		},
		onLoad() {
			var p=this.global_.phone
			var p1=p.split('')         //字符串转为数组
			var phone=p1.slice(0,3).join().replace(/,/g, "")+'****'+p1.slice(7,11).join().replace(/,/g, "")
			this.phone=phone
		},
		onHide() {
			this.shade=false
		},
		methods: {
			cancel:function(){
				this.shade=false
			},
			sure:function(){
				this.global_.token=='';
				uni.removeStorageSync('phone')
				uni.removeStorageSync('token')
				uni.reLaunch({
					url:'../login/login'
				})
			},
	        personal:function(){
				uni.navigateTo({
					url:'../../my/personal/personal?phone='+this.phone
				})
			},
			wallet:function(){
				uni.navigateTo({
					url:'../../my/my-wallet/my-wallet'
				})
			},
			address:function(){
				uni.request({
					url:this.url+'walletaddress/',
					method:'GET',
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						if(res.statusCode==400){
							uni.showToast({
								title:'用户未实名认证',
								icon:'none',
								duration:2000
							})
						}
						if(res.statusCode==201){
							uni.showToast({
								title:'身份认证审核中，请等待',
								icon:'none',
								duration:2000
							})
						}
						if(res.statusCode==200){
							uni.navigateTo({
								url:'../../my/address/address'
							})
						}
						if(res.statusCode==302){
							uni.showToast({
								title:'用户未设置资金密码',
								icon:'none',
								duration:2000
							})
						}
					}
				})
			},
			tradePassword:function(){
				var that=this;
				uni.request({
					url:this.url+'setmoney/',
					method:'GET',
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						if(res.statusCode==302){
							uni.showToast({
								title:'用户未绑定邮箱',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==400){
							uni.navigateTo({
								url:'../../my/change-password/change-password'
							}) 
						}
						if(res.statusCode==200){
							uni.navigateTo({
								url:'../../my/trade-password/trade-password'
							})
						} 
					}
				})
			},
			loginPassword:function(){
				uni.request({
					url:this.url+'updataloginpassword/',
					method:'GET',
					header:{ 
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						if(res.statusCode==400){
							uni.navigateTo({
								url:'../../my/change-loginPassword/change-loginPassword'
							})
						}
						if(res.statusCode==200){
							uni.navigateTo({
								url:'../../my/change-pass/change-pass'
							})
						}
					}
				})
			},
			bindEmail:function(){
				uni.request({
					url:this.url+'linkemail/',
					method:'GET',
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						if(res.statusCode==200||res.statusCode==201){
							uni.navigateTo({
								url:'../../my/email/email'
							})
						}
						if(res.statusCode==400){
							uni.navigateTo({
								url:'../../my/unbindemail/unbindemail'
							})
						}
					}
				})
			},
			suggest:function(){
				uni.navigateTo({
					url:'../../my/suggest/suggest'
				})
			},
			certification:function(){
				uni.request({
				  url: this.url + 'realname/',
				  method:'GET',
				  header: {
				   Authorization:'JWT'+' '+this.global_.token
				  },
				  success: function (res) {
					  console.log(res)
					if(res.statusCode==202){
						uni.showToast({
							title:'已实名认证',
							icon:'none',
							duration:2000
						})
						return false
					} 
					if(res.statusCode==205){
						uni.showToast({
							title:'身份认证审核中，请等待',
							icon:'none',
							duration:2000
						})
						return false
					}
					if(res.statusCode==200){
						uni.navigateTo({
							url:'../../my/identity/identity'
						})
					}
				  }
				})
			},
			mymachine:function(){
				uni.navigateTo({
					url:'../../my/my-machine/my-machine'
				})
			},
			logout:function(){
				this.shade=true
			}
		}
	}
</script>

<style>
	
	.shade{
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.4);
		position: fixed;
		left:0;
		top:0;
		z-index:99
	}
	.pop{
		width:550rpx;
		height:300rpx;
		margin:500rpx auto;
		padding:0 60rpx;
		box-sizing: border-box;
		background:#fff;
		border-radius:10rpx;
	}
	.pop-title{
		height:180rpx;
		line-height: 180rpx;
		text-align: center;
		font-size: 34rpx;
	}
	.pops{
		height:100rpx;
		width:100%;
		display: flex;
		justify-content: space-between;
	}
	.pop-btn{
		width:158rpx;
		height:66rpx;
		border-radius: 10rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color:#fff;
		text-align: center;
	}
	.yess{
		background:#121212;
	}
	.quxiao{
		color:rgba(137,137,137,1);
	}
	.height {
		height: var(--status-bar-height);
		background: #121212;
	}
	.top{
		width:100%;
		height:480rpx;
		position: relative;
	}
	.bg{
		width:100%;
		height:318rpx;
		position: relative;
	}
	.logout{
		width:50rpx;
		height:45rpx;
		position: absolute;
		right:20rpx;
		top:20rpx;
	}
	.avator{
		width:150rpx;
		height:150rpx;
		z-index: 9;
		position: absolute;
		left:300rpx;
		bottom:100rpx;
		border-radius: 50%;
		border: 1px solid #f2f2f2;
	}
	.img{
		width:100%;
		height:100%;
		display: block;
		border-radius: 50%;
	}
	.nickname{
		width:100%;
		height:30rpx;
		position: absolute;
		bottom: 90rpx;
		text-align: center;
		line-height: 30rpx;
		font-size: 32rpx;
	}
	.phone{
		width:100%;
		height:30rpx;
		position: absolute;
		bottom: 30rpx;
		text-align: center;
		line-height: 30rpx;
		font-size: 32rpx;
	}
	.line{
		width:100%;
		height:10rpx;
		background: #EDEEEE;
	}
	.list{
		width:100%;
		height:500rpx;
		display: flex;
		justify-content:space-between;
		flex-wrap: wrap;
		padding:50rpx;
		box-sizing: border-box;
	}
	.listItem{
		width:25%;
		height:50%;
		box-sizing: border-box;
	}
	.pic{
		display: block;
		width:52rpx;
		height:52rpx;
		margin: 30rpx auto;
	}
	.txt{
		line-height: 20rpx;
		font-size: 28rpx;
		text-align: center;
		color:#333333;
	}
</style>
