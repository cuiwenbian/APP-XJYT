<template>
	<!-- 我的地址 -->
	<view class="container" style="position: relative;">
		<view v-if="flag">
			<!-- #ifdef APP-PLUS -->
			<uni-nav-bar left-icon="back"  title="我的地址" :fixed="true" :status-bar="true" right-text="添加" @click-left="back" @click-right='add_address' background-color="#FAFBFC" color="#000000" ></uni-nav-bar>
			<!-- #endif -->
			<block v-for="item in address_out" :key="item.id">
				<uniSwipeAction :options="options" @click="click(item)">
					<view class="list">
						<view class="left">
							<view class='nickTitle'>地址昵称:</view><view class="nickname" :value="nickname">{{ item.wallet_key }}</view>
							<view class='addTitle'>我的地址:</view><view class="adr" :value="address">{{ item.wallet_value }}</view>
						</view>
						<view class="right" @click="edit(item)" :data-item="item"><image class="edit" src="../../static/images/edit.png" mode=""></image></view>
					</view>
				</uniSwipeAction>
			</block>
			<!-- #ifdef MP-WEIXIN -->
			<view class="newadd" @click="add_address">新建地址</view>
			<!-- #endif -->
		</view>
		<view v-else>
			<!-- #ifdef APP-PLUS -->
			<uni-nav-bar left-icon="back" title="我的地址" :fixed="true" :status-bar="true"  @click-left="back" background-color="#FAFBFC" color="#000000" ></uni-nav-bar>
			<!-- #endif -->
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/no-add.png" mode=""></image>
				<view class="tips">您还没有我的地址哦！</view>
			</view>
			<view class="newadd" @click="add_address">新建地址</view>
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
	</view>
</template>
<script src="../../static/js/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
import uniSwipeAction from '../../components/uni-swipe-action/uni-swipe-action.vue';
import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
import passwordInput from '../../components/password-input/password-input.vue';
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import { debounce } from '@/common/utils.js';
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
			flag: true,
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
		keyboardPackage,
		passwordInput,
		uniNavBar
	},
	onLoad() {
		this.getData()
	},
	onShow() {
		this.getData()
	},
	methods: {
		getData(){
			var that = this;
			uni.request({
				url: this.url + 'walletaddresss/',
				method: 'GET',
				header: {
					Authorization: 'JWT' + ' ' + this.global_.token
				},
				success(res) {
					if (res.data.data == '') {
						that.flag = false;
					} else {
						that.flag = true;
					}
					that.address_out = res.data.data;
				}
			});
		},
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
					url: that.url + 'updatadeleteaddresss/',
					method: 'DELETE',
					data: {
						id: that.id,
						password: that.password
					},
					header: {
						Authorization: 'JWT' + ' ' + that.global_.token
					},
					success(res) {
						if (res.statusCode == 204) {
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title: '删除成功',
								icon: 'none',
								duration: 2000
							});
							
						}
						if(res.statusCode==400){
							that.$refs.wrong.flag=false;
							var n=res.data.data.err_num;
							var s=5-n;
							that.$refs.wrong.tip='密码错误，剩余'+ s +'次机会';
						}
						if(res.statusCode==423){
							that.passIn = false;
							that.$refs['number'].close();
							uni.showToast({
								title:'交易密码已锁定,请在今日24:00后进行交易',
								icon:'none',
								duration:2000
							})
						}
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
						page.onLoad();
					},
				});
				this.numberList.length = 0;
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
		linkToTransfer: debounce(function(){
			uni.navigateTo({
				url: '../add-address/add-address?flag=' + this.flag,
			});
		},500, true),
		add_address: function() {
			this.linkToTransfer()
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
				
			});
		}
	}
};

</script>

<style>
.height {
		height: var(--status-bar-height);
		background-color: #121212;
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
	color: #8a8a8a;
	font-size: 28rpx;
}
.newadd {
	width: 200rpx;
	height: 70rpx;
	background-image: linear-gradient(to right, #01c774, #01dda9);
	border-radius: 50rpx;
	color: #fff;
	text-align: center;
	line-height: 70rpx;
	margin: 80rpx auto;
	font-size: 30rpx;
}
.list {
	width: calc(100% - 48rpx);
	height: auto;
	overflow: hidden;
	border-bottom: 1rpx solid #f2f2f2;
	margin-left: 48rpx;
}
.left {
	float: left;
	width: 85%;
}
.nickTitle{
	float:left;
	width:25%;
	line-height: 60rpx;
	font-size: 30rpx;
	color:#8f8e8e;
}
.nickname {
	float:right;
	width:75%;
	line-height: 60rpx;
	font-size: 30rpx;
	word-break:break-all;
	word-wrap:break-word;
	color:#363636;
}
.addTitle{
	float:left;
	width:25%;
	line-height: 60rpx;
	font-size: 30rpx;
	color:#8f8e8e;
}
.adr {
	float:right;
	width:75%;
	line-height: 60rpx;
	font-size: 30rpx;
	word-break:break-all;
	word-wrap:break-word;
	color:#363636;
}
.right {
	float: left;
	width: 15%;
}
.edit {
	width: 50rpx;
	height: 50rpx;
	margin-top: 50rpx;
	margin-left: 20rpx;
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
