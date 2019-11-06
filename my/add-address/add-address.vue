<template>
	<!-- 增加提币地址 -->
	<view class="container">
		<view class="line"></view>
		<view class="list">
			<view class="txt">提币地址</view>
			<input class="enter" type="text" :value="adr" @input="getAddress" placeholder="请输入提币地址" />
		</view>
		<view class="line"></view>
		<view class="list">
			<view class="txt">地址备注</view>
			<input class="enter" type="text" :value="remark" @input="getRemark" placeholder="请输入备注名称" />
		</view>
		<view class="save"  @click="save">保存</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				adr:'',
				remark:'',
				flag:''
			}
		},
		onLoad(option) {
			this.flag=option.flag
		},
		methods:{
			getAddress:function(e){
				this.adr=e.detail.value
			},
			getRemark:function(e){
				this.remark=e.detail.value
			},
			save:function(){
				if(this.adr==''){
					uni.showToast({
						title:'提币地址不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.remark==""){
					uni.showToast({
						title:'备注名称不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:this.urll+'walletaddress/',
					method:'POST',
					data:{
						wallet_key:this.remark,
						wallet_value:this.adr
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						if(res.statusCode==202){
							uni.showToast({
								title:'地址格式不正确',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==204){
							uni.showToast({
								title:'昵称不可重复',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==205){
							uni.showToast({
								title:'地址不合法',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==200){
							uni.navigateBack({
								delta:1
							})
							uni.showToast({
								title:'添加成功',
								icon:'none',
								duration:2000
							})
							var page = getCurrentPages().pop();
							if (page == undefined || page == null) return; 
							page.onLoad(); 
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
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
