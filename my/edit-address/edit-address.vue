<template>
	<!-- 编辑提币地址 -->
	<view class="container" style="position:relative;">
		<view class="line"></view>
		<view class="list">
			<view class="txt">地址昵称</view>
			<input class="enter" type="text" :value="nickname" @input='getRemark' />
		</view>
		
		<view class="line"></view>
		<view class="list">
			<view class="txt">提币地址</view>
			<input class="enter" type="text" :value="address" @input='getAddress'/>
		</view>
		<view class="save"  @click="save">保存</view>
		
		<!-- #ifndef H5 -->
		<password-input v-if='passIn' @tap="openKeyBoard('number')" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->
		
		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view  v-if='passIn' @tap="openKeyBoard('number')">
			<password-input  :length="length" :gutter="20" :list="numberList"></password-input>
		</view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package ref="number" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
		
	</view>
</template>

<script>
	import keyboardPackage from "../../components/keyboard-package/keyboard-package.vue"
	import passwordInput from "../../components/password-input/password-input.vue"
	export default{
		data(){
			return{
				nickname:'',
				address:'',
				password:'123456',
				id:'',
				user_id:'',
				numberList: [],
				length: 6,
				type: 'number',
				passIn:false
			}
		},
		components: {
			keyboardPackage,
			passwordInput
		},
		onLoad(options) {
			this.nickname=options.wallet_key;
			this.address=options.wallet_value;
			this.id=options.id;
			this.user_id=options.user_id;
			console.log(this.id)
			console.log(this.nickname)
			console.log(this.address)
			console.log(this.user_id)
		},
		methods:{
			onInput(val) {
				var that=this;
				that.numberList.push(val);
				console.log(that.numberList.join().replace(/,/g, ""))
				that.password=that.numberList.join().replace(/,/g, "")
				console.log(that.password)
				if (that.numberList.length >= that.length) {
					this.passIn=false
					this.$refs['number'].close()
			        uni.request({
			        	url:this.urll+'updatadeleteaddress/',   //编辑地址接口
			        	method:'PUT',
			        	data:{
			        		wallet_value:that.address,
			        		wallet_key:that.nickname,
			        		id:that.id,
			        		password:that.password,
			        		user_id:that.user_id
			        	},
			        	header:{
			        		Authorization:'JWT'+' '+this.global_.token
			        	},
			        	success(res) {
			        		console.log(res)
			        		if(res.statusCode==202){
			        			uni.showToast({
			        				title:'资金密码错误',
			        				icon:'none',
			        				duration:2000
			        			})
								return false
			        		}
			        		if(res.statusCode==204){
			        			
			        			uni.showToast({
			        				title:'修改成功',
			        				icon:'none',
			        				duration:2000
			        			})
			        			uni.navigateBack({
			        				delta:1
			        			})
			        			var page = getCurrentPages().pop();
			        			if (page == undefined || page == null) return; 
			        			page.onLoad(); 
			        		}
			        	}
			        })
				}
			},
			onDelete() {
				this.numberList.pop();
			},
			onConfirm() {
				uni.showToast({
					title: '完成输入！',
					duration: 2000,
					icon: 'none'
				})
			
			},
			close() {
				this.$refs['number'].close();
			},
			getAddress:function(e){
				this.address=e.detail.value
			},
			getRemark:function(e){
				this.nickname=e.detail.value
			},
			save:function(){
				var that=this;
				
				if(this.address==''){
					uni.showToast({
						title:'请输入提币地址',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.nickname==''){
					uni.showToast({
						title:'请输入地址备注',
						icon:'none',
						duration:2000
					})
					return false
				}
				this.passIn=true
				this.$refs['number'].open();
			    that.onInput(val)
			 
			}
		}
	}
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.line{
		height:80rpx;
	}
	.list{
		width:100%;
		height:120rpx;
		padding-left:48rpx;
		padding-right:48rpx;
		box-sizing: border-box;
		background: #fff;
	}
	.txt{
		width:150rpx;
		float: left;
		line-height: 120rpx;
		font-size:30rpx;
		color:#5E5E5E;
	}
	.enter{
		width:500rpx;
		height:120rpx;
		line-height: 120rpx;
		font-size: 30rpx;
		color:#BCBCBC;
	}
	.save{
		margin: 100rpx auto;
		width:654rpx;
		height:90rpx;
		background: #444343;
		border-radius: 80rpx;
		text-align: center;
		line-height: 90rpx;
		color: #fff;
	}
</style>
