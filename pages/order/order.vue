<template>
	<view class="container">
		<view class='height'></view>
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view class="box">
                <view class="order">订单编号:
                    <text class="right">777777777</text>
                    <text class="state">{{state}}</text>
                </view>
                <view class="belongs">{{buy}}:
                    <text class="right">韭菜矿池</text>
                </view>
                <view class="belongs">{{price}}:
                    <text class="right">¥1500/T</text>    
                </view>
                <view class="belongs">{{numbr}}:
                    <text class="right">10TB</text>
                </view>
                <view class="belongs">{{pay}}:
                    <text class="right">¥10000</text>
                </view>
                <view class="belongs">{{trading}}:
                    <text class="right">存力买入</text>
                </view>
                <view class="belongs">{{dater}}:
                    <text class="right">2019-12-31</text>
                </view>
                <view class="a">
                    <button class="payment">付款</button>
                    <button class="cancel">取消订单</button>
                </view>
                <view class="blank"></view>
            </view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">
            <view class="box">
                <view class="order">订单编号:
                    <text class="right">777777777</text>
                    <text class="state">{{state}}</text>
                </view>
                <view class="belongs">{{buy}}:
                    <text class="right">韭菜矿池</text>
                </view>
                <view class="belongs">{{price}}:
                    <text class="right">¥1500/T</text>    
                </view>
                <view class="belongs">{{numbr}}:
                    <text class="right">10TB</text>
                </view>
                <view class="belongs">{{pay}}:
                    <text class="right">¥10000</text>
                </view>
                <view class="belongs">{{trading}}:
                    <text class="right">存力买入</text>
                </view>
                <view class="belongs">{{dater}}:
                    <text class="right">2019-12-31</text>
                </view>
                <view class="a">
                    <button class="payment">付款</button>
                    <button class="cancel">取消订单</button>
                </view>
                <view class="blank"></view>
            </view>
        </view>
		<view class="list" v-if="tabCurrentIndex === 2">
            <view class="box">
                <view class="order">订单编号:
                    <text class="right">777777777</text>
                    <text class="state">{{state}}</text>
                </view>
                <view class="belongs">{{buy}}:
                    <text class="right">韭菜矿池</text>
                </view>
                <view class="belongs">{{price}}:
                    <text class="right">¥1500/T</text>    
                </view>
                <view class="belongs">{{numbr}}:
                    <text class="right">10TB</text>
                </view>
                <view class="belongs">{{pay}}:
                    <text class="right">¥10000</text>
                </view>
                <view class="belongs">{{trading}}:
                    <text class="right">存力买入</text>
                </view>
                <view class="belongs">{{dater}}:
                    <text class="right">2019-12-31</text>
                </view>
                <view class="a">
                    <button class="payment">付款</button>
                    <button class="cancel">取消订单</button>
                </view>
                <view class="blank"></view>
            </view>
        </view>
		<view class="list" v-if="tabCurrentIndex === 3">
            <view class="box">
                <view class="order">订单编号:
                    <text class="right">777777777</text>
                    <text class="state">{{state}}</text>
                </view>
                <view class="belongs">{{buy}}:
                    <text class="right">韭菜矿池</text>
                </view>
                <view class="belongs">{{price}}:
                    <text class="right">¥1500/T</text>    
                </view>
                <view class="belongs">{{numbr}}:
                    <text class="right">10TB</text>
                </view>
                <view class="belongs">{{pay}}:
                    <text class="right">¥10000</text>
                </view>
                <view class="belongs">{{trading}}:
                    <text class="right">存力买入</text>
                </view>
                <view class="belongs">{{dater}}:
                    <text class="right">2019-12-31</text>
                </view>
                <view class="a">
                    <button class="payment">付款</button>
                    <button class="cancel">取消订单</button>
                </view>
                <view class="blank"></view>
            </view>
        </view>
		<view class="list" v-if="tabCurrentIndex === 4">
            <view class="box">
                <view class="order">订单编号:
                    <text class="right">777777777</text>
                    <text class="state">已完成</text>
                </view>
                <view class="belongs">{{buy}}:
                    <text class="right">韭菜矿池</text>
                </view>
                <view class="belongs">{{price}}:
                    <text class="right">¥1500/T</text>    
                </view>
                <view class="belongs">{{numbr}}:
                    <text class="right">10TB</text>
                </view>
                <view class="belongs">{{pay}}:
                    <text class="right">¥10000</text>
                </view>
                <view class="belongs">{{trading}}:
                    <text class="right">存力买入</text>
                </view>
                <view class="longs">{{dater}}:
                    <text class="right">2019-12-31</text>
                </view>
                <view class="blank"></view>
            </view>
        </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabCurrentIndex: 0,
			navList: [
				{
					state: 0,
					text: '全部'
				},
				{
					state: 1,
					text: '待付款'
				},
				{
					state: 2,
					text: '待确认'
				},
				{
					state: 3,
					text: '待审核'
				},
				{
					state: 4,
					text: '历史订单'
				}
			],
            buy:'所属矿池',
            state:'待付款',
            price:'购买单价',
            numbr:'购买数量',
            pay:'支付金额',
            trading:'交易类型',
            dater:'下单日期'
		};
	},
    onShow() {
        
    },
	methods: {
		changeTab(e) {
			this.tabCurrentIndex = e.target.current;
		},
		tabClick(index) {
			var that=this;
			that.tabCurrentIndex = index;
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
	color: #FFFFFF;
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
	left: 40rpx;
}
/* 全部样式 */
.box{
    width: 100%;
    height: 574rpx;
}
.order{
    font-size: 24rpx;
    height: 90rpx;
    line-height: 90rpx;
    padding-left: 48rpx;
    color: #FFFFFF;
    border-bottom: 1rpx solid #091926;
}
.state{
    float: right;
    color: #41BEC9;
    padding-right: 48rpx;
}
.right{
    padding-left: 20rpx;
}
.belongs{
    font-size: 24rpx;
    color: #FFFFFF;
    padding-left: 48rpx;
    padding-top: 36rpx;
}
.a{
    width: 100%;
    height: 80rpx;
    padding-top: 27rpx;
}
.cancel{
    width: 160rpx;
    height: 52rpx;
    line-height: 52rpx;
    float: right;
    text-align: center;
    margin-right: 20rpx;
    background-color: #B1B1B1;
    font-size: 24rpx;
    color: #333333;
}
.payment{
    float: right;
    width: 150rpx;
    height: 52rpx;
    line-height: 52rpx;
    margin-right: 20rpx;
    background-color: #41BEC9;
    font-size: 24rpx;
    color: #FFFFFF;
    text-align: center;
}
.blank{
    width: 100%;
    height: 20rpx;
    background-color: #12122c;
}
.longs{
    font-size: 24rpx;
    color: #FFFFFF;
    padding-left: 48rpx;
    padding-top: 36rpx;
    padding-bottom: 20rpx;
}
</style>
