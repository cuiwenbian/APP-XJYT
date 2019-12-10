<template>
	<!-- 转账 -->
	<view class="container">
		<view class="t"></view>
		<view class="box">
			<view class="desc">当前可转</view>
			<view class="num"><text class="number">{{bar}}</text >个</view>
		</view>
		<view class="t"></view>
		<view class="box1">
			<view class="top">
				<view class="lab">转账地址</view>
				<input class="address" type="text" @input='getTranferAdd' :value='wallet_value' placeholder="请输入转账地址" placeholder-style="color:#999999">
				<view class="right" @click="link">
					<image  class="in" src="../../static/images/jiantou3.png" ></image>
				</view>
			</view>
			<view class="top1">
				<view class="lab">提币数量</view>
				<input class="address" type="text" @input='getFilNum' v-model="fil_num" placeholder="请输入提币数量" placeholder-style="color:#999999">
				<view class="all" @click="fusre">全部</view>
			</view>
		</view>
		<view class="tip">
			手续费：{{fil_num * fee}}
		</view>
		<view class="next"  @click="save">提交</view>
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

<script>
	import keyboardPackage from '../../components/keyboard-package/keyboard-package.vue';
	import passwordInput from '../../components/password-input/password-input.vue';
    export default {
        data() {
            return {
                bar:'',
                moder:'',
				fee:'',
				fil_num:'',
				password:'',
				numberList: [],
				length: 6,
				type: 'number',
				passIn: false,
				wallet_value:''
            }
        },
		components: {
			keyboardPackage,
			passwordInput
		},
        onLoad(res) {
			this.bar = res.bar
			this.fee=res.fee
			this.wallet_value=res.wallet_value
        },
        onBackPress(option){
            plus.key.hideSoftKeybord()          
        },
        methods:{
			getFilNum:function(e){
				this.fil_num=e.detail.value
			},
			getTranferAdd:function(e){
				this.wallet_value=e.detail.value
			},
            link() {
				var that=this;
				uni.request({
					url:this.url+'walletaddress/',
					method:'GET',
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						if(res.statusCode==400){
							uni.showToast({
								title:'用户未实名认证',
								icon:'none',
								duration:2000
							})
						}
						if(res.statusCode==201){
							uni.showToast({
								title:'身份认证审核中，请等待',
								icon:'none',
								duration:2000
							})
						}
						if(res.statusCode==200){
							uni.navigateTo({
								url:'../choose-address/choose-address?bar='+that.bar+'&fee='+that.fee
							})
						}
						if(res.statusCode==302){
							uni.showToast({
								title:'用户未设置资金密码',
								icon:'none',
								duration:2000
							})
						}
					}
				})
            },
            fusre(){
                this.fil_num = this.bar
            },
			clo: function() {
				this.passIn = false;
				this.$refs['number'].close();
				this.numberList.length=0;
			},
			onChange(e){
				if(e.show==false){
					this.passIn = false;
				}
				this.numberList.length= 0;   
			},
			onDelete() {
				this.numberList.pop();
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
						url:that.url+'assets/capitalcode/',
						method:"POST",
						data:{
							capital_code:that.password
						},
						header:{
							Authorization:'JWT'+' '+that.global_.token
						},
						success(res) {
							if(res.statusCode==400){
                                that.numberList.pop();
								that.numberList.length = 0;
								that.$refs.wrong.flag=false;
								var n=res.data.data.err_num;
								var s=5-n;
								that.$refs.wrong.tip='剩余'+ s +'次机会';
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
							if(res.statusCode==201){
								that.passIn = false;
								that.$refs['number'].close();
								uni.redirectTo({
									url:'../commit/commit?fil_num='+that.fil_num+'&wallet_value='+that.wallet_value
								})
							}
							var page = getCurrentPages().pop();
							if (page == undefined || page == null) return; 
							page.onLoad();
					    }
					})
					this.numberList.length=0;
				}
			},
			save:function(){
				var that=this;
				var b=parseFloat(that.bar)
				var f=parseFloat(that.fil_num)
				if(that.wallet_value==''){
					uni.showToast({
						title:'转账地址不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(that.fil_num==''){
					uni.showToast({
						title:'提币数量不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(that.fil_num<0.001){
					uni.showToast({
						title:'提币数量无效',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(f > b){
					uni.showToast({
						title:'提币数量余额不足',
						icon:'none',
						duration:2000
					})
					return false
				}
				uni.request({
					url:that.url+'assets/transfer/',
					method:"POST",
					data:{
						fil_num:that.fil_num,
						address:that.wallet_value
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						if(res.statusCode==411){
							uni.showToast({
								title:'未进行实名认证',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==412){
							uni.showToast({
								title:'实名认证中，请耐心等待',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==403){
							uni.showToast({
								title:'资金密码未设置',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==400){
							uni.showToast({
								title:'输入信息有误(提币地址最少32位)',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==423){
							uni.showToast({
								title:'交易密码已锁定,请在今日24:00后进行交易',
								icon:'none',
								duration:2000
							})
							return false
						}
						if(res.statusCode==200){
							that.passIn = true;
							that.$refs['number'].open();
							that.onInput(val);
						}
					}
				})
			}
        }
    }
</script>

<style>
	.success{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: #fff;
		z-index:99;
	}
	.duigou{
		display: block;
		width:90rpx;
		height:90rpx;
		margin:150rpx auto 30rpx;
	}
	.tran{
		text-align: center;
		line-height: 80rpx;
		font-size: 34rpx;
		color:#212121;
	}
	.btn{
		width:150rpx;
		height:60rpx;
		font-size: 30rpx;
		text-align: center;
		line-height: 60rpx;
		border-radius: 20rpx;
		color:#fff;
		background: #212121;
		margin:30rpx auto;
	}
	page{
		background: #EDEEEE;
	}
	.t{
		height:20rpx;
	}
	.box{
		width:654rpx;
		height:292rpx;
		margin:0 auto;
		background: #fff;
		border-radius: 12rpx;
		text-align: center;
		padding: 50rpx;
		box-sizing: border-box;
	}
	.box1{
		width:654rpx;
		height:292rpx;
		margin:0 auto;
		background: #fff;
		border-radius: 12rpx;
	}
	.desc{
		font-size: 30rpx;
		line-height: 80rpx;
		color:#5B5B5B;
	}
	.num{
		font-size:30rpx;
		color:#5B5B5B;
	}
	.number{
		font-size:50rpx;
		color:#DFAF72;
		font-weight:bold;
	}
	.top{
		height:147rpx;
		border-bottom: 1px solid #F2F2F2;
	}
	.lab{
		float: left;
		margin-left:48rpx;
		line-height: 147rpx;
		font-size: 26rpx;
		color:#333333;
	}
	.address{
		float: left;
		width:350rpx;
		height:147rpx;
		margin-left:20rpx;
		font-size: 26rpx;
	}
	.right{
		float: right;
		width:100rpx;
		height:100%;
		
	}
	.in{
		width:15rpx;
		height:20rpx;
		margin-top: 65rpx;
		margin-left: 50rpx;
	}
	.all{
		float:right;
		line-height: 147rpx;
		margin-right:24rpx;
		color:#EBC9A0;
		font-size: 26rpx;
	}
	.tip{
		margin-top:20rpx;
		margin-left:48rpx;
		line-height: 50rpx;
		font-size:24rpx;
		color:#797979;
	}
	.next{
		margin: 100rpx auto;
		width:690rpx;
		height:88rpx;
		background: #0A1117;
		border-radius:5px;
		text-align: center;
		line-height: 88rpx;
		color: #fff;
		font-size: 30rpx;
	}
</style>
