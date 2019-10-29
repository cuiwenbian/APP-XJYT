<template>
	<!-- 编辑提币地址 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<view class="txt">提币地址</view>
			<input class="enter" type="text" :value="address" @input='getAddress'/>
		</view>
		<view class="line"></view>
		<view class="list">
			<view class="txt">地址备注</view>
			<input class="enter" type="text" :value="nickname" @input='getRemark' />
		</view>
		<view class="save"  @click="save">保存</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nickname:'',
				address:''
			}
		},
		onLoad(options) {
			this.nickname=options.nickname;
			this.address=options.address;
		},
		methods:{
			getAddress:function(e){
				this.address=e.detail.value
			},
			getRemark:function(e){
				this.nickname=e.detail.value
			},
			save:function(){
				var that=this;
				if(this.address==''){
					uni.showToast({
						title:'请输入提币地址',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.nickname==''){
					uni.showToast({
						title:'请输入地址备注',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.urll+'updatadeleteaddress/',   //编辑地址接口
					method:'PUT',
					data:{
						wallet_value:that.nickname,
						wallet_key:that.address
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
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
		height:80rpx;
	}
	.list{
		width:100%;
		height:120rpx;
		padding-left:48rpx;
		padding-right:48rpx;
		box-sizing: border-box;
		background: #fff;
	}
	.txt{
		width:150rpx;
		float: left;
		line-height: 120rpx;
		font-size:30rpx;
		color:#5E5E5E;
	}
	.enter{
		width:500rpx;
		height:120rpx;
		line-height: 120rpx;
		font-size: 30rpx;
		color:#BCBCBC;
	}
	.save{
		margin: 100rpx auto;
		width:654rpx;
		height:90rpx;
		background: #444343;
		border-radius: 10rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
