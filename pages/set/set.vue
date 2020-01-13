<template>
	<view>
		<view class="sets">
			<view class="s-1">
				<view class="s-item" @click="personal">
					<view>个人资料</view>
					<image src="../../static/images/jj.png" class="si-right"></image>
				</view>
				<view class="item" @click="mailaddress">
					<view>邮箱绑定</view>
					<image src="../../static/images/jj.png" class="si-right"></image>
				</view>
			</view>
            <view class="s-line"></view>
			<view class="s-1">
				<view class="s-item" @click="authentication">
					<view>实名认证</view>
					<image src="../../static/images/jj.png" class="si-right"></image>
				</view>
				<view class="s-item" @click="loginpassword">
					<view>登录密码</view>
					<image src="../../static/images/jj.png" class="si-right"></image>
				</view>
				<view class="s-item" @click="radepassword">
					<view>交易密码</view>
					<image src="../../static/images/jj.png" class="si-right"></image>
				</view>
				<!-- #ifdef APP-PLUS -->

				<view class="s-item">
					<view>当前版本</view>
					<view>V1.0</view>
				</view>

                 <!-- #endif -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                phone:''
			}
		},
        onLoad() {
            var p=this.global_.phone
            var p1=p.split('')         //字符串转为数组
            var phone=p1.slice(0,3).join().replace(/,/g, "")+'****'+p1.slice(7,11).join().replace(/,/g, "")
            this.phone=phone
        },
		methods: {
			// 跳转路劲
	        personal:function(){
				uni.navigateTo({
					url:'../../my/personal/personal?phone='+this.phone
				})
			},
            mailaddress:function(){
            	uni.request({
            		url:this.url+'linkemail/',
            		method:'GET',
            		header:{
            			Authorization:'JWT'+' '+this.global_.token
            		},
            		success(res) {
            			console.log(res)
            			if(res.statusCode==200||res.statusCode==201){
            				uni.navigateTo({
            					url:'../../my/email/email'
            				})
            			}
            			if(res.statusCode==400){
            				uni.navigateTo({
            					url:'../../my/unbindemail/unbindemail'
            				})
            			}
            		}
            	})
            },
			authentication:function(){
				uni.request({
				  url: this.url + 'realname/',
				  method:'GET',
				  header: {
				   Authorization:'JWT'+' '+this.global_.token
				  },
				  success: function (res) {
					  console.log(res)
					if(res.statusCode==202){
						uni.showToast({
							title:'已实名认证',
							icon:'none',
							duration:2000
						})
						return false
					} 
					if(res.statusCode==205){
						uni.showToast({
							title:'身份认证审核中，请等待',
							icon:'none',
							duration:2000
						})
						return false
					}
					if(res.statusCode==200){
						uni.navigateTo({
							url:'../../my/identity/identity'
						})
					}
				  }
				})
			},
            loginpassword:function(){
            	uni.request({
            		url:this.url+'updataloginpassword/',
            		method:'GET',
            		header:{ 
            			Authorization:'JWT'+' '+this.global_.token
            		},
            		success(res) {
            			if(res.statusCode==400){
            				uni.navigateTo({
            					url:'../../my/change-loginPassword/change-loginPassword'
            				})
            			}
            			if(res.statusCode==200){
            				uni.navigateTo({
            					url:'../../my/change-pass/change-pass'
            				})
            			}
            		}
            	})
            },
            radepassword:function(){
            	var that=this;
            	uni.request({
            		url:this.url+'setmoney/',
            		method:'GET',
            		header:{
            			Authorization:'JWT'+' '+this.global_.token
            		},
            		success(res) {
            			if(res.statusCode==302){
            				uni.showToast({
            					title:'用户未绑定邮箱',
            					icon:'none',
            					duration:2000
            				})
            				return false
            			}
            			if(res.statusCode==400){
            				uni.navigateTo({
            					url:'../../my/change-password/change-password'
            				}) 
            			}
            			if(res.statusCode==200){
            				uni.navigateTo({
            					url:'../../my/trade-password/trade-password'
            				})
            			} 
            		}
            	})
            }
		}
	}
</script>

<style scoped>
	
	.sets {
		font-size: 14px;
	}
	.s-1 {
		padding: 0 30rpx;
	}
	.s-item {
		display: flex;
		justify-content: space-between;
		align-content: center;
		box-sizing: border-box;
		padding: 30rpx 0;
		border-bottom: 1px solid #eee;
	}
    .item{
        display: flex;
        justify-content: space-between;
        align-content: center;
        box-sizing: border-box;
        padding: 30rpx 0;
    }
    .s-line {
    	width: 100%;
    	height: 20rpx;
    	background: #eee;
    }
	.si-right {
		width: 36rpx;
		height: 36rpx;
	}
</style>
