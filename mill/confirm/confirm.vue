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
        <view class="">
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
            <password-input v-if="passIn" @clo="clo" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
            <!-- #endif -->
            
            <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
            <!-- #ifdef H5 -->
            <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" :list="numberList"></password-input></view>
            <!-- #endif -->
            <!-- 数字键盘 -->
            <keyboard-package ref="number" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
            <!-- <button class="primary1">我已付款</button> -->
        </view>
    </view>
</template>

<script>
    // import bestPaymentPassword from '../../components/best-payment-password/best-payment-password.vue'
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
                password:'123456',
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
            console.log(that.data[1])
            console.log(that.data[0][0].name)
            that.name = that.data[0][0].name
            that.pag = that.data[0][0].mobile
            that.san = that.data[0][0].sale_num
            that.suu = that.data[0][0].sale_money
            that.data=that.data[1]   
            console.log(that.data[0].machine_id)
            that.sun = getRmb.getrmb(that.suu)
            
          
            for(let i = 0; i < sur.length; i++) {
                console.log(that.data[i].machine_id)
                arr.push(sur[i].machine_id)
                console.log(arr)
            }
          this.arr = arr
        },
        methods:{
            openKeyBoard:function () {
                
            },
            clo: function() {
            	this.passIn = false;
            	this.$refs['number'].close();
            	
            },
            onDelete() {
            	this.numberList.pop();
            },
            onConfirm() {
            	uni.showToast({
            		title: '完成输入！',
            		duration: 2000,
            		icon: 'none'
            	});
            },
            onInput(val) {
                var that = this
                var a = that.arr.join()
            	this.numberList.push(val);
            	console.log(this.numberList.join().replace(/,/g, ''));
            	that.password = this.numberList.join().replace(/,/g, '');
            	if (this.numberList.length >= this.length) {
            		this.passIn = false;
            		this.$refs['number'].close();
            		uni.request({
            			url: this.urll + 'submitorder/',
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
            				console.log(res);
            				if (res.statusCode == 200) {
            					uni.showToast({
            						title: '收款完成',
            						icon: 'none',
            						duration: 2000
            					});
                                uni.switchTab({
                                    url:'../mill/mill'
                                })
            				}
            				if (res.statusCode == 400) {
            					uni.showToast({
            						title: '资金密码错误',
            						icon: 'none',
            						duration: 2000
            					});
            				}
            				var page = getCurrentPages().pop();
            				if (page == undefined || page == null) return;
            				// page.onLoad(that.val);
            			},
                       
            		});
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
        color: #121212;
        margin-left: 18rpx;
    }
    .box1 {
        margin-bottom: 40rpx;
        height: 120rpx;
        background-color: #fff;
    }
    .name {
        float: left;
        width: 124rpx;
        color: #A0A0A0;
        line-height: 120rpx;
        margin-left: 48rpx;
    }
    .pag {
        float: left;
        color: #A0A0A0;
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
        width: 145rpx;
        height: 126rpx;
        margin-left: 48rpx;
        margin-top: 36rpx;
        margin-right: 24rpx;
        border: 1rpx solid #CCCCCC;
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
        margin-left: 48rpx;
        margin-top: 20rpx;
        font-size: 30rpx;
    }
    .ui {
        color: #121212;
        margin-left: 60rpx;
    }
</style>
