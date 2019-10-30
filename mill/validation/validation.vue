<template>
    <view class="container">
        <view class="box">
            <text class="name">姓名</text><input type="text" placeholder="请输入买家姓名" :value="name" class="inp" @input="end">
            <view class="name1">联系方式<input type="number" maxlength="11" :value="coloe" @input="ennd" placeholder="请输入手机号" class="int"/></view>
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
    export default {
        data() {
            return {
                name:'',
                coloe:''
            }
        },
        onLoad(option) {
            var that = this
            console.log(option)
            var data = JSON.parse(option.app)
            var date = JSON.parse(option.sunt)
            var datr = JSON.parse(option.tilo)
            that.data = data
            that.date = date
            that.datr = datr
            console.log(that.data)
            console.log(that.date)
            console.log(that.datr)
        },
        methods:{
            end:function (e) {
                var that = this
                this.name = e.detail.value
                console.log(that.name)
            },
            ennd:function(e){
                var that = this
                this.coloe = e.detail.value
                console.log(that.coloe)
            },
            end1:function () {
                var that = this
                var name = that.name
                var cool = that.coloe
                var data = that.data
                var date = that.date
                var datr = that.datr
                uni.request({
                    url:this.urll + 'buildorders/',
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
                        console.log(res)
                        console.log(res.data)
                        var posf = JSON.stringify(res.data.data)
                        console.log(posf)
                        if(res.statusCode == 400) {
                            uni.showToast({
                                title:'买家信息不存在',
                                icon:'none'
                            })
                        }else if(res.statusCode == 200){
                            uni.navigateTo({
                                url:'../confirm/confirm?ront=' + posf
                            })
                        }
                        // uni.navigateTo({
                        //     url:'../confirm/confirm'
                        // })
                    }
                })

            }
        }
    }
</script>


<style>
    page{
        background-color: #DCDCDC;
    }
    .box {
        width: 650rpx;
        height: 300rpx;
        border: 2rpx solid #FFFFFF;
        background-color: #FFFFFF;
        margin: 40rpx auto;
        border-radius: 15px;
    }
    .name{
        float: left;
        height: 150rpx;
        line-height: 150rpx;
        padding-left: 48rpx;
        
    }
    .name1 {
        float: left;
        height: 150rpx;
        line-height: 150rpx;
        padding-left: 48rpx;
    }
    .inp {
         width: 300rpx;
         padding-right: 90rpx;
         height: 150rpx;
        float: right;
    }
    .int {
        width: 300rpx;
        height: 150rpx;
        float: right;
        padding-left: 60rpx;
    }
    .stop {
        float: left;
        padding-left: 96rpx;
        font-size: 26rpx;
    }
    .btn{
        height: 120rpx;
    }
    .primary {
        width: 650rpx;
        height: 100rpx;
        margin: 340rpx auto;
        color: #FFFFFF;
        background-color: #121212;
    }
</style>