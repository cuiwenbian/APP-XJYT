<template>
    <view class="container">
        <!-- <view class='height'></view> -->
        <view class="navbar">
            <view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
        </view>
        <view  class="list">
            <template v-if="orderList && orderList.length">
                <view v-for="order in orderList" :key="order.ordernum">
                    <view class="box" @click="handleToDetail(order)">
                        <view class="order">
                            订单编号:
                            <text class="right">{{ order.ordernum }}</text>
                            <text class="state">{{ order.state_text }}</text>
                        </view>
                        <!--矿机买入-->
                        <template v-if="order.type === 9">
                            <view class="belongs">
                                <text>卖家姓名：</text>
                                <text class="right">{{ order.username }}</text>
                                <text :style="{ marginLeft: '60rpx' }">电话：</text>
                                <text class="right">{{ order.mobile }}</text>
                            </view>
                            <view class="belongs">
                                <text>矿机数量：</text>
                                <text class="right">{{ order.salenum }}台</text>
                            </view>
                            <view class="belongs">
                                <text>交易总价：</text>
                                <text class="right">¥{{ order.saleprice }}</text>
                            </view>
                            <view class="belongs">
                                <text>交易类型：</text>
                                <text class="right" :style="{ color: order.type_text_color }">{{ order.type_text }}</text>
                            </view>
                            <view class="belongs">
                                <text>创建日期：</text>
                                <text class="right">{{ order.time }}</text>
                            </view>
                        </template>
                        <!--矿机卖出-->
                        <template v-else-if="order.type === 10">
                            <view class="belongs">
                                <text>买家姓名：</text>
                                <text class="right">{{ order.username }}</text>
                                <text :style="{ marginLeft: '60rpx' }">电话：</text>
                                <text class="right">{{ order.mobile }}</text>
                            </view>
                            <view class="belongs">
                                <text>矿机数量：</text>
                                <text class="right">{{ order.salenum }}台</text>
                            </view>
                            <view class="belongs">
                                <text>交易总价：</text>
                                <text class="right">¥{{ order.saleprice }}</text>
                            </view>
                            <view class="belongs">
                                <text>交易类型：</text>
                                <text class="right" :style="{ color: order.type_text_color }">{{ order.type_text }}</text>
                            </view>
                            <view class="belongs">
                                <text>创建日期：</text>
                                <text class="right">{{ order.time }}</text>
                            </view>
                        </template>
                        <!--矿力买入-->
                        <template v-else-if="order.type === 11">
                            <view class="belongs">
                                <text>所属矿池：</text>
                                <text class="right">{{ order.poolname }}</text>
                            </view>
                            <view class="belongs">
                                <text>购买单价：</text>
                                <text class="right">¥{{ order.price }}/TB</text>
                            </view>
                            <view class="belongs">
                                <text>购买数量：</text>
                                <text class="right">{{ order.salenum }}TB</text>
                            </view>
                            <view class="belongs">
                                <text>支付金额：</text>
                                <text class="right">¥{{ order.saleprice }}</text>
                            </view>
                            <view class="belongs">
                                <text>交易类型：</text>
                                <text class="right" :style="{ color: order.type_text_color }">{{ order.type_text }}</text>
                            </view>
                            <view class="belongs">
                                <text>下单日期：</text>
                                <text class="right">{{ order.time }}</text>
                            </view>
                        </template>
                        <!--矿力转让-->
                        <template v-else-if="order.type === 12">
                            <view class="belongs">
                                <text>收购人：</text>
                                <text class="right">{{ order.username }}</text>
                                <text :style="{ marginLeft: '60rpx' }">电话：</text>
                                <text class="right">{{ order.mobile }}</text>
                            </view>
                            <view class="belongs">
                                <text>所属矿池：</text>
                                <text class="right">{{ order.poolname }}</text>
                            </view>
                            <view class="belongs">
                                <text>转让数量：</text>
                                <text class="right">{{ order.salenum }}TB</text>
                            </view>
                            <view class="belongs">
                                <text>交易类型：</text>
                                <text class="right" :style="{ color: order.type_text_color }">{{ order.type_text }}</text>
                            </view>
                            <view class="belongs">
                                <text>转让日期：</text>
                                <text class="right">{{ order.time }}</text>
                            </view>
                        </template>
                        <view class="a">
                            <template v-if="order.status === 101 && order.type == 9">
                                <button class="payment" @click.stop="handleOrderPay(order)">付款</button>
                               
                                <button class="cancel" @click.stop="handleOrderCancel(order)">取消订单</button>
                            </template>
                            <template v-else-if="order.status === 101 && order.type == 10 || order.status === 102 && order.type == 9">
                                <button class="payment" @click.stop="handleOrderAppeal(order)">申诉</button>
                            </template>
                            <template v-else-if="order.status === 102 && order.type == 10">
                                <button class="payment" @click.stop="handleOrderConfirm(order)">确认收款</button>
                            </template>
                        </view>
                    </view>
                    <view class="blank"></view>
                </view>
            </template>
            <template v-else-if="!data_loading">
                <image class="transfer" src="../../static/images/no-transfer.png" mode=""></image>
                <view class="info">没有订单～</view>
            </template>
            <view class="timm" v-if='titl'>
                <view class="fals">
                    <text class="tite">提示</text>
                    <input class="int" type="text" :value="title" @input='getPhoneValue' placeholder="请填写申诉原因"/>
                    <button class="bn" @click="deer">提交</button>
                </view>
            </view>
        </view>
            <!-- #ifndef H5 -->
            <password-input v-if="passIn" @clo="clo" ref='wrong' @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
            <!-- #endif -->
            <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
            <!-- #ifdef H5 -->
            <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" ref='wrong' :list="numberList"></password-input></view>
            <!-- #endif -->
            <!-- 数字键盘 -->
            <keyboard-package  ref="number" @onChange='onChange' @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
            
            <!-- #ifndef H5 -->
            <password-input v-if="delShow" ref="wrong" @tap="openKeyBoard('number')" @clo="cloo" :length="length" :gutter="20" :list="numberList"></password-input>
            <!-- #endif -->
            <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
            <!-- #ifdef H5 -->
            <view v-if="delShow" @tap="openKeyBoard('number')" @clo="cloo"><password-input :length="length" ref="wrong" :gutter="20" :list="numberList"></password-input></view>
            <!-- #endif -->
            <!-- 数字键盘 -->
            <keyboard-package ref="numbers" @onChange="onChange1" @onInput="onInput1" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
    </view>
</template>

<script>
    import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
    import passwordInput from '../../components/password-input/password-input.vue';
export default {
    data() {
        return {
            tabCurrentIndex: 0,
            data_loading: true,
            navList: [
                {
                    state: '[101,102,103,104,105]',
                    text: '全部'
                },
                {
                    state: '[101]',
                    text: '待付款'
                },
                {
                    state: '[102]',
                    text: '待确认'
                },
                // {
                //   state: '(104)',
                //   text: '待审核'
                // },
                {
                    state: '[104,105]',
                    text: '历史订单'
                }
            ],
            orderList: [],
            buy: '所属矿池',
            state: '待付款',
            price: '购买单价',
            numbr: '购买数量',
            pay: '支付金额',
            trading: '交易类型',
            dater: '下单日期',
            shod: true,
            numberList: [],
            length: 6,
            type: 'number',
            passIn: false,
            delShow: false,
            titl:false,
            password: '',
            num:'',
            num1:'',
            num2:'',
            phone:''
        };
    },
    components: {
    	keyboardPackage,
    	passwordInput
    },
    onShow() {},
    onLoad() {
        this.orderSource();
    },
    methods: {
        orderSource() {
            const _this = this;
            const state = this.navList[this.tabCurrentIndex].state;
            _this.data_loading = true;
            uni.showLoading({
                title: '加载中...'
            });
            uni.request({
                url: this.url + 'orderall/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                data: {
                    orderstatus: state
                },
                success(res) {
                    console.log(res)
                    const orderList = (res.data.data || []).map(o => {
                        switch (o.type) {
                            case 9:
                                o.type_text = '矿机买入';
                                o.type_text_color = '#FFB931';
                                break;
                            case 10:
                                o.type_text = '矿机卖出';
                                o.type_text_color = '#FF3131';
                                break;
                            case 11:
                                o.type_text = '矿力买入';
                                o.type_text_color = '#3D97D6';
                                break;
                            case 12:
                                o.type_text = '矿力转让';
                                o.type_text_color = '#7466FF';
                                break;
                            default:
                                o.type_text = '';
                                o.type_text_color = '#888';
                                break;
                        }
                        switch (o.status) {
                            case 101:
                                o.state_text = '待付款';
                                break;
                            case 102:
                                o.state_text = '等待卖家收款';
                                break;
                            case 103:
                                o.state_text = '待确认';
                                break;
                            case 104:
                                o.state_text = '已完成';
                                break;
                            case 105:
                                o.state_text = '已取消';
                                break;
                            default:
                                o.state_text = '-';
                                break;
                        }
                        return o;
                    });
                    console.log(orderList);
                    _this.orderList = orderList.reverse();
                    uni.hideLoading();
                    _this.data_loading = false;
                },
                fail() {
                    uni.hideLoading();
                    _this.data_loading = false;
                }
            });
        },
        /**
         * 跳转详情页
         * @param order
         */
        handleToDetail(order) {
            if(order.status == 101){
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:order.ordernum
                    },
                    success(res) {
                        var ord = JSON.stringify(res.data.data)
                        console.log(ord)
                        uni.navigateTo({
                            url:"../../mill/staypay/staypay?mvvp=" + ord
                        })
                    }
                })
            }
            if(order.status == 102) {
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:order.ordernum
                    },
                    success(res) {
                        var order = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:'../../mill/salepay/salepay?aser=' + order
                        })
                    }
                })
            }
            if(order.type_text == '矿机卖出' && order.status == 104){
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:order.ordernum
                    },
                    success(res) {
                       var ksa = JSON.stringify(res.data.data)
                       console.log(ksa)
                       uni.navigateTo({
                           url:'../../mill/salecompleted/salecompleted?cshug=' + ksa
                       })
                    }
                })
            }
            if(order.type_text == '矿机买入' && order.status == 104){
                uni.request({
                    url:this.url + 'salemessage/',
                    method:'GET',
                    header:{
                        Authorization: 'JWT'+' '+this.global_.token
                    },
                    data:{
                        order_num:order.ordernum
                    },
                    success(res) {
                        var blone = JSON.stringify(res.data.data)
                        uni.navigateTo({
                            url:'../../mill/completed/completed?deattr=' + blone
                        })
                    }
                })
            }
        },
        /**
         * 订单支付
         * @param orde
         */
        onBackPress(option) {
            plus.key.hideSoftKeybord();
        },
        clo: function() {
        	this.passIn = false;
        	this.$refs['number'].close();
        	this.numberList.length= 0;
        },
        cloo:function(){
            this.delShow = false;
            this.$refs['numbers'].close();
            this.numberList.length = 0;
        },
        onDelete() {
        	this.numberList.pop();
        },
        onChange1(e) {
            if (e.show == false) {
                this.delShow = false;
            }
            this.numberList.length = 0;
        },
        onChange(e){
        	if(e.show==false){
        		this.passIn = false
        	}
        	this.numberList.length= 0;
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
        	var that=this;
        	that.numberList.push(val);
        	that.password = that.numberList.join().replace(/,/g, '');
        	if (that.numberList.length >= that.length) {
            		uni.request({
            			url: that.url + 'buyaffirm/',
            			method: 'POST',
            			data: {
                            order_num:that.num,
            				password: that.password
            			},
            			header: {
            				Authorization: 'JWT' + ' ' + that.global_.token
            			},
            			success(res) {

                            if(res.statusCode==400){
                                that.numberList.pop()
                                that.numberList.length= 0;
                                that.$refs.wrong.flag=false;
                                var n=res.data.data.err_num;
                                var s=5-n;
                                that.$refs.wrong.tip='剩余'+ s +'次机会';
                            }
                            if (res.statusCode == 401) {
                                that.passIn = false;
                                that.$refs['number'].close();
                                that.shade = true
                                that.stuse = res.statusCode
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
            						title: '付款完成', 
                                    duration: 3000,
                                });
                               
                            }
            				var page = getCurrentPages().pop();
            				if (page == undefined || page == null) return;
            			},
                       
            		});
        		this.numberList.length = 0;
        	}	 
        },
        //点击删除按钮
        handleOrderPay: function(order) {
            console.log(order.ordernum)
            this.num = order.ordernum
        	var that = this;
        	this.passIn = true;
        	this.$refs['number'].open();
        	this.onInput(val);
        },
        /**
         * 取消订单
         * @param orde
         */
        handleOrderCancel(order) {
            var that = this;
            uni.request({
                url: this.url + 'ordercancel/',
                method: 'POST',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                data: {
                    order_num: order.ordernum
                },
                success(res) {
                    if (res.statusCode == 200) {
                        uni.showToast({
                            title: '取消成功',
                            icon: 'none',
                            duration: 2000
                        });
                    } else if (res.statusCode == 400) {
                        uni.showToast({
                            title: '该订单不可删除',
                            icon: 'none',
                            duration: 2000
                        });
                    }
                    that.orderSource()
                }
            });
        },
        /**
         * 订单确认收款
         * @param ord
         */
        onInput1(val) {
            var that = this
            console.log(that.num1)
        	that.numberList.push(val);
        	that.password = that.numberList.join().replace(/,/g, '');
        	if (that.numberList.length >= that.length) {
        		uni.request({
        			url: that.url + 'saleaffirm/',
        			method: 'POST',
        			data: {
                        order_num:that.num1,
        				password: that.password
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
                            that.delShow = false;
                            that.$refs['numbers'].close();
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
                            that.delShow = false;
                            that.$refs['numbers'].close();
        					uni.showToast({
        						title: '收款完成',
        						duration: 2000
        					});
        				}
        				var page = getCurrentPages().pop();
        				if (page == undefined || page == null) return;
        				page.onLoad(that.val);
        			},
        		});
                this.numberList.length= 0;
        	}
        },
        handleOrderConfirm:function (order) {
            this.num1 = order.ordernum
            console.log(this.num1)
            this.delShow = true;
            this.$refs['numbers'].open();
            this.onInput1(val);
        },
        /**
         * 订单申诉
         * @param order
         */

        changeTab(e) {
            this.tabCurrentIndex = e.target.current;
        },
        tabClick(index) {
            var that = this;
            that.tabCurrentIndex = index;
            that.orderList = [];
            this.orderSource();
        },
        getPhoneValue:function(e){
        	this.phone=e.detail.value
            console.log(this.phone)
        },
        handleOrderAppeal(order) {
            this.num2 = order.ordernum
            console.log(order.ordernum)
            this.titl=true
            this.arr = []
        },
        deer:function() {
            var that = this
            uni.request({
                url:this.url + 'orderappeal/',
                method:'POST',
                header:{
                    Authorization: 'JWT'+' '+this.global_.token
                },
                data:{
                    info:that.phone,
                    order_num:that.num2
                },
                success(res) {
                    console.log(that.phone)
                    if(that.phone == ' ') {
                        uni.showToast({
                            title:'填写内容不能为空',
                            icon:'none'
                        })
                    }else
                    if(res.statusCode == 200) {
                        that.titl = false
                        uni.showToast({
                            title:'已提交'
                        })
                    }else if (res.statusCode == 400) {
                        uni.showToast({
                            title:'该订单不可申诉',
                            icon:'none'
                        })
                        that.titl = false
                    }
                }
            })
        }
    }
};
</script>

<style>
page {
    background: #121e2c;
}

.height {
    height: var(--status-bar-height);
    background: #121e2c;
}

.container {
    position: relative;
}

.navbar {
    display: flex;
    width: 100%;
    height: 80rpx;
    color: #ffffff;
    position: fixed;
    background: #121e2c;
    left: 0;
    /* #ifdef MP-WEIXIN */
    top: 0;
    /* #endif */
    /* #ifndef MP-WEIXIN */
    top: 0;
    /* #endif */
    z-index: 9;
}

.list {
    padding-top: 80rpx;
}

.nav-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 26rpx;
    color: #ffffff;
    position: relative;
}

.current {
    color: #41bec9;
}

.current:after {
    content: '';
    width: 120rpx;
    height: 1rpx;
    background: #41bec9;
    position: absolute;
    top: 80rpx;
    left: 40rpx;
}

/* 全部样式 */
.box {
    width: 100%;
    height: 574rpx;
    transition: all 0.2;
}

.box:active {
    opacity: 0.8;
}

.order {
    font-size: 24rpx;
    height: 90rpx;
    line-height: 90rpx;
    padding-left: 48rpx;
    color: #ffffff;
    border-bottom: 1rpx solid #091926;
}

.state {
    float: right;
    color: #41bec9;
    padding-right: 48rpx;
}

.right {
    padding-left: 20rpx;
}

.right1 {
    color: #3d97d6;
    padding-left: 20rpx;
}

.right2 {
    color: #ffb931;
    padding-left: 20rpx;
}

.right3 {
    color: #ff3131;
    padding-left: 20rpx;
}

.right4 {
    color: #7466ff;
    padding-left: 20rpx;
}

.belongs {
    font-size: 24rpx;
    color: #ffffff;
    padding-left: 48rpx;
    padding-top: 36rpx;
}

.a {
    width: 100%;
    height: 80rpx;
    padding-top: 27rpx;
}

.cancel {
    width: 160rpx;
    height: 52rpx;
    line-height: 52rpx;
    float: right;
    text-align: center;
    margin-right: 20rpx;
    background-color: #b1b1b1;
    font-size: 24rpx;
    color: #333333;
}

.payment {
    float: right;
    width: 160rpx;
    height: 52rpx;
    line-height: 52rpx;
    margin-right: 20rpx;
    background-color: #41bec9;
    font-size: 24rpx;
    color: #ffffff;
    text-align: center;
}

.blank {
    width: 100%;
    height: 20rpx;
    margin-top: 30rpx;
    background-color: #12122c;
}

.longs {
    font-size: 24rpx;
    color: #ffffff;
    padding-left: 48rpx;
    padding-top: 36rpx;
    padding-bottom: 20rpx;
}

.transfer {
    width: 234rpx;
    height: 147rpx;
    display: block;
    margin: 152rpx auto 35rpx;
}

.info {
    text-align: center;
    color: #8796aa;
    font-size: 26rpx;
}
 .timm {
       width:100%;
       height:100%;
       background:rgba(255,255,255,0.5);
       position: fixed;
       left:0;
       top:0;
       z-index:99
    }
    .bn {
        width: 160rpx;
        height: 60rpx;
        margin-top: 60rpx;
        background-color: #121212;
        color: #FFFFFF;
        font-size: 20rpx;
    }
    .fals{
        width: 400rpx;
        height: 400rpx;
        position: absolute;
        left: 175rpx;
        top:300rpx;
        background-color: #fff;
        border: 1rpx solid #999999;
    }
    .tite {
        width: 400rpx;
        height: 60rpx;
        font-size: 24rpx;
        margin-left: 180rpx;
        margin-top: 40rpx;
        color: #000000;
        text-align: center;
    }
    .int {
        width: 300rpx;
        height: 80rpx;
        line-height: 80rpx;
        font-size: 20rpx;
        text-align: center;
        margin-left: 40rpx;
        margin-top: 60rpx;
        border: 1rpx solid #999999;
        color: #999999;
    }
</style>
