<template>
	<!-- 转账 -->
	<view class="container">
		<view class="t"></view>
		<view class="box">
			<view class="desc">当前可转</view>
			<view class="num"><text class="number">{{bar}}</text class="xi">个</view>
		</view>
		<view class="t"></view>
		<view class="box1">
			<view class="top">
				<view class="lab">转账地址</view>
				<input class="address" type="text" @input='getTranferAdd' placeholder="请输入转账地址" placeholder-style="color:#DADADA">
				<image class="right" src="../../static/images/jiantou3.png" mode="" @click="link"></image>
			</view>
			<view class="top1">
				<view class="lab">提币数量</view>
				<input class="address" type="text" @input='getFilNum' v-model="moder" placeholder="请输入提币数量" placeholder-style="color:#DADADA">
				<view class="all" @click="fusre">全部</view>
			</view>
		</view>
		<view class="tip">
			手续费：{{fil_num * fee}}
		</view>
		<view class="next"  @click="save">提交</view>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                bar:'',
                moder:'',
				fee:'',
				fil_num:'',
				transferAdd:''
            }
        },
        onLoad(res) {
            var that = this
            console.log(res)
            that.bar = res.sole
			that.fee=res.fee
        },
        methods:{
			getFilNum:function(e){
				this.fil_num=e.detail.value
			},
			getTranferAdd:function(e){
				this.transferAdd=e.detail.value
			},
            link() {
                uni.navigateTo({
                    url:'../address/address'
                })
            },
            fusre(){
                this.moder = this.bar
            },
			save:function(){
				var that=this;
				if(that.transferAdd==''){
					uni.showToast({
						title:'提币地址不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(that.fil_num==''){
					uni.showToast({
						title:'提币数量不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(that.fil_num>that.bar){
					uni.showToast({
						title:'您的提币数量余额不足',
						icon:'none',
						duration:2000
					})
					return false
				}
			}
        }

    }
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.t{
		height:20rpx;
	}
	.box{
		width:654rpx;
		height:292rpx;
		margin:0 auto;
		background: #fff;
		border-radius: 12rpx;
		text-align: center;
		padding: 50rpx;
		box-sizing: border-box;
	}
	.box1{
		width:654rpx;
		height:292rpx;
		margin:0 auto;
		background: #fff;
		border-radius: 12rpx;
		
	}
	.desc{
		font-size: 30rpx;
		line-height: 80rpx;
	}
	.num{
		font-size:30rpx;
		color:#555555;
	}
	.number{
		font-size:56rpx;
		color:#E4BF8C;
	}
	.top{
		height:147rpx;
		border-bottom: 1px solid #F2F2F2;
	}
	.lab{
		float: left;
		margin-left:48rpx;
		line-height: 147rpx;
		font-size: 26rpx;
		color:#9F9F9F;
	}
	.address{
		float: left;
		width:300rpx;
		height:147rpx;
		margin-left:20rpx;
		font-size: 26rpx;
	}
	.right{
		float: right;
		width:25rpx;
		height:30rpx;
		margin-top:58rpx;
		margin-right:24rpx;
	}
	.all{
		float:right;
		line-height: 147rpx;
		margin-right:24rpx;
		color:#EBC9A0;
		font-size: 26rpx;
	}
	.tip{
		margin-top:20rpx;
		margin-left:48rpx;
		line-height: 50rpx;
		font-size:24rpx;
		color:#797979;
	}
	.next{
		margin: 100rpx auto;
		width:654rpx;
		height:90rpx;
<<<<<<< HEAD
		background: #091219;
		border-radius: 10rpx;
        font-size: 30rpx;
=======
		background: #444343;
		border-radius: 80rpx;
>>>>>>> 9e45d2acfc5396f5859d6c0320bf7af550a90f4e
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
