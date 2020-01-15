<script>
  export default {
    onLaunch: function () {
      console.log('App Launch')
      // #ifdef APP-PLUS
      plus.runtime.getProperty(plus.runtime.appid,function(inf){  
          var wgtVer=inf.version;  
        console.log("当前应用版本："+wgtVer);
        uni.setStorageSync('version',wgtVer)
       });
       // #endif
     
       // #ifdef MP-WEIXIN
       var value1 = uni.getStorageSync('token');
	   var value = uni.getStorageSync('phone');
	   var openid = uni.getStorageSync('openid');
       console.log(value)
       console.log(value1)
	   console.log(openid)
       if (value && value1) {
         this.global_.phone = value;
         this.global_.token = value1;
            uni.switchTab({
              url: '/pages/index/index'
            });
       }
       // #endif

     
    },
    onShow: function () {
      
    },
  }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    page {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      background-color: #FFFFFF;
    }
  
    .example{
        padding: 0 30upx 30upx;
    }
    .example-title {
      font-size: 32upx;
        line-height: 32upx;
      color: #666;
      margin: 40upx 25upx;
      padding-left: 25upx;
        position: relative;
    }
    .example .example-title{
        margin: 40upx 0;
    }
    .example-title:before {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0upx;
        top: 0upx;
      width: 2px;
      height: 34upx;
      background-color: #007aff;
      border-radius: 2px;
    }
    .example-body{
        padding: 0 40upx;
    }
</style>