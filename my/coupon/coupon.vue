<template>
	<!-- 优惠券 -->
	<view class="container">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{ current: tabCurrentIndex === index }" @click="tabClick(index)">{{ item.text }}</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 0">
			<view v-if='all'>
				<view class="coupon" v-for="(item, index) in news" :key="index">
					<view class="discount">¥{{ item.discount }}</view>
					<view class="info">
						<view class="name1">{{ item.name }}</view>
						<view class="require1">消费满{{ item.sill }}可用</view>
						<view class="time1">限{{ item.start }}至{{ item.end }}使用</view>
						<view class="nums1">剩余{{ item.lens }}张</view>
					</view>
					<view v-if="type == 2" :class="n ? 'use' : 'use1'" @click="transfer(item.type)" @touchstart="next" @touchend="back">转让</view>
					<view v-else :class="n ? 'use' : 'use1'" @click="use" @touchstart="next" @touchend="back">使用</view>
				</view>
				<view class="coupon" v-for="(item, index) in discount" :key="index">
					<view class="discount">{{ item.discount * 10 }}折</view>
					<view class="info">
						<view class="name">{{ item.name }}</view>
						<view class="time">限{{ item.start }}至{{ item.end }}使用</view>
						<view class="nums">剩余{{ item.lens }}张</view>
					</view>
					<view v-if="type == 2" :class="n ? 'use' : 'use1'" @click="transfer(item.type)" @touchstart="next" @touchend="back">转让</view>
					<view v-else :class="n ? 'use' : 'use1'" @click="use" @touchstart="next" @touchend="back">使用</view>
				</view>
			</view>
			<view v-else>
				<image class="transfer" src="../../static/images/no-coupon.png" mode=""></image>
				<view class="nobuys">暂无优惠券～</view>
			</view>
			
		</view>
		<view class="list" v-if="tabCurrentIndex === 1">
			<view v-if='all1'>
			<view class="coupon" v-for="(item, index) in news" :key="index">
				<view class="discount">¥{{ item.discount }}</view>
				<view class="info">
					<view class="name1">{{ item.name }}</view>
					<view class="require1">消费满{{ item.sill }}可用</view>
					<view class="time1">限{{ item.start }}至{{ item.end }}使用</view>
					<view class="nums1">剩余{{ item.lens }}张</view>
				</view>
				<view v-if="type == 2" :class="n ? 'use' : 'use1'" @click="transfer(item.type)" @touchstart="next" @touchend="back">转让</view>
				<view v-else :class="n ? 'use' : 'use1'" @click="use" @touchstart="next" @touchend="back">使用</view>
			</view>
			</view>
			<view v-else>
				<image class="transfer" src="../../static/images/no-coupon.png" mode=""></image>
				<view class="nobuys">暂无优惠券～</view>
			</view>
		</view>
		<view class="list" v-if="tabCurrentIndex === 2">
			<view v-if='all2'>
			<view class="coupon" v-for="(item, index) in discount" :key="index">
				<view class="discount">{{ item.discount * 10 }}折</view>
				<view class="info">
					<view class="name">{{ item.name }}</view>
					<view class="time">限{{ item.start }}至{{ item.end }}使用</view>
					<view class="nums">剩余{{ item.lens }}张</view>
				</view>
				<view v-if="type == 2" :class="n ? 'use' : 'use1'" @click="transfer(item.type)" @touchstart="next" @touchend="back">转让</view>
				<view v-else :class="n ? 'use' : 'use1'" @click="use" @touchstart="next" @touchend="back">使用</view>
			</view>
			</view>
			<view v-else>
				<image class="transfer" src="../../static/images/no-coupon.png" mode=""></image>
				<view class="nobuys">暂无优惠券～</view>
			</view>
			
		</view>
		<view class="list" v-if="tabCurrentIndex === 3">
			<view v-if="flag">
				<image class="transfer" src="../../static/images/no-transfer.png" mode=""></image>
				<view class="nobuys">暂无优惠券转让记录～</view>
			</view>
			<view v-else>
				<view class="tablist">
					<view class="li">序号</view>
					<view class="li">接收人</view>
					<view class="li">优惠券名称</view>
					<view class="li">转让时间</view>
					
				</view>
				<view class="tablists" v-for="(item,index) in couponTip" :key='index'>
					<view class="li">1</view>
					<view class="li">{{item.name}}</view>
					<view class="li">{{item.discountname}}</view>
					<view class="li">{{item.time }}</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            n: true,
            coupon: '',
            type: '',
            news: '',
            sum: '',
            discount: '',
            len: [],
            tabCurrentIndex: 0,
            couponTip:'',
            nums:'1',
            navList: [
                {
                    state: 0,
                    text: '全部(0)'
                },
                {
                    state: 1,
                    text: '存力满减券(0)'
                },
                {
                    state: 2,
                    text: '存力打折券(0)'
                },
                {
                    state: 3,
                    text: '转出(0)'
                }
            ],
			all:true,
			all1:true,
			all2:true,
			flag:false
        };
    },
    onShow() {
        uni.request({
            url: this.url + 'mydiscount/',
            method: 'GET',
            header: {
                Authorization: 'JWT' + ' ' + this.global_.token
            },
            success: res => {
                console.log(res);
                console.log(res.data.data[0].join());
                this.type = res.data.data[0].join();

                if (this.type == 1) {
                    this.navList.length = 3;
                }
				
                console.log(res.data.data[1].length);
                var coupon_total = 0, news_total = 0, discount_total = 0;
                for (let i = 0; i < res.data.data[1].length; i++) {
                    let item = res.data.data[1][i], lens = parseInt(item.lens);
                    coupon_total += lens;
                    if ( item.type === 1) {
                        news_total += lens;
                    } else if ( item.type === 1) {
                        discount_total += lens;
                    }
                }
                this.coupon = res.data.data[1];
                
                this.news = res.data.data[1].filter(val => {
                    return val.type === 1;
                });
                this.discount = res.data.data[1].filter(val => {
                    return val.type === 2;
                });
				if(this.coupon.length==0){
					this.all=false
				}
				if(this.news.length==0){
					this.all1=false
				}
				if(this.discount.length==0){
					this.all2=false
				}
                for (let i = 0; i < this.coupon.length; i++) {
                    this.couponType = this.coupon[i].type;
                    console.log(this.couponType);
                    var l = this.coupon[i].lens;
                    console.log(l);
                    this.len.push(l);
                    console.log(this.len);
                    var sum = 0;

                    for (var j = 0; j < this.len.length; j++) {
                        sum += parseInt(this.len[j]);
                        console.log(sum);
                        this.sum = sum;
                    }
                }
                for (let i = 0; i < this.news.length; i++) {
                    var t = this.news[i].start;
                    // var tt = this.news[i].end;
                    var t1 = t.substr(0, 10);
                    this.news[i].start = t1;
                    var up = this.news[i].end;
                    var up1 = up.substr(0, 10);
                    this.news[i].end = up1;
                }
                for (let i = 0; i < this.discount.length; i++) {
                    var t = this.discount[i].start;
                    var tt = this.discount[i].end;
                    var t1 = t.substr(0, 10);
                    this.discount[i].start = t1;
                    var up = this.discount[i].end;
                    var up1 = up.substr(0, 10);
                    this.discount[i].end = up1;
                }
                console.log(this.news);
                console.log(this.discount);
            },

            fail: () => {},
            complete: () => {}
        });
        uni.request({
        	url: this.url+'discountrecode/',
        	method: 'GET',
        	header: {
        		Authorization: 'JWT' + ' ' + this.global_.token
        	},
        	success: res => {
        		console.log(res)
        		this.couponTip=res.data.data
				if(this.couponTip==0){
					this.flag=true
				}
        	},
        	fail: () => {},
        	complete: () => {}
        });
    },
    methods: {
        changeTab(e) {
            this.tabCurrentIndex = e.target.current;
        },
        tabClick(index) {
            var that = this;
            that.tabCurrentIndex = index;
        },
        transfer(item) {
            uni.request({
                url: this.url + 'discounttransfer/',
                method: 'GET',
                header: {
                    Authorization: 'JWT' + ' ' + this.global_.token
                },
                success: res => {
                    console.log(res);
                    if (res.statusCode == 200) {
                        uni.navigateTo({
                            url: '../coupon-transfer/coupon-transfer?t=' + item
                        });
                    }
                    if (res.statusCode == 400) {
                        uni.showToast({
                            title: '用户未实名认证或未设置资金密码',
                            duration: 3000,
                            icon: 'none'
                        });
                    }
                },
                fail: () => {},
                complete: () => {}
            });
        },
        next: function() {
            this.n = false;
        },
        back: function() {
            this.n = true;
        }
    }

};
</script>

<style>
page {
    background: #121e2c;
}
.navbar {
    display: flex;
    height: 120rpx;
    color: #ffffff;
    position: relative;
    z-index: 10;
    /* border-bottom: 1rpx solid #182A42; */
}
.nav-item {
    /* flex: 1;
	display: flex;
	justify-content: center;
	align-items: center; */
    width: 25%;
    height: 100%;
    font-size: 24rpx;
    color: #ffffff;
    text-align: center;
    line-height: 120rpx;
    position: relative;
}

.current {
    color: #41bec9;
    width: 25%;
}
.current:after {
    content: '';
    width: 66rpx;
    height: 1rpx;
    background: #41bec9;
    position: absolute;
    top: 90rpx;
    left: 56rpx;
}
.coupon {
    width: 704rpx;
    height: 208rpx;
    background: #182a42;
    border-radius: 5rpx;
    margin: 0 auto 26rpx;
}
.discount {
    width: 180rpx;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 208rpx;
    color: #ffffff;
    font-size: 36rpx;
}
.info {
    width: 380rpx;
    height: 100%;
    float: left;
    padding-top: 20rpx;
    box-sizing: border-box;
}
.name {
    font-size: 26rpx;
    color: #ffffff;
    line-height: 60rpx;
}
.name1 {
    font-size: 26rpx;
    color: #ffffff;
    line-height: 50rpx;
}
.time,
.nums,
.require {
    color: #8796aa;
    font-size: 22rpx;
    line-height: 50rpx;
}
.time1,
.nums1,
.require1 {
    color: #8796aa;
    font-size: 22rpx;
    line-height: 40rpx;
}
.use {
    width: 104rpx;
    height: 46rpx;
    float: left;
    background: #41bec9;
    margin-top: 81rpx;
    border-radius: 5rpx;
    color: #ffffff;
    font-size: 22rpx;
    line-height: 46rpx;
    text-align: center;
}
.use1 {
    width: 104rpx;
    height: 46rpx;
    float: left;
    background: rgba(65, 190, 201, 0.5);
    margin-top: 81rpx;
    border-radius: 5rpx;
    color: #ffffff;
    font-size: 22rpx;
    line-height: 46rpx;
    text-align: center;
}
.transfer {
	width: 209rpx;
	height: 148rpx;
	display: block;
	margin: 152rpx auto 35rpx;
}
.nobuys {
	text-align: center;
	color: #8796aa;
	font-size: 26rpx;
}
.tablist {
	height: 107rpx;
	width: 100%;
	display: flex;
	justify-content: space-around;
}
.tablists {
	height: 107rpx;
	width: 100%;
	border-bottom: 1rpx solid #121e2c;
	display: flex;
	justify-content: space-around;
}
.li {
	color: #ffffff;
	font-size: 24rpx;
	line-height: 107rpx;
}
.give{
	width:76rpx;
	height:34rpx;
	border: 1rpx solid #41BEC9;
	border-radius: 5rpx;
	color:#41BEC9;
	font-size: 20rpx;
	margin-top:36rpx;
	line-height: 34rpx;
	text-align: center;
}
</style>
