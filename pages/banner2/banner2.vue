<template>
    <view class="con">
        <view class="titel">{{title}}</view>
        <view class="time">{{add}}<text class="see">{{volume}}人看过</text></view>

        <rich-text :nodes="aa"></rich-text>
    </view>

</template>

<script>
    export default {
    	data () {
    		return {
                title:'',
                cont:'',
                add:'',
                volume:'',
				aa:''
    		}
    	},
        onLoad(option) {
            this.title = option.title
            this.cont = option.cont

			this.aa=this.cont.replace(/_/g,"=");
            this.add = option.add
            this.volume = option.volume
        }
    }
</script>

<style>
    page{
         background-color: #EDEDED;
    }
    .con{
    	padding: 36rpx;
        box-sizing: border-box;
    }
    .titel{
        height: 60rpx;
        font-weight:400;
        color:rgba(18,18,18,1);
    }
    .time{
        width: 100%;
        height: 60rpx;
        color: #9B9B9B;
        font-size: 14rpx;
    }
    .see{
        margin-left: 40rpx;
    }
    .article{
        color: #4D4D4D;
        font-size: 28rpx;
    }
</style>
