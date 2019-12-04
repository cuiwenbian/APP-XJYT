<template>
  <!-- 用户协议 -->
  <view class="container">
      <view  class="dde">
            <rich-text :nodes="agreement"></rich-text>
      </view>
    <view class="fix">
      <button class='down' @click="aaa">下载</button>
      <button class="down" v-if="flag" @click='sss'>同意</button>
      <button class="dowwn" v-if="fllaag">已同意</button>
    </view>
  </view>
</template>

<script>
  export default{
    data(){
      return{
            agreement:'',
            chnerot:'',
            flag:false,
            fllaag:false,
            
      }
    },
    onShow() {
        var that = this
        uni.request({

            url:this.url + "usermachine/agreement/",
            method:'GET',
            header:{
                Authorization:'JWT'+' '+this.global_.token
            },
            success(res) {
               console.log(res) 
               that.chnerot = res.data.data.user_agreement
               that.agreement = res.data.data.agreement
               console.log(that.agreement)
               if(that.chnerot == 0){
                   that.flag = true
               }

            }
        })
    },
    methods:{
        sss:function(){
            var that = this
            uni.request({
                url:this.url + 'usermachine/agreement/',
                method:'POST',
                header:{
                    Authorization:'JWT'+' '+this.global_.token
                },
                success(res) {
                   console.log(res) 
                   if(res.statusCode == 200) {
                       that.fllaag = true
                       that.flag = false
                       uni.showToast({
                           title:'已阅读并同意协议'
                       })
                   }
                }
            })
         
        },
        aaa:function(){
           const downloadTask = uni.downloadFile({
                url: this.url+"media/用户服务协议.pdf",
                // header:{
                //      Authorization:'JWT'+' '+this.global_.token
                // },//仅为示例，并非真实的资源
                success: (res) => {
                    console.log(res)
                    if (res.statusCode === 200) {
                        console.log('下载成功');
                        uni.showToast({
                            title:'下载成功',
							duration:3000
                        })
						//res={tempFilePath:tempFilePath}
                    }               
                }
            });
            downloadTask.onProgressUpdate((res) => {
                  console.log('下载进度' + res.progress);
                  console.log('已经下载的数据长度' + res.totalBytesWritten);
                  console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);                                       
            });
        }
    }

  }
</script>

<style>
    .dde{
        height: 500rpx;
    }
  .fix{
    width:100%;
    height:98rpx;
    position: fixed;
    left:0;
    bottom:0;
    background:rgba(0,0,0,0.4);
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
  .dowwn{
      width:160rpx;
      height:60rpx;
      font-size: 30rpx;
      line-height: 60rpx;
      margin-top:19rpx;
      color:#fff;
      background: #121212;
  }
  .agreemen{
      font-size: 20rpx;
  }
</style>

