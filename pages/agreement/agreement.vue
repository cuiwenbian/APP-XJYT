<template>
  <!-- 用户协议 -->
  <view class="container">
    <view class="fix">
      <button class='down'>下载</button>
      <button class="down" v-if="flag=true" @click='agree'>同意</button>
    </view>
  </view>
</template>

<script>
  export default{
    data(){
      return{
        flag:true
      }
    },
    agree:function(){
      this.flag=!this.flag
      if(this.flag == false) {
          uni.showToast({
              title:'已阅读并同意协议'
          })
      }
    }
  }
</script>

<style>
  .fix{
    width:100%;
    height:98rpx;
    position: fixed;
    left:0;
    bottom:0;
    background: #CCCCCC;
    display: flex;
    justify-content: space-between;
  }
  .down{
    width:130rpx;
    height:60rpx;
    font-size: 30rpx;
    line-height: 60rpx;
    margin-top:19rpx;
    color:#fff;
    background: #121212;
  }
</style>