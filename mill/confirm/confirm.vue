<template>
    <view class="container">
        <view class="box1">
            <text class="name">
                姓名:  <text class="loo">{{name}}</text> 
            </text>
            <text class="pag">
                联系方式: <text class="loo">{{pag}}</text>
            </text>
        </view>
        <view>
        <view class="box"  v-for="(item , index) in data" :key="index">
            <view class="left">
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="right">
                    <text class="info">{{item.name}} {{item.number}}</text>
                </view>
                <view >
                    <text class="all">已运行{{item.usedays}}天 | 剩余{{item.residuedays}}天</text>
                </view>
                <view>
                    <text class="area">
                        储存{{item.data_hard_disk}}T | 总容量{{item.usedisk}}T
                    </text>
                </view>
            </view> 
            <view class="y"></view>
        </view>
        </view>
        <view class="boxx">
            <view class="uu">
                交易数量: <text class="ui">{{san}}台</text>
            </view>
            <view class="uu">
                人民币: <text class="ui">{{sun}}</text>
            </view>
            <view class="uu">
                总价: <text class="ui">{{suu}}</text>
            </view>
        </view>
        <view class="brn">
            <button class="primary" @click="btn">确认</button>
            <!-- <best-payment-password :show="payFlag" :forget="true"  :value="paymentPwd" digits="6" @submit="checkPwd" @cancel="togglePayment"></best-payment-password> -->
            <!-- #ifndef H5 -->
            <password-input v-if="passIn" ref='wrong' @clo="clo" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
            <!-- #endif -->
            <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
            <!-- #ifdef H5 -->
            <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo">
                <password-input ref='wrong' :length="length" :gutter="20" :list="numberList"></password-input>
            </view>
            <!-- #endif -->
            <!-- 数字键盘 -->
            <keyboard-package ref="number"  @onChange='onChange' @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
            <!-- <button class="primary1">我已付款</button> -->
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
    import passwordInput from '../../components/password-input/password-input.vue';
    export default {
        data() {
            return {
                name:'',
                pag:'',
                suu:'',
                data:'',
                san:'',
                sun:'',
                paymentPwd:'',
                forget:false,
                password:'',
                arr:[],
                numberList: [],
                length: 6,
                type: 'number',
                passIn: false
            }
        },
       components: {
       	keyboardPackage,
       	passwordInput
       },
        onLoad(option) {
            let arr = []
            var that = this
            var data = JSON.parse(option.ront)
            that.data = data
            var sur=that.data[1];
            that.name = that.data[0][0].name
            that.pag = that.data[0][0].mobile
            that.san = that.data[0][0].sale_num
            that.suu = that.data[0][0].sale_money
            that.data=that.data[1]   
            that.sun = getRmb.getrmb(that.suu)
            for(let i = 0; i < sur.length; i++) {
                arr.push(sur[i].machine_id)
            }
          this.arr = arr
        },
        methods:{
            clo: function() {
            	this.passIn = false;
            	this.$refs['number'].close();
            	this.numberList.length= 0;
            },
            onDelete() {
            	this.numberList.pop();
            },
            onChange(e){
            	if(e.show==false){
            		this.passIn = false
            	}
                that.numberList.length= 0;
            },
            onConfirm() {
                    if(this.numberList.length!=6){
                      uni.showToast({
                        title: '请输入六位交易密码！',
                        duration: 2000,
                        icon: 'none'
                      });
                    }
                  },
            onInput(val) {
                var that = this
                var a = that.arr.join()
            	that.numberList.push(val);
            	that.password = that.numberList.join().replace(/,/g, '');
            	if (that.numberList.length >= that.length) {
            		uni.request({
            			url: that.url + 'submitorder/',
            			method: 'POST',
            			data: {
                            password:that.password,
                            machine_id_list:a,
                            name:that.name,
                            mobile:that.pag,
                            sale_num:that.san,
                            sale_money:that.suu
            			},
            			header: {
            				Authorization: 'JWT' + ' ' + this.global_.token
            			},
            			success(res) {
                            if(res.statusCode==400){
                                that.numberList.pop();
                                that.numberList.length= 0;
                                that.$refs.wrong.flag=false;
                                var n=res.data.data.err_num;
                                var s=5-n;
                                that.$refs.wrong.tip='剩余'+ s +'次机会';
                            }
                            if(res.statusCode==423){
                            	uni.showToast({
                            		title:'交易密码已锁定,请在今日24:00后进行交易',
                            		icon:'none',
                            		duration:2000
                            	})
                            }
                            if(res.statusCode==201){
                            	that.success=true
                            }
            				if (res.statusCode == 200) {
                                that.passIn = false;
                                that.$refs['number'].close();
            					uni.showToast({
            						title: '出售成功，等待买家付款',
            						icon: 'none',
            						duration: 2000
            					});
                                uni.switchTab({
                                    url:'../../pages/mill/mill'
                                })
            				}
                            if(res.statusCode == 302) {
                                uni.showModal({
                                    title:'未设置交易密码',
                                    confirmText:'去设置',
                                    success(res) {
                                        if(res.confirm == true) {
                                            uni.navigateTo({
                                                url:'../../my/trade-password/trade-password'
                                            })
                                        }
                                    }
                                })
                            }
            				var page = getCurrentPages().pop();
            				if (page == undefined || page == null) return;
            			},
            		});
                    this.numberList.length= 0;
            	}
            },
            btn:function () {
                var that = this
                this.passIn = true;
                this.$refs['number'].open();
                this.onInput(val);
            }
        }
    }
</script>

<style>
    page {
        background-color: #DCDCDC;
    }
    .loo {
        width: 160rpx;
        color: #121212;
    }
    .box1 {
        margin-bottom: 40rpx;
        height: 120rpx;
        background-color: #fff;
        padding-left:18rpx;
        box-sizing: border-box;
    }
    .name {
        float: left;
        width: 150rpx;
        color: #A0A0A0;
        font-size: 26rpx;
        line-height: 120rpx;
        margin-left: 20rpx;
    }
    .pag {
        float: left;
        color: #A0A0A0;
        font-size: 26rpx;
        line-height: 120rpx;
        margin-left: 120rpx;
    }
    .box {
        background-color: #fff;
        height: 180rpx;
    }
    .left {
        line-height: 180rpx;
    }
    .primary{
        width: 94%;
        margin-top: 60rpx;
        color: #FFFFFF;
        background-color: #121212;
    }
    .img{
        float: left;
        width: 168rpx;
        height: 126rpx;
        padding-left: 20rpx;
        box-sizing: border-box;
        margin-top: 36rpx;
        margin-right: 24rpx;
        margin: 28rpx 22rpx 0 20rpx;
    }
    .info {
        font-size: 28rpx;
    }
    .right {
        padding-top: 18rpx;
    }
    .all{
        font-size: 24rpx;
        color: #C0C0C0;
    }
    .area {
        font-size: 24rpx;
        color: #C0C0C0;
    }
    .y {
        width: 90%;
        height: 30rpx;
        border-bottom: 2rpx solid #C0C0C0;
        margin: 30rpx auto;
    }
    .boxx {
        height: 215rpx;
        margin-top: 40rpx;
        background-color: #fff;
    }
    .uu {
        float: left;
        width: 100%;
        color: #A0A0A0;
        padding-left: 48rpx;
        box-sizing: border-box;
        margin-top: 20rpx;
        font-size: 30rpx;
    }
    .ui {
        color: #121212;
        padding-left: 60rpx;
        box-sizing: border-box;
    }
</style>
