<template>
    <view class="container">
        <view class="box">
            <view class='name-box'>
				<text class="name">姓名:</text>
			  <input type="text" placeholder="请输入买家姓名" :value="name" class="inp" @input="end">
            </view>
			<view class="line"></view>
            <view class="name-box">
				<text class="name">联系方式:</text>
                <input type="number" maxlength="11" :value="coloe" @input="ennd" placeholder="请输入手机号" class="inp"/>
            </view>
        </view>
        <view>
            <text class="stop">提示:交易需要买家和卖家进行实名认证</text>
        </view>
        <view class="btn">
            <button class="primary" @click="end1">确认</button>
        </view> 
    </view>
  
</template>

<script>
	import {debounce} from '@/common/utils.js'
    export default {
        data() {
            return {
                name:'',
                coloe:'',
            }
        },
        onLoad(option) {
            var that = this
            var data = JSON.parse(option.app)
            var date = JSON.parse(option.sunt)
            var datr = JSON.parse(option.tilo)
            that.data = data
            that.date = date
            that.datr = datr
        },
        methods:{
            end:function (e) {
                var that = this
                this.name = e.detail.value
            },
            ennd:function(e){
                var that = this
                this.coloe = e.detail.value
            },
			linkToTransfer: debounce(function(){
                var that = this
                if(this.coloe==""){
                	uni.showToast({
                		icon:'none',
                		title:'请输入手机号'
                	})
                	return false;
                }
                var myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;	
                if(!myreg.test(this.coloe)){
                	 uni.showToast({
                	 	title:'请输入正确的手机号',
                		icon:'none',
                		mask:true,
                		duration:2000
                	 })
                	  return false
                 }
                var name = that.name
                var cool = that.coloe
                var data = that.data
                var date = that.date
                var datr = that.datr
                uni.request({
                    url:this.url + 'buildorders/',
                    method:'POST',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        name:name,
                        machine_id_list:data,
                        mobile:cool,
                        sale_num:date,
                        sale_money:datr
                    },
                    success(res) {
                        if(res.statusCode == 302){
                           uni.showToast({
                               title:'买家信息审核中',
                               icon:'none'
                           })
                        }
                        if(res.statusCode == 204) {
                            uni.showToast({
                                title:'买家信息不存在',
                                icon:'none'
                            })
                        }else if(res.statusCode == 200){
                            var posf = JSON.stringify(res.data.data)
                            uni.navigateTo({
                                url:'../confirm/confirm?ront=' + posf
                            })
                        }else if (res.statusCode == 401){
                            uni.showToast({
                                title:'服务器不能卖给自己',
                                icon:'none'
                            })
                        }else if(res.statusCode == 400) {
                            uni.showToast({
                                title:'请重新出售',
                            })
                        }
                    }
                })
			},500, true),
            end1:function () {
				this.linkToTransfer()
            },
        }
    }
</script>

<style>
    page{
        background-color: #EDEEEE;
    }
    .box {
        width: 650rpx;
        height: 260rpx;
        border: 2rpx solid #FFFFFF;
        background-color: #FFFFFF;
        margin: 40rpx auto;
        border-radius: 15px;
    }
	.name-box{
		width:100%;
	}
    .name{
        float: left;
        height: 120rpx;
        font-size: 26rpx;
        line-height: 120rpx;
        padding-left: 48rpx;
		width:130rpx;
		text-align:justify;
		text-justify:distribute-all-lines;
		text-align-last:justify;
    }
    .line {
        height: 20rpx;
        width: 100%;
        padding-top: 108rpx;
        border-bottom: 1rpx solid #E4E4E4;
    }
    
    .inp {
         width: 300rpx;
         font-size: 26rpx;
         height: 120rpx;
         float: left;
		 margin-left:20rpx;
    }
   
    .stop {
        float: left;
        padding-left: 96rpx;
        font-size: 26rpx;
        color: #A0A0A0;
    }
    .btn{
        height: 120rpx;
    }
    .primary {
       margin: 134rpx auto 0;
       width:690rpx;
       height:88rpx;
       background: #0A1117;
       border-radius: 80rpx;
       text-align: center;
       line-height: 88rpx;
       color: #fff;
       font-size: 30rpx;
    }
</style>