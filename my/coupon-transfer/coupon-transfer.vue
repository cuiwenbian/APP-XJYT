<template>
    <view class="container">
        <view class="box">
            <text class="name">电话号码:</text>
            <input type="text"  placeholder="接收人电话号码" placeholder-style="color:#8796AA"  class="inp" @input="end">
            <view class="line"></view>
            <view class="name1">转让数量:</view>
			<input type="number" maxlength="11" placeholder-style="color:#8796AA"  @input="ennd" placeholder="优惠券数量" class="int"/>
            <view class='all'>全部</view>
		</view>
        <view>
            <text class="stop">优惠券可用数量：2</text>
        </view>
        <view class="btn">
            <button :class="n?'primary':'primary1'" @click="step"  @touchstart="next" @touchend="back">下一步</button>
           
        </view> 
    </view>
</template>

<script>
    export default {
        data () {
            return {
                n:true
            }
        },
        onLoad() {
            
        },
        methods:{
            end:function(){},
            ennd:function(){},
            step:function() {
				uni.navigateTo({
					url:'../coupon-success/coupon-success',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
              
           } ,
		   next:function(){
			   this.n=false
		   },
		   back:function(){
			   this.n=true
		   }
        }
    }
</script>

<style>
    page{
        background-color: #0F1E2D;
    }
    .box {
        width: 704rpx;
        height: 288rpx;
        background-color: #0F2439;
        margin: 40rpx auto;
    }
    .name{
        float: left;
        color:#ffffff;
        height: 144rpx;
        font-size: 26rpx;
        line-height: 144rpx;
        padding-left: 48rpx;
    }
    .line {
        height: 20rpx;
        width: 100%;
        padding-top: 128rpx;
        border-bottom: 1rpx solid #091926;
    }
    .name1 {
        float: left;
        color:#ffffff;
        font-size: 26rpx;
        height: 144rpx;
        line-height: 144rpx;
        padding-left: 48rpx;
    }
    .inp {
         width: 400rpx;
         font-size: 26rpx;
         color: #FFFFFF;
         height: 144rpx;
		 margin-left:93rpx;
         float: left;
    }
    .int {
		width:350rpx;
        font-size: 26rpx;
        height: 144rpx;
        float: left;
		margin-left:93rpx;
        color: #FFFFFF;
    }
	.all{
		color:#F2443C;
		font-size: 26rpx;
		line-height: 144rpx;
	}
    .stop {
        float: left;
        padding-left: 68rpx;
        padding-bottom: 161rpx;
        font-size: 24rpx;
        color: #FFFFFF;
    }
    .btn{
        height: 120rpx;
    }
    .primary {
       margin: 134rpx auto 0;
       width:706rpx;
       height:88rpx;
       background: #41BEC9;
       text-align: center;
       line-height: 88rpx;
       color: #fff;
       font-size: 30rpx;
    }
	.primary1 {
	   margin: 134rpx auto 0;
	   width:706rpx;
	   height:88rpx;
	   background: RGBA(0, 193, 203, 0.5);
	   text-align: center;
	   line-height: 88rpx;
	   color: #fff;
	   font-size: 30rpx;
	}
</style>



