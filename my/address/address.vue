<template>
	<!-- 提币地址 -->
	<view class="container" style="position: relative;">
		<view v-if="flag">
			<view class="height"></view>
			<uni-nav-bar
				left-icon="back"
				right-text="添加"
				@click-left="back"
				@click-right="add"
				title="提币地址"
				background-color="#121212"
				color="#fff"
				border="false"
				shadow="false"
			></uni-nav-bar>
			<block v-for="item in address_out" :key="item.id">
				<uniSwipeAction :options="options" @click="click(item)">
					<view class="list">
						<view class="left">
							<view class="nickname" :value="nickname">地址昵称: {{ item.wallet_key }}</view>
							<view class="adr" :value="address">提币地址：{{ item.wallet_value }}</view>
						</view>
						<view class="right" @click="edit(item)" :data-item="item"><image class="edit" src="../../static/images/edit.png" mode=""></image></view>
					</view>
				</uniSwipeAction>
			</block>
		</view>

		<view v-else>
			<view class="height"></view>
			<uni-nav-bar left-icon="back" title="提币地址" @click-left="back" background-color="#121212" color="#fff" border="false" shadow="false"></uni-nav-bar>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/address.png" mode=""></image>
				<view class="tips">您还没有提币地址哦！</view>
			</view>
			<view class="newadd" @click="add">新建地址</view>
		</view>
		<!-- #ifndef H5 -->
		<password-input v-if="passIn" @clo="clo" @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->

		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view v-if="passIn" @tap="openKeyBoard('number')" @clo="clo"><password-input :length="length" :gutter="20" :list="numberList"></password-input></view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package ref="number" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
	</view>
</template>
<script src="../../static/js/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
var that;
import { uniSwipeAction } from '../../components/uni-swipe-action/uni-swipe-action.vue';
import { uniNavBar } from '../../components/uni-nav-bar/uni-nav-bar.vue';
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
export default {
	data() {
		return {
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			],
			wallet_value: '',
			wallet_key: '',
			address_out: '',
			flag: false,
			right: '',
			id: '',
			shade: true,
			password: '',
			user_id: '',
			numberList: [],
			length: 6,
			type: 'number',
			passIn: false
		};
	},
	components: {
		uniSwipeAction,
		uniNavBar,
		keyboardPackage,
		passwordInput
	},
	onLoad() {
		that = this;
		uni.request({
			url: this.urll + 'walletaddress/',
			method: 'GET',
			header: {
				Authorization: 'JWT' + ' ' + this.global_.token
			},
			success(res) {
				console.log(res);
				if (res.data.data == '') {
					that.flag = false;
				} else {
					that.flag = true;
				}
				that.address_out = res.data.data;
			}
		});
	},
	methods: {
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
			this.numberList.push(val);
			console.log(this.numberList.join().replace(/,/g, ''));
			this.password = this.numberList.join().replace(/,/g, '');
			if (this.numberList.length >= this.length) {
				this.passIn = false;
				this.$refs['number'].close();
				uni.request({
					url: this.urll + 'updatadeleteaddress/',
					method: 'DELETE',
					data: {
						id: that.id,
						password: that.password
					},
					header: {
						Authorization: 'JWT' + ' ' + this.global_.token
					},
					success(res) {
						
						console.log(res);
						if (res.statusCode == 204) {
							uni.showToast({
								title: '删除成功',
								icon: 'none',
								duration: 2000
							});
						}
						if (res.statusCode == 200) {
							uni.showToast({
								title: '资金密码错误',
								icon: 'none',
								duration: 2000
							});
						}
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					},
                   
				});
			}	

		},
		//点击删除按钮
		click: function(item) {
			var that = this;
			that.id = item.id;
			this.passIn = true;
			this.$refs['number'].open();
			this.onInput(val);
		},
		//点击添加按钮
		add: function() {
			uni.navigateTo({
				url: '../add-address/add-address?flag=' + this.flag,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		//返回 
		back: function() {
			uni.navigateBack({
				delta: 1
			});
		},
		//点击编辑按钮
		edit: function(item) {
			var that = this;
			that.id = item.id;
			that.wallet_key = item.wallet_key;
			that.wallet_value = item.wallet_value;
			that.user_id = item.user_id;
			uni.navigateTo({
				url: '../edit-address/edit-address?id=' + that.id + '&wallet_key=' + that.wallet_key + '&wallet_value=' + that.wallet_value + '&user_id=' + that.user_id,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	}
};

</script>

<style>
.height {
	height: var(--status-bar-height);
	background: #121212;
	z-index: 99;
}

.shade {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
}

.pop {
	width: 70%;
	height: 250rpx;
	margin: 450rpx auto 0;
	background: #fff;
	border-radius: 20rpx;
}

.pop-title {
	text-align: center;
	font-size: 32rpx;
	color: #121212;
	line-height: 150rpx;
}

.pop-bottom {
	width: 100%;
	height: 56rpx;
	display: flex;
	justify-content: space-between;
	/* margin:20rpx auto 0; */
}

.pop-btn {
	width: 126rpx;
	height: 56rpx;
	border-radius: 10rpx;
	background: #121212;
	color: #fff;
	font-size: 30rpx;
	text-align: center;
	line-height: 56rpx;
}

.box {
	height: 200rpx;
}

.none {
	display: block;
	width: 150rpx;
	height: 150rpx;
	margin: 0 auto;
}

.tips {
	margin-top: 50rpx;
	text-align: center;
	color: #797979;
	font-size: 28rpx;
}

.newadd {
	width: 200rpx;
	height: 70rpx;
	background: #03143b;
	border-radius: 50rpx;
	color: #fff;
	text-align: center;
	line-height: 70rpx;
	margin: 80rpx auto;
	font-size: 30rpx;
}

.list {
	width: calc(100% - 48rpx);
	height: 140rpx;
	border-bottom: 1rpx solid #f2f2f2;
	margin-left: 48rpx;
}

.left {
	float: left;
	width: 88%;
}

.right {
	float: left;
	width: 12%;
}

.nickname {
	line-height: 80rpx;
	font-size: 30rpx;
}

.adr {
	line-height: 40rpx;
	font-size: 30rpx;
}

.edit {
	width: 50rpx;
	height: 50rpx;
	margin-top: 45rpx;
}

.delete {
	height: 140rpx;
	line-height: 140rpx;
	position: absolute;
	right: 0;
	width: 0;
	top: 0;
	background: red;
	color: #fff;
	text-align: center;
}
</style>
