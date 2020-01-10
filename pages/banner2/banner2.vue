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
            console.log(option.cont)
            this.title = option.title
            this.cont = option.cont;
            this.cont = decodeURIComponent(option.cont);
            this.aa=this.cont.replace(/_/g,"=").replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
            console.log(this.aa)
            this.add = option.add
            this.volume = option.volume
        }
    }
</script>

<style>
    page{
         background-color: #EDEDED;
    }
  uni-rich-text img{max-width:100% !important;}
   .con{
    width:100%;
      padding: 36rpx;
        box-sizing: border-box;
    overflow: hidden;
    }
    .titel{
        line-height: 60rpx;
        font-weight:400;
        color:rgba(18,18,18,1);
    }
    .time{
        width: 100%;
        line-height: 60rpx;
        color: #9B9B9B;
        font-size: 18rpx;
    }
    .see{
        margin-left: 40rpx;
    }
    .article{
        color: #4D4D4D;
        font-size: 28rpx;
    }
</style>