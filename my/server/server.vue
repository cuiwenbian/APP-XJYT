<template>
    <view class="container">
        <view>
            <view class="tet">输入{{title}}数量</view>
            <input type="number" :placeholder="'请输入' + title + '数量'" :value="coloe" class="inp" @input="end">
            <view class="ber">
                
            </view>
        </view>
        <button class="btn" @click="btn">下一步</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                coloe:'',
                title: '',
                type: '',
                id: ''
            }
        },
        onLoad(options) {
            console.log(options);
            var title = '';
            if (options.type === '1') {
                title = '转让'
            } else if (options.type === '2') {
                title = '出售'
            } else {
                return false;
            }
            uni.setNavigationBarTitle({
               title: '服务器' + title
            });
            this.title = title;
            this.id = options.id;
            this.type = options.type;
            console.log(this.id)
            console.log(options.type)

        },
        methods:{
            end:function (e) {
                this.coloe = e.detail.value
                console.log(this.coloe)
            },
            btn:function() {
                if (!this.coloe) {
                    // 未填数量提示
                    uni.showToast({
                        title:'请填写数量',
                        icon:'none'
                    })
                    return false;
                }
                uni.navigateTo({
                    url:'../server-sale/server-sale?type=' + this.type + '&id=' + this.id + '&coloe=' + this.coloe
                })
            }
        }
    }
</script>

<style>
.tet{
    padding-top: 110rpx;
    padding-left: 42rpx;
    color: #333333;
    font-weight:600;
    font-size: 42rpx;
}
.inp{
    color: #999999;
    font-size: 20rpx;
    padding-left: 42rpx;
    padding-top: 86rpx;
}
.ber{
    width: 90%;
    margin: 0 auto;
    border-bottom: 1rpx solid #F5F5F5;
}
.btn {
    width: 690rpx;
    height: 90rpx;
    background-color: #040404;
    color: #FFFFFF;
    margin-top: 220rpx;
    text-align: center;
}
</style>
