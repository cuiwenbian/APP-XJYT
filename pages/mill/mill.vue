<template>
	<view class="container">
		<view class="height"></view>
		<view class="box1">
			<image src="../../static/images/banner.png" class="banner">
				<view class="colo">矿机交易</view>
				<view class="many">{{ many }}</view>
			</image>
		</view>
		<view class="box2">
			<view class="market">
				<button class="primary" @click="pay">买单</button>
				<button class="primary1" @click="sale">卖单</button>
			</view>
		</view>
		<view class="box3">
			<view class="kcs">可出售</view>
			<button class="btn" @click="btn2">出售</button>
		</view>
		<view v-if="flag">
			<image class="transfer" src="../../static/images/add.png" mode=""></image>
			<view class="infoo">没有可售矿机</view>
		</view>
		<block v-else>
			<checkbox-group class="block" @change="CheckboxChange">
				<view v-for="(item, index) in user_id" :key="index">
					<view class="cu-form-group margin-top">
						<checkbox class="tee" :class="item.checked ? 'checked' : ''" :checked="item.checked ? true : false" :value="item.number"></checkbox>
						<view class="pagex">
							<view class="page1">
								<view class="img"><image class="por" src="../../static/images/kuangji.png"></image></view>
								<view class="info">
									<view class="obg">{{ item.name }} {{ item.number }}</view>
									<view class="obg_one">
										<text class="days">已运行{{ item.data }}天</text>
										| 剩余{{ item.usedata }}天
									</view>

									<view class="obg_one">
										<text class="days">储存{{ item.freedisk }}T</text>
										| 总容量{{ item.disk }}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</checkbox-group>
		</block>
        <view class="shade" v-if="shade">
          	<view class="pop">
          		<view class='pop-title'>{{lerst}}</view>
          		<view class="pops">
          			<view class='pop-btn' @click="cancel">{{cancl}}</view>
          			<view class='pop-bn' @click="sure">{{greed}}</view>
          		</view>
          	</view>
          </view>
          <view class="shade" v-if="shade1">
            	<view class="pop">
            		<view class='pop-title'>实名认证审核中,请耐心等待...</view>
            		<view class="pops">
            			<view class='pop-bbt' @click="sure">确定</view>
            		</view>
            	</view>
            </view>
	</view>
</template>
 
<script>
export default {
	data() {
		return {
			many: '0',
			user_id: [],
			flag: false,
            greed:'去阅读',
            cancl:'取消',
            lerst:'若不阅读和同意协议,无法使用此功能',
			selectilall: false,
            deoor:false,
            stus:'',
            shade:false,
            shade1:false,
			machine_id: '',
			lo: false,
			arr: [],
			isSelected: false,
			checkbox: [
				{
					value: 'A',
					checked: false
				}
			]
		};
	},

	onShow(options) {
		var that = this;
		uni.request({
			url: this.url + 'mainmachine/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				console.log(res);
				that.user_id = res.data.data;
				if (res.statusCode == 205) {
					that.flag = true;
				}
                that.many = res.data.data.length;
                console.log(that.many)
                if (that.many == 0) {
                	that.flag = true;
                } else {
                	that.flag = false;
                }
			}
		});
	},
    onHide() {
          this.shade=false
        },
	methods: {
		pay: function() {
			uni.navigateTo({
				url: '../../mill/pay/pay'
			});
		},
		sale: function() {
			uni.navigateTo({
				url: '../../mill/sale/sale'
			});
		},
		// 点击选中矿机
		CheckboxChange(e) {
			var that = this;
			that.arr = [];
			for (let i = 0; i < that.user_id.length; i++) {
				that.user_id.checked = false;
			}
			var items = that.user_id;
			var values = e.detail.value;
			for (var i = 0, lenI = items.length; i < lenI; ++i) {
				items.checked = true;
				for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
					if (items[i].number == values[j]) {
						items.checked = true;
						that.arr.push(items[i].machine_id);
						break;
					}
				}
			}
		},
        
		btn2: function() {
			var that = this;
			var a = that.arr.join(',');
			console.log(a);
			uni.request({
				url: this.url + 'buildorders/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				data: {
					machine_id_list: a
				},
				success(res) {

					console.log(res)
                    console.log(that.shade)
                    if(res.statusCode == 410) {
                        that.shade = true
                        that.stus = res.statusCode
                    } else
                        if (that.arr.length == 0) {
                    	uni.showToast({
                    		title: '请选择矿机',
                    		icon: 'none'
                    	});
                        return false
                    }

					if (res.statusCode == 401) {
                        that.stus = res.statusCode
                        that.lerst = '未进行实名认证'
                        that.greed = '去验证'
                        that.shade = true
						return false
					}
					if (res.statusCode == 302) {
                        that.stus = res.statusCode
                        that.shade1 = true
						return false
					}
					if (res.statusCode == 400) {
                        that.stus = res.statusCode
                        that.lerst = '未设置交易密码'
                        that.greed = '去设置'
                        that.shade = true
						return false
					}
					if (res.statusCode == 200) {
                        var asr = JSON.stringify(res.data.data);
						uni.navigateTo({
							url: '../../mill/sell/sell?tar=' + asr
						});
					}
				}
			});
		},
        sure:function(){
            if(this.stus == 400) {
             	uni.switchTab({
                	url: '../my/my'
                });
            }
            if(this.stus == 410) {
                uni.navigateTo({
                    url:'../agreement/agreement'
                })
            }
            if(this.stus == 401) {
                uni.navigateTo({
                	url: '../../my/identity/identity'
                });
            }
            if(this.stus == 302) {
                this.shade1 = false
            }
        },
        cancel:function(){
           this.shade = false
        },
	}
};
</script>

<style>
@import url('../../common/icon.css');
	.shade{
		width:100%;
		height:100%;
		background:rgba(0,0,0,0.4);
		position: fixed;
		left:0;
		top:0;
		z-index:99
	}
	.pop{
		width:550rpx;
		height:300rpx;
		margin:500rpx auto;
		padding:0 60rpx;
		box-sizing: border-box;
		background:#fff;
		border-radius:10rpx;
	}
	.pop-title{
		height:180rpx;
		line-height: 180rpx;
		text-align: center;
		font-size: 26rpx;
	}
	.pops{
		height:100rpx;
		width:100%;
		display: flex;
		justify-content: space-between;
	}
	.pop-btn{
		width:158rpx;
		height:66rpx;
		border-radius: 5rpx;
		line-height: 66rpx;
		font-size: 30rpx;
		color:#797979;
		text-align: center;
	}
    .pop-bn{
        width:158rpx;
        height:66rpx;
        border-radius: 10rpx;
        line-height: 66rpx;
        font-size: 28rpx;
        color: #FFFFFF;
        background-color: #000000;
        text-align: center;
    }
    .pop-bbt{
        width:158rpx;
        height:66rpx;
        border-radius: 10rpx;
        line-height: 66rpx;
        font-size: 28rpx;
        color: #FFFFFF;
        background-color: #000000;
        text-align: center;
        margin:0 auto;
    }
        
.height {
	height: var(--status-bar-height);
	background-color: #121212;
}
.box1 {
	height: 330rpx;
}
.banner {
	height: 330rpx;
	position: relative;
	width: 100%;
}
.colo {
	position: absolute;
	top: 103rpx;
	color: #ffffff;
	font-size: 30rpx;
	padding-left: 320rpx;
	box-sizing: border-box;
}
.many {
    width: 100%;
	position: absolute;
	top: 140rpx;
	box-sizing: border-box;
	padding-top: 40rpx;
    text-align: center;
	font-size: 48rpx;
	color: #dfaf72;
}
.box2 {
	height: 200rpx;
	width: 100%;
}
.market {
	width: 100%;
}
.transfer {
	width: 170rpx;
	height: 111rpx;
	display: block;
	margin: 150rpx auto 20rpx;
}
.infoo {
	margin-left: 10rpx;
	text-align: center;
	color: #999999;
	font-size: 26rpx;
}
.te {
	display: block;
	float: right;
	margin-top: -4rpx;
	width: 40rpx;
	height: 40rpx;
	margin-right: 28rpx;
}
.tee {
	float: right;
	margin-top: 60rpx;
	width: 40rpx;
	height: 40rpx;
	margin-right: 90rpx;
}
.primary {
	width: 260rpx;
	height: 78rpx;
	text-align: center;
	color: #757575;
	background-color: #f9f9f9;
	float: left;
	font-size: 30rpx;
	margin-left: 48rpx;
	margin-top: 60rpx;
}
.primary1 {
	width: 260rpx;
	height: 78rpx;
	font-size: 30rpx;
	text-align: center;
	float: right;
	margin-right: 48rpx;
	margin-top: 60rpx;
	background: linear-gradient(0deg, rgba(16, 14, 19, 1), rgba(2, 21, 28, 1));
	color: #f0f0f0;
}
.box3 {
	width: 100%;
	height: 92rpx;
	background-color: #f6f6f6;
}
.kcs {
	width: 90rpx;
	line-height: 92rpx;
	float: left;
	font-size: 26rpx;
	margin-left: 46rpx;
	color: #b38701;
	border-bottom: 1rpx solid #dcb16e;
}
.btn {
	float: right;
	color: #333333;
	margin-right: 48rpx;
	margin-top: 16rpx;
	text-align: center;
	width: 140rpx;
	height: 60rpx;
	font-size: 24rpx;
}
.pagex {
	width: 100%;
	display: block;
}
.page1 {
	height: 180rpx;
	padding-right: 40rpx;
	padding-bottom: 20rpx;
}
.img {
	width: 20%;
}
.molis {
	float: right;
	margin-bottom: 60rpx;
}
.por {
	float: left;
	width: 145rpx;
	height: 126rpx;
	margin-top: 20rpx;
	margin-left: 48rpx;
}
.info {
	width: 50%;
	height: 100%;
	margin-left: 20rpx;
	float: left;
}
.obg {
	margin-top: 20rpx;
	font-size: 30rpx;
}
.days {
	color: #5ca614;
}
.obg_one {
	margin-top: 10rpx;
	font-size: 24rpx;
}
</style>
