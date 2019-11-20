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
		<password-input v-if='passIn' @tap="openKeyBoard('number')"  @clo="clo" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->
		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view  v-if='passIn' @tap="openKeyBoard('number')" @clo="clo">
			<password-input  :length="length" :gutter="20" :list="numberList"></password-input>
		</view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package ref="number" @onInput="onInput" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
	    
		
		<!-- #ifndef H5 -->
		<password-input v-if='delShow' @tap="openKeyBoard('number')"  @clo="cloo" :length="length" :gutter="20" :list="numberList"></password-input>
		<!-- #endif -->
		<!-- H5 openKeyBoard 点击事件失效，需要在外侧包裹一层view外衣 -->
		<!-- #ifdef H5 -->
		<view  v-if='delShow' @tap="openKeyBoard('number')" @clo="cloo">
			<password-input  :length="length" :gutter="20" :list="numberList"></password-input>
		</view>
		<!-- #endif -->
		<!-- 数字键盘 -->
		<keyboard-package ref="numbers" @onInput="onInput1" @onDelete="onDelete" @onConfirm="onConfirm" :disableDot="true" />
			  
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
				password:'',
				id:'',
				user_id:'',
				numberList: [],
				length: 6,
				type: 'number',
				passIn:false,
				delShow:false
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
		},
        onBackPress(option){
              plus.key.hideSoftKeybord()    
            },
		methods:{
			//返回 
			back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			clo: function() {
				this.passIn = false;
				this.$refs['number'].close();
				this.numberList.length= 0;
			},
			cloo: function() {
				this.delShow = false;
				this.$refs['number'].close();
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
				if(this.address==''){ 
					uni.showToast({
						title:'请输入提币地址',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.address.length<=32){
					uni.showToast({
						title:'提币地址最少32位',
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
			    this.onInput(val)
			 
			},
			onInput(val) {
				console.log('input edit')
				var that=this;
				that.numberList.push(val);
				console.log(that.numberList.join().replace(/,/g, ""))
				that.password=that.numberList.join().replace(/,/g, "")
				console.log(that.password)
				if (that.numberList.length >= that.length) {
					this.passIn=false
					this.$refs['number'].close()
			        uni.request({
			        	url:this.url+'updatadeleteaddress/',   //编辑地址接口
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
								uni.navigateBack({
									delta:1
								})
			        			uni.showToast({
			        				title:'修改成功',
			        				icon:'none',
			        				duration:1500
			        			})
			        			var page = getCurrentPages().pop();
			        			if (page == undefined || page == null) return; 
			        			page.onLoad();
			        		}
			        	}
			        })
				}
			},
			//点击删除按钮
			onNavigationBarButtonTap: function() {
				var that = this;
				this.delShow = true;
				this.$refs['numbers'].open();
				this.onInput1(val);
			},
			onInput1(val) {
				console.log("input delete")
				this.numberList.push(val);
				console.log(this.numberList.join().replace(/,/g, ''));
				this.password = this.numberList.join().replace(/,/g, '');
				if (this.numberList.length >= this.length) {
					this.passIn = false;
					this.$refs['number'].close();
					uni.request({
						url: this.url + 'updatadeleteaddress/', //删除地址接口
						method: 'DELETE',
						data: {
							id: this.id,
							password: this.password
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
								uni.navigateBack({
									delta:1
								})
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
					this.numberList.length= 0;
				}	
			
			},
			
		}
	}
</script>

<style>
	page{
		background: #EDEEEE;
	}
	.height {
		height: var(--status-bar-height);
		background: #121212;
		z-index: 99;
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
		color:#333;
	}
	.save{
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
