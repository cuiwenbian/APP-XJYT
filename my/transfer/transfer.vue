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
				<input class="address" type="text" @input='getTranferAdd' :value='wallet_value' placeholder="请输入转账地址" placeholder-style="color:#DADADA">
				<image class="right" src="../../static/images/jiantou3.png"  @click="link"></image>
			</view>
			<view class="top1">
				<view class="lab">提币数量</view>
				<input class="address" type="text" @input='getFilNum' v-model="moder" placeholder="请输入提币数量" placeholder-style="color:#DADADA">
				<view class="all" @click="fusre">全部</view>
			</view>
		</view>
		<view class="tip">
			手续费：{{fil_num * fee}}
		</view>
		<view class="next"  @click="save">提交</view>
		<!-- <view class="success" v-if='success'>
			<image class='duigou' src="../../static/images/success.png" mode=""></image>
			<view class='tran'>转账成功</view>
			<view class='btn' @click='over'>完成</view>
		</view> -->
		
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
				// success:false,
				wallet_value:''
            }
        },
		components: {
			keyboardPackage,
			passwordInput
		},
        onLoad(res) {
            var that = this
            console.log(res)
			that.bar = res.bar
			that.fee=res.fee
			that.wallet_value=res.wallet_value
			console.log(that.wallet_value)
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
                uni.navigateTo({
                    url:'../choose-address/choose-address?bar='+this.bar+'&fee='+this.fee
                })
            },
            fusre(){
                this.moder = this.bar
            },
			clo: function() {
				this.passIn = false;
				this.$refs['number'].close();
				this.numberList.length=0;
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
			over:function(){
				uni.reLaunch({
					url:'../my-wallet/my-wallet'
				})
			},
			onInput(val) {
				var that=this;
				this.numberList.push(val);
				this.password = this.numberList.join().replace(/,/g, '');
				if (this.numberList.length >= this.length) {
					this.passIn = false;
					this.$refs['number'].close();
					uni.request({
						url:this.url+'assets/capitalcode/',
						method:"POST",
						data:{
							capital_code:this.password
						},
						header:{
							Authorization:'JWT'+' '+this.global_.token
						},
						success(res) {
							console.log(res)
							
							if(res.statusCode==400){
								var n=res.data.data.err_num;
								console.log(n)
								var s=5-n;
								console.log('剩余'+ s +'次机会')
								uni.showToast({
									title:'交易密码错误,剩余'+ s +'次机会',
									icon:'none',
									duration:2000
								})
							}
							if(res.statusCode==423){
								uni.showToast({
									title:'交易密码已锁定,请在今日24:00后进行交易',
									icon:'none',
									duration:2000
								})
							}
							if(res.statusCode==201){
								uni.navigateBack({
									delta:2
								})
								var page = getCurrentPages().pop();
								if (page == undefined || page == null) return; 
								page.onLoad(); 
							}
							
					    }
					})
					this.numberList.length=0;
				}
			},
			save:function(){
				var that=this;
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
						title:'请输入正确的金额',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(that.fil_num > that.bar){
					uni.showToast({
						title:'提币数量余额不足',
						icon:'none',
						duration:2000
					})
					return false
				}
				console.log(that.fil_num)
				console.log(that.wallet_value)
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
						console.log(res)
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
	}
	.num{
		font-size:30rpx;
		color:#555555;
	}
	.number{
		font-size:56rpx;
		color:#E4BF8C;
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
		color:#9F9F9F;
	}
	.address{
		float: left;
		width:300rpx;
		height:147rpx;
		margin-left:20rpx;
		font-size: 26rpx;
	}
	.right{
		float: right;
		width:25rpx;
		height:30rpx;
		/* background: red; */
		margin-top:58rpx;
		margin-right:24rpx;
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
		width:654rpx;
		height:90rpx;
		background: #0A1117;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
