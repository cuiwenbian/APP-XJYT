that. <template>
<!-- 卖出待确认订单详情 -->
    <view class="container">
        <view class="box">
            <view class="small">
                <text>交易类型:
                    <text class="smallxx">{{type1}}</text>
                </text>
                <text class="smallx">状态:
                    <text class="smallxx">{{state}}</text>
                </text>
            </view>
            <view class="small">
                <text>交易总价:
                    <text class="smallxx1">{{taste.sale_money}}</text>
                </text>
                <text class="ser">
                    服务器数量:<text class="smallxx1smallxx1">{{taste.sale_num}}</text>台
                </text>
            </view>
            <view class="small">
                <text class="smallx1">人民币:
                    <text class="lop">{{rmb}}</text>
                </text>
            </view>
            <view class="smallss">
                <text>
                    订单编号:<text class="smallxx1">{{taste.order_num}}</text>
                </text>
            </view>
            <view :class="frte?'small1':'smallpo'">
                <text>
                    创建时间:<text class="smallxx1">{{taste.set_time}}</text>
                </text>            
                <view>
                    <text>
                        支付时间:<text class="smallxx1">{{taste.pay_time}}</text>
                    </text>
                </view>
            </view>
          <button :class="frte?'primary':'primary2'" @click="btn1">{{checkall}}<image :src="frte?'../../static/images/Rectangle1.png':'../../static/images/Rectangle.png'" style="width:25rpx;height:20rpx; margin-left: 6rpx;" mode=""></image></button>
        </view>
        <view class="box1">
            买家信息
        </view>
        <view class="box2">
            <view class="bx">姓名:
                <text class="bxx">{{taste.name}}</text>
            </view>
            <view class="bx">联系方式:
                <text class="bxx">{{taste.mobile}}</text>
            </view>
        </view>
        <view class="box1">
            商品信息
        </view>
        <view class="box3" v-for="(item , index) in boe" :key="index">
            <view>
                <image class="img" src="../../static/images/kuangji.png" mode=""></image>
            </view>
            <view>
                <view class="small2">
                    专业版:
                    <text class="aa">{{item.name}}</text>
                    <text class="smal">{{item.number}}</text>
                </view>
                <view class="small3">
                    <text class="smalx">已运行{{item.usedays}}天 | <text class="smalx">剩余{{item.residuedays}}天</text></text>
                </view>
                <view class="small3">
                    <text class="smalx">
                        储存{{item.usedisk}}T| 
                    </text>
                    <text class="smalx">
                        总容量{{item.data_hard_disk}}
                    </text>
                </view>  
            </view>
        </view>
        <view class="box4">
            <button class="primary1" @click="btn">确认收款</button>
            <!-- #ifndef H5 -->
            <password-input v-if="passIn" @clo="clo" ref='wrong'  @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
            <!-- #endif -->
            <!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
            <!-- #ifdef H5 -->
            <view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo">
                <password-input ref='wrong' :length="length" :gutter="20" :list="numberList"></password-input>
            </view>
            <!-- #endif -->
            <!-- 数字键盘 -->
            <keyboard-package ref="number" @onChange='onChange'  @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
            <!-- <button class="primary1">我已付款</button> -->
        </view>
    </view>
</template>

<script>
    var getRmb=require('../../common/requset.js')
    import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
    import passwordInput from '../../components/password-input/password-input.vue';
    export default {
        data(){
            return {
                taste:'',
                type1:'卖出',
                state:'',
                boe:'',
                price:'',
                x:'',
                rmb:'',
                numberList: [],
                length: 6,
                type: 'number',
                passIn: false,
                frte:true,
                checkall:'展示完整信息'
            }
        },
        components: {
        	keyboardPackage,
        	passwordInput
        },
        onLoad(option) {
            var that = this
            //获取上个页面携带的数据，并复制
            var vn = JSON.parse(option.mvp)
            that.vn = vn
            var boe = that.vn[1]
            that.boe = that.vn[1]
            that.state = vn[0][0].order_status
            if(that.state == 102) {
                that.state = '已确认'
            }
            that.taste = that.vn[0][0]
            that.x = that.taste.order_num
            that.price = that.taste.sale_money
            that.rmb = getRmb.getrmb(that.price)
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
                this.numberList.length = 0
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
            	that.numberList.push(val);
            	that.password = that.numberList.join().replace(/,/g, '');
            	if (that.numberList.length >= that.length) {
            		uni.request({
            			url: that.url + 'saleaffirm/',
            			method: 'POST',
            			data: {
                            order_num:that.x,
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
                                that.$refs.wrong.tip='密码错误，剩余'+ s +'次机会';
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
            					uni.showToast({
            						title: '收款完成',
            						icon: 'none',
            						duration: 2000
            					});
                                uni.navigateBack({
                                    url:'../sale/sale'
                                })
            				}
            				var page = getCurrentPages().pop();
            				if (page == undefined || page == null) return;
            				page.onLoad(that.val);
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
            },
            btn1:function () {
                var that = this
                that.frte=!that.frte;
                if(that.frte==false){
                    that.checkall='收起';
                }else{
                    that.checkall='展示完整信息'
                }
            }
        }
    }
</script>

<style>
    page {
        background-color: #DCDCDC;
        margin-bottom:40rpx;
    }
    .box {
        width: 100%;
        background-color: #fff;
        padding-bottom:20rpx;
    }
    .primary {
        width: 250rpx;
        height: 40rpx;
        border-radius: 70rpx;
         border: 1rpx solid #000000;
         color: #000000;
        background-color: #FFFFFF;
        line-height: 40rpx;
         margin-top:20rpx;
        font-size: 22rpx;
    }
    .primary2 {
        width: 180rpx;
        height: 40rpx;
        border-radius: 70rpx;
        color: #000000;
         border: 1rpx solid #000000;
        background-color: #FFFFFF;
        line-height: 40rpx;
         margin-top:20rpx;
        font-size: 22rpx;
    }
    .smallss{
        box-sizing: border-box;
        width: 100%;
        height: 110rpx;
        line-height: 110rpx;
        float: left;
        padding-left: 48rpx;
        margin-bottom: 20rpx;
        font-size: 28rpx;
    }

    .small {
        box-sizing: border-box;
        width: 100%;
        height: 110rpx;
        line-height: 110rpx;
        float: left;
        padding-left: 48rpx;
        border-bottom: 1rpx solid #F2F2F2;
        font-size: 28rpx;
    }
    .ser {
        float: right;
        margin-right: 48rpx;
    }
    .sam{
        float: right;
        font-size: 28rpx;
        margin-right: 48rpx;
    }
    .aa {
        font-size: 30rpx;
    }
    .lop{
        margin-left: 60rpx;
    }
    .smallx1{
        float: left;
    }
    .small1{
        box-sizing: border-box;
        width: 100%;
        float: left;
        height: 80rpx;
        padding-left: 48rpx;
        display: none;
        font-size: 28rpx;
    }
    .smallpo{
        display: block;
        line-height: 80rpx;
        font-size: 28rpx;
        padding-left: 48rpx;
        font-size: 28rpx;
    }
    .smallx {
        box-sizing: border-box;
        float: right;
        font-size: 28rpx;
        padding-right: 48rpx;
    }
    .smallxx {
        box-sizing: border-box;
        color: #E3BA85;
        padding-left: 40rpx;
    }
    .smallxx1{
        margin-left: 48rpx;
    }
    .box1 {
        height: 78rpx;
        padding-left: 48rpx;
        line-height: 78rpx;
        font-size: 32rpx;
        color: #333333;
        background-color: #F6F6F6;
    }
    .box2 {
        height: 180rpx;
        width: 100%;
        background-color: #fff;
    }
    .bx {
        height: 90rpx;
        line-height: 90rpx;
        padding-left: 48rpx;
        font-size: 28rpx;
    }
    .bxx {
        padding-left: 30rpx;
    }
    .box3{
        width: 100%;
        height: 260rpx;
        background-color: #fff;
    }
    .img {
        width: 160rpx;
        height: 160rpx;
        float: left;
        padding-left: 48rpx;
        padding-top: 40rpx;
    }
    .small2 {
        float: left;
        font-size: 30rpx;
        padding-left: 20rpx;
        padding-top: 40rpx;
    }
    .small3 {
        float: left;
        padding-top: 20rpx;
        font-size: 32rpx;
    }
    .smal {
        padding-left: 20rpx;
    }
    .smalx {
        padding-left: 34rpx;
        font-size: 26rpx;
        color: #a1a1a1;
    }
  .box4 {
      position: fixed;
      bottom: 0rpx;
      right: 0rpx;
      height: 80rpx;
      width: 100%;
      background-color: #F6F6F6;
      line-height: 80rpx;
  }
    .primary1 {
        width: 180rpx;
        height: 60rpx;
        line-height: 60rpx;
        margin-top: 12rpx;
        color: #FFFFFF;
        font-size: 28rpx;
        float: right;
        margin-right: 48rpx;
        background-color: #121212;
    }
</style>
