<template>
	<view class="container" ref='hiddenmodalput'>
	<view class="boxx" v-if="hiddenmodalput">
		<image class="close" src="../../static/images/close.png" @tap='close'></image>
		<view :class="flag?'tip':'tip1'">
		  <image class="lock" src="../../static/images/lock.png"></image>
		  {{tip}}
		</view>
		<view class="forget" @tap="forget">忘记密码？</view>
		<view  :class="['item',list.length===index?'fakecursor':'']" v-for="(item,index) in length" :key="item" >
			<view :class="['circle',(index<list.length)?'dot':'']" ></view>
		</view>
	</view>
	</view>
</template>

<script>
	import keyboardPackage from "../keyboard-package/keyboard-package.vue"
	export default {
		props:{
			length:{//长度只允许为6和4
				type:Number,
				default:6,
				validator(val){
					if(val!==6 && val !==4){
						return false;
					}
					return true;
				}
			},
			gutter:{
				type:Number,
				default:0
			},
			list:{
				type:Array,
				default:function(){
					return [];
				}
			}
		},
		data() {
			return {
				flag:true,
				hiddenmodalput:true
			};
		},
		computed:{
			keyboardPackage
		},
		methods:{
			
			// close: function() {
			//    this.hiddenmodalput= false
			// },
			forget: function() {
			  var that = this;
			  uni.redirectTo({
			    url: '../../pages/getBackPassword/getBackPassword'
			  })
			},
			formatMargin(gutter){
				return 0 + ' ' + 300+'rpx';
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		margin:0;
	}
	.boxx {
	  width: 600rpx;
	  height: 380rpx;
	  background: #F5F5F5;
	  border-radius: 20rpx;
	  padding: 20rpx 50rpx 0;
	  box-sizing: border-box;
	  position: fixed;
	  bottom:550rpx;
	  left: 75rpx;
	  z-index:999;
	}
	.tip {
	  width: 70%;
	  margin: auto;
	  text-align: center;
	  height: 50rpx;
	  font-size: 30rpx;
	  line-height: 50rpx;
	  margin: 80rpx auto 20rpx;
	}
	.tip1 {
	  width: 70%;
	  margin: auto;
	  height: 50rpx;
	  font-size: 30rpx;
	  text-align: center;
	  line-height: 50rpx;
	  color: red;
	   margin: 80rpx auto 20rpx;
	}
	.close {
	  width: 40rpx;
	  height: 40rpx;
	  position: absolute;
	  top: 25rpx;
	  left: 20rpx;
	}
	.lock {
	  width: 40rpx;
	  height: 40rpx;
	  display: block;
	  float: left;
	}
	
	.forget {
	  color:#30bcd5;
	  font-size: 24rpx;
	  position: absolute;
	  right: 50rpx;
	  bottom: 30rpx;
	}
    .item{
    	width:78rpx;
    	height:78rpx;
    	background: #fff;
    	float:left;
    	border: 1px solid #F5F5F5;
		margin:0;
        position: relative;
    	// background-color: #FFFFFF;
    	// height: 70rpx;
    	// width:70rpx;
    	// float: left;
    	// flex-grow: 1;
    	// flex-shrink: 0;
    	//border: 1px solid #4CAF50;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    	.circle{
    		width: 5rpx;
    		height: 5rpx;
    		border-radius: 50%;
    		padding:5rpx;
    		background-color: #fff;
    		&.dot{
    			background-color: #000;
    		}
    	}
    }
	.fakecursor::after {
		content: '';
		display: block;
		width: 1px;
		height: 32rpx;
		animation: blink 1s infinite steps(1, start);
		position: absolute;
		left: 50%;
		top: 50%;
		margin-top: -16rpx;
	}
	@keyframes blink {
		0% {
			background-color: white;
		}

		50% {
			background-color: black;
		}

		100% {
			background-color: white;
		}
	}
</style>
