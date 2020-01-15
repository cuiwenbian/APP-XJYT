<template>
    <!-- 矿池详情 -->
    <view class="container">
        <image class="banner" src="../../static/images/banners.png" mode="">
            <view class="desc">
                <view class="name">{{ poolDetail.name }}</view>
                <progress class="progress-box" :percent="persent" activeColor="#00C1CB" backgroundColor="#0F1E2D" />
                <view class="sale">可出售空间：{{ poolDetail.cloud_hard_disk }}T/{{ poolDetail.hardfree }}T</view>
            </view>
        </image>
        <view class="info">
            <view class="opts">
                <view class="every">
                    <view class="date">{{ poolDetail.price }}</view>
                    <view class="mark">每T售价/年</view>
                </view>
                <view class="every">
                    <view class="date">{{ poolDetail.theory_of_income }}</view>
                    <view class="mark">每T㊐理论收益(FIL)</view>
                </view>
                <view class="every">
                    <view class="date">{{ poolDetail.harduse }}</view>
                    <view class="mark">存储能力(t)</view>
                </view>
                <view class="every">
                    <view class="date">{{ poolDetail.covercharge*100 }}%</view>
                    <view class="mark">技术服务费</view>
                </view>
            </view>
            <view class="line"></view>
            <view class="item">
                <view class="listItem">
                    <view class="time">购买时间：</view>
                    <view :class="month ? 'metss' : 'mets'" @click="buy_month">按月购买</view>
                    <view :class="year ? 'metss' : 'mets'" @click="buy_year">按年购买</view>
                </view>
                <view class="listItem" v-if="month">
                    <view class="months">
                        <view class="btn" @click="nums == 1 ? nums : nums--">-</view>
                        <input class="choosemonth" type="text" value="" placeholder="1个月" placeholder-style="color:#ffffff;" :value="nums + '个月'" />
                        <view class="btn" @click="nums++">+</view>
                    </view>
                </view>
                <view class="listItem" style="padding-left:120rpx;box-sizing: border-box;" v-if="year">
                    <view :class="one ? 'years' : 'yearss'">1年</view>
                    <view :class="two ? 'years' : 'yearss'">2年</view>
                    <view :class="three ? 'years' : 'yearss'">3年</view>
                </view>
                <view class="listItem">
                    <view class="time">购买份数：</view>
                    <view class="nums">
                        <view class="red" @click="number == 1 ? number : number--">-</view>
                        <input class="maney" type="number" value="" placeholder="1T起购" placeholder-style="color:#FEFEFE;" :value="number" />
                        <view class="red" @click="number++">+</view>
                    </view>
                </view>
                <view class="listItem">
                    <view class="time">付款金额：</view>
                    <view class="man">￥0</view>
                </view>
                <view class="listItem">
                    <view class="time" style="color:#8796AA;font-size: 20rpx;">付款方式：</view>
                    <image class="pay" src="../../static/images/pay.png" mode=""></image>
                    <image class="pay coin" src="../../static/images/coin.png" mode=""></image>
                </view>
            </view>
            <view :class="n ? 'buy' : 'buy1'" @click="buynow" @touchstart="next" @touchend="back">立即购买</view>
        </view>
        <view class="navbar">
            <view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
        </view>
        <view class="list" v-if="tabCurrentIndex === 0">
            <view class="intro">{{ poolDetail.remark }}</view>
        </view>
        <view class="list" v-if="tabCurrentIndex === 1">
			 <view class="intro">产品名称：Filecoin云存力</view>
			 <view class="intro">产品售价：每年￥1500/T，1T起售</view>
			 <view class="intro">收益结算：根据矿池的每日实际挖矿收益及用户购买存力比例计算用户每日挖矿收益，扣除</view>
			 <view class="intro">矿池收取的技术服务费后即为用户实际获得的挖矿收益。</view>
			 <view class="intro">北京时间12:00结算前一天的合约收益，最终以矿池的收益结算时间为准。</view>
			 <view class="intro">用户收益=用户持有的存力÷矿池总存力×矿池产币量×（1-技术服务费10%）</view>
			 <view class="intro">技术服务费：收取挖矿产出Filecoin数量的10%作为技术服务费。技术服务费包括：矿场</view>
			 <view class="intro">维护、矿机部署、矿机维修、人力资源支出等费用。</view>
			 <view class="intro">产生收益日期：云存力购买完成到账后，次日产生收益</view>
			 <view class="intro">电费及带宽费用：用户租赁存储空间即Filecoin云存力服务，服务期限内赠送电费、托管</view>
			 <view class="intro">费、带宽费等费用。矿池按照约定上线时间上线，并提供全面的专业运维服务。</view>
			 <view class="intro">合约终止及续费：</view>
			 <view class="intro">1.服务期限为12个月，即每份订单皆包含12个月的挖矿时间。Filecoin云存力合约到期</view>
			 <view class="intro">后合约自动终止，矿机归属星际云通矿池所有。</view>
			 <view class="intro">2.合约到期后，会根据目前的挖矿难度、币价和挖矿成本重新计算合约价格，如需继续续约，</view>
			 <view class="intro">以目前价格重新购买续约。</view>
			 <view class="intro">付款方式：支持支付宝和数字货币进行支付</view>
			 <view class="intro">风险提示：Fil有可能发生价格剧烈波动的情况，且挖矿难度会不定期调整。币价波动或挖</view>
			 <view class="intro">矿难度调整都可能导致Filecoin云存力合约的收益变动。无论从数字货币还是法币角度，</view>
			 <view class="intro">本合约不作退款承诺。用户须仔细评估自己的风险承受能力，在可接受的风控范围内投资数</view>
			 <view class="intro">字货币挖矿。</view>
			 <view class="intro">本合约不涉及数字资产交易，若用户自行参与第三方的数字资产交易，应当自行承担责任和</view>
			 <view class="intro">风险。</view>
			 <view class="intro">用户了解并接受，如因相关国家法律、法规和规范性文件的制定或者修改等客观情况发生变</view>
			 <view class="intro">化，导致Filecoin挖矿行为被叫停或者禁止的，本协议自动终止，双方不得相互追究责任，</view>
			 <view class="intro">由此造成的损失须自行承担。</view>
			 <view class="intro">合约发行方对本合约条款保留所有解释权。</view>
		</view>
        <view class="list" v-if="tabCurrentIndex === 2" v-for="(item, index) in question" :key="index">
            <view class="intro">{{ item.question }}</view>
            <view class="intro">{{ item.answer }}</view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            persent: '',
            n: true,
            number: '',
            id: '',
            question: '',
            poolDetail: '',
            month: false,
            year: false,
            nums: '1',
            tabCurrentIndex: 0,
            navList: [
                {
                    state: 0,
                    text: '矿池介绍'
                },
                {
                    state: 1,
                    text: '合约详情'
                },
                {
                    state: 2,
                    text: '常见问题'
                }
            ]
        };
    },
    onLoad(option) {
        this.id = option.cloudid;
        uni.request({
            url: this.url + 'cloudmessage/',
            method: 'GET',
            data: { cloudid: this.id },
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success: res => {
                this.poolDetail = res.data.data;
                this.persent = parseFloat(this.poolDetail.cloud_hard_disk / this.poolDetail.hardfree) * 100;
            }
        });
        uni.request({
            url: this.url + 'cloudask/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success: res => {
                this.question = res.data.data;
            }
        });
    },
    methods: {
        next: function() {
            this.n = false;
        },
        back: function() {
            this.n = true;
        },
        changeTab(e) {
            this.tabCurrentIndex = e.target.current;
        },
        tabClick(index) {
            var that = this;
            that.tabCurrentIndex = index;
        },
        buynow: function() {
            uni.showToast({
                title: '预购即将开启',
                icon: 'none',
                duration: 3000
            });
        },
        buy_month: function() {
            this.month = true;
            this.year = false;
        },
        buy_year: function() {
            this.year = true;
            this.month = false;
        }
    }
};
</script>

<style>
page {
    background: #121e2c;
}
.banner {
    width: 704rpx;
    height: 162rpx;
    display: block;
    margin: 43rpx auto 0;
    position: relative;
}
.desc {
    position: absolute;
    top: 43rpx;
    left: 0;
    padding: 25rpx 35rpx;
}
.name {
    text-align: center;
    color: #ffffff;
    font-size: 30rpx;
}
.progress-box {
    width: 642rpx;
    height: 9rpx;
    display: block;
    margin: 20rpx;
}
.sale {
    color: #8796aa;
    font-size: 20rpx;
    text-align: center;
}
.info {
    width: 704rpx;
    height: auto;
    margin: 0 auto;
    background: #182a42;
    padding: 32rpx 0;
}
.opts {
    width: 100%;
    height: 312rpx;
}
.every {
    float: left;
    width: 50%;
    height: 50%;
    padding-top: 30rpx;
    box-sizing: border-box;
}
.date {
    font-size: 42rpx;
    color: #ffffff;
    text-align: center;
}
.mark {
    font-size: 22rpx;
    color: #8796aa;
    text-align: center;
    line-height: 40rpx;
}
.line {
    width: 100%;
    height: 1rpx;
    background: #091926;
}
.item {
    padding: 30rpx;
    box-sizing: border-box;
}
.listItem {
    width: 100%;
    height: 100rpx;
}
.time {
    float: left;
    font-size: 24rpx;
    color: #ffffff;
    line-height: 100rpx;
}
.mets {
    float: left;
    width: 130rpx;
    height: 48rpx;
    border: 1px solid #637489;
    border-radius: 24rpx;
    color: #ffffff;
    font-size: 22rpx;
    text-align: center;
    line-height: 48rpx;
    margin-top: 25rpx;
    margin-right: 20rpx;
}
.metss {
    float: left;
    width: 130rpx;
    height: 48rpx;
    background: #41bec9;
    border-radius: 24rpx;
    color: #ffffff;
    font-size: 22rpx;
    text-align: center;
    line-height: 48rpx;
    margin-top: 25rpx;
    margin-right: 20rpx;
}
.months {
    width: 276rpx;
    height: 53rpx;
    border: 1rpx solid #41bec9;
    border-radius: 26.5rpx;
    margin-top: 23rpx;
    margin-left: 120rpx;
}
.years {
    float: left;
    width: 84rpx;
    height: 46rpx;
    border: 1rpx solid #637489;
    border-radius: 26.5rpx;
    margin-top: 23rpx;
    color: #8796aa;
    font-size: 22rpx;
    margin-right: 12rpx;
    text-align: center;
    line-height: 46rpx;
}
.yearss {
    float: left;
    width: 84rpx;
    height: 46rpx;
    border: 1rpx solid #41bec9;
    border-radius: 26.5rpx;
    margin-top: 23rpx;
    color: #8796aa;
    font-size: 22rpx;
    margin-right: 12rpx;
    text-align: center;
    line-height: 46rpx;
}
.btn {
    text-align: center;
    float: left;
    width: 60rpx;
    line-height: 53rpx;
    color: #41bec9;
    font-size: 30rpx;
}
.choosemonth {
    width: 156rpx;
    height: 60rpx;
    float: left;
    font-size: 22rpx;
    color: #ffffff;
    text-align: center;
}
.nums {
    float: left;
    width: 276rpx;
    height: 60rpx;
    background: #637489;
    border-radius: 5rpx;
    margin-top: 23rpx;
}
.red {
    text-align: center;
    float: left;
    width: 60rpx;
    line-height: 60rpx;
    color: #333333;
    font-size: 30rpx;
}
.maney {
    width: 156rpx;
    height: 60rpx;
    float: left;
    font-size: 22rpx;
    color: #fefefe;
    text-align: center;
}
.add {
    text-align: center;
    float: left;
    width: 50rpx;
    line-height: 60rpx;
}
.man {
    color: #ff2b2b;
    font-size: 36rpx;
    line-height: 100rpx;
}
.pay {
    width: 30rpx;
    height: 30rpx;
    display: block;
    float: left;
    margin-top: 35rpx;
    margin-right: 20rpx;
}
.coin {
    width: 33.5rpx;
    height: 33rpx;
    display: block;
}
.buy {
    width: 630rpx;
    height: 76rpx;
    text-align: center;
    line-height: 76rpx;
    font-size: 28rpx;
    color: #ffffff;
    background: #41bec9;
    margin: 0 auto;
    border-radius: 5rpx;
}
.buy1 {
    width: 630rpx;
    height: 76rpx;
    text-align: center;
    line-height: 76rpx;
    font-size: 28rpx;
    color: #ffffff;
    background: rgba(65, 190, 201, 0.5);
    margin: 0 auto;
    border-radius: 5rpx;
}

.navbar {
    display: flex;
    height: 80rpx;
    color: #ffffff;
    position: relative;
    z-index: 10;
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
    width: 66rpx;
    height: 1rpx;
    background: #41bec9;
    position: absolute;
    top: 80rpx;
    left: 90rpx;
}
.list {
    padding: 29rpx 21rpx;
}
.intro {
    line-height: 50rpx;
    color: #ffffff;
    font-size: 24rpx;
}
</style>
