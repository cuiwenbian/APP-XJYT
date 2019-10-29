<template>
	<!-- 提币地址 -->
	<view class="container">
		<view v-if="flag" style="position: relative;">
			<view class="height"></view>
			<uni-nav-bar left-icon="back"  right-text="添加" click-left='back' click-right='add' title="提币地址" background-color="#121212" color='#fff' border='false' shadow='false'></uni-nav-bar>
			<block v-for="(item,index) in address_out" :key='index'>
			<uniSwipeAction :options="options" @click="click" @change="change"  >
				<view class="list">
					<view class="left">
						<view class="nickname" :value='nickname'>地址昵称: {{ item.wallet_value }}</view>
						<view class="adr" :value='address'>地址：{{item.wallet_key }}</view>
					</view>
					<view class="right" @click="edit"><image class="edit" src="../../static/images/edit.png" mode=""></image></view>
				</view>
			</uniSwipeAction>
			</block>
		</view>
		<view v-else>
			<view class="height"></view>
			<uni-nav-bar left-icon="back"   click-left='back'  title="提币地址" background-color="#121212" color='#fff' border='false' shadow='false'></uni-nav-bar>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/address.png" mode=""></image>
				<view class="tips">您还没有提币地址哦！</view>
			</view>
			<view class="newadd" @click="add">新建地址</view>
		</view>
	</view>
</template>
<script src="../../static/js/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jquerymobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
<script>
	import {uniSwipeAction} from "../../components/uni-swipe-action/uni-swipe-action.vue"
	import {uniNavBar} from "../../components/uni-nav-bar/uni-nav-bar.vue"
 export default {
	data() {
		return {
			options:[
			        {
			            text: '删除',
			            style: {
			                backgroundColor: '#dd524d'
			            }
			        }
			 ],
			nickname:'',
			address:'',
			address_out:'',
			flag: true,
			right:''
		};
	},
	components: {uniSwipeAction,uniNavBar},
	onLoad() {
		var that=this;
		uni.request({
			url:this.urll+'walletaddress/',
			method:'GET',
			header:{
				Authorization:'JWT'+' '+this.global_.token
			},
			success(res) {
				console.log(res)
				if(res.data.data==''){
					that.flag=false
				}
				that.address_out=res.data.data
				
				console.log(that.address_out)
				
				
			}
		})
	},
	methods: {
		click:function(e){
			console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
			uni.request({
				url:this.urll+'updatadeleteaddress/',
				method:'DELETE',
				data:{
					
				},
				header:{
					Authorization:'JWT'+' '+this.global_.token
				},
				success(res) {
					console.log(res)
				}
			})
		},
		add: function() {
			uni.navigateTo({
				url: '../add-address/add-address',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		back: function() {
			uni.navigateBack({
				delta:1
			})
		},
		edit: function() {
			console.log(this.nickname)
			console.log(this.address)
			uni.navigateTo({
				url: '../edit-address/edit-address?nickname='+this.nickname+'&address='+this.address,
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		delete:function(){
			uni.showModal({
				title:'提示',
				content:'确定删除该地址',
				confirmText:'确定',
				cancelText:'取消'
			})
		}
	}
};
</script>

<style>
	.height {
		height: var(--status-bar-height);
		background: #121212;
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
