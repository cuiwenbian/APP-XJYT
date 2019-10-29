<template>
	<!-- 建议反馈 -->
	<view class="container" style="position: relative;">
		<view v-if='flag' >
			<view class='t'></view>
			<view class="suggest-list" style='line-height: 280rpx;font-size: 30rpx;'>
				请耐心等待平台回复...
			</view>
			<view class='t'></view>
			<view class="suggest-list" >
				<view class='top' style='height:20rpx;'></view>
				<view style="width:calc(100% - 96rpx);">
					<view class='tit' style='width:150rpx;line-height: 60rpx;color:#DCB16E'>平台回复：</view>
					<view class='answer1'>平台回复平台回复平台回复平台回复平台回复平台回复平
					台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复平台回复
					</view>
				</view>
				<view class="submit-time">xxxx-xx-xx xx:xx</view>
			</view>
			<view class='t'></view>
			<view class="suggest-list">
				<view class='time'>
					   <view class="submit-time">提交时间：xxxx-xx-xx xx:xx</view>
					   <view class='status'>已回复</view>
				</view>
				<view class="question">
					<view class='tit'>标题：</view>
					<view class='answer'>闪退怎么回事</view>
				</view>
				<view class="question">
					<view class='tit'>描述：</view>
					<view class='answer'>描述描述描述描述描述描述描述描述描述描述描述描述</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/machine.png" mode=""></image>
				<view class="tips">
					您还没有提交反馈！
				</view>
			</view>
			<view class="newadd" @click="addMessage">
				提交建议
			</view>
			<view  :class="hidden?'cover1':'cover'">
				<view class="frame">
					<input class="title" type="text" :value="title" @input='getTitleContent' placeholder="标题"/>
					<textarea class="area" :value="desc" @input='getDescContent' placeholder="问题描述"/>
					<view class="submit" @click='submit'>提交</view>
					<image class="close" src="../../static/images/close.png" mode="" @click="close"></image>
				</view>
			</view>
		</view>
		<view class="shade" v-show="shade">
			<view class="pop">
				<view class='pop-title'>用户身份未认证</view>
				<view class='pop-btn' @click='identity'>去认证</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
		  return{
			  flag:true,
			  hidden:true,
			  title:'',
			  desc:'',
			  shade:false
		  }	
		},
		onLoad() {
			var _this=this;
			uni.request({
				url:this.urll+'advicefeedback/',
				method:'GET',
				data:{
					title:this.title,
					message:this.desc
				},
				header:{
					Authorization:'JWT'+' '+this.global_.token
				},
				success(res) {
					console.log(res)
					if(res.data.data==''){
						_this.flag=false
					}else{
						_this.flag=true
					}
					
				}
			})
		},
		methods:{
			getTitleContent:function(e){
				this.title=e.detail.value
				console.log(this.title)
			},
			getDescContent:function(e){
				this.desc=e.detail.value
				console.log(this.desc)
			},
			addMessage:function(){
				this.hidden=false
			},
			close:function(){
				this.hidden=true
			},
			submit:function(){
				var _this=this;
				if(this.title==''){
					uni.showToast({
						title:'标题不能为空',
						icon:'none',
						duration:2000
					})
					return false
				}
				if(this.desc==''){
					uni.showToast({
						title:'请描述您的问题',
						icon:'none',
						duration:2000
					})
					return false
				}
			    uni.request({
			    	url:this.urll+'advicefeedback/',
					method:'POST',
					data:{
						title:this.title,
						message:this.desc
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						console.log(res)
						this.message=res.data.data.message;
						this.desc=res.data.data.title;
						console.log(this.message)
						console.log(this.title)
						if(res.statusCode==200){
							 _this.hidden=true;
						}
						
							
					}
			    })
			},
			identity:function(){
				uni.navigateTo({
					url:'../identity/identity'
				})
			}
			
		}
	}
</script>

<style>
	page{
	    background: #EDEEEE;	
	}
	.t{
		height:30rpx;
	}
	.suggest-list{
		width:100%;
		height:280rpx;
		background: #fff;
		padding: 0 48rpx;
	}
	.time{
		height:90rpx;
		width:calc(100% - 96rpx);
		border-bottom:1rpx solid #f2f2f2;
	}
	.submit-time{
		line-height: 90rpx;
		float:left;
		font-size: 30rpx;
	}
	.status{
		line-height: 90rpx;
		float: right;
		color:#DCB16E;
		font-size: 30rpx;
	}
	.question{
		margin-top:20rpx;
		width:calc(100% - 96rpx);
		background: #000000;
	}
	.tit{
		width:100rpx;
		height:45rpx;
		float: left;
		line-height: 45rpx;
		font-size: 28rpx;
	}
	.answer{
		width:554rpx;
		float: left;
		line-height: 45rpx;
		font-size: 28rpx;
	}
	.answer1{
		width:500rpx;
		float: right;
		font-size: 28rpx;
		line-height: 60rpx;
		height:180rpx;
		overflow: hidden;
	}
	.box{
		height:200rpx;
	}
	.none{
		display: block;
		width:150rpx;
		height:150rpx;
		margin:0 auto;
	}
	.tips{
		margin-top:50rpx;
		text-align: center;
		color:#797979;
		font-size: 28rpx;
	}
	.newadd{
		width:200rpx;
		height:70rpx;
		background: #03143B;
		border-radius: 50rpx;
		color:#fff;
		text-align: center;
		line-height: 70rpx;
		margin:80rpx auto;
		font-size: 30rpx;
	}
	.cover{
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.3);
		z-index: 9;
		position: fixed;
		left:0;
		top:0;
	}
	.cover1{
		display: none;
	}
	.frame{
		width:624rpx;
		height:600rpx;
		position: absolute;
		top:300rpx;
		left:63rpx;
		border-radius: 8rpx;
		background: #fff;
		padding:100rpx 50rpx;
		box-sizing: border-box;
	}
	.title{
		width:524rpx;
		height:80rpx;
		border:1rpx solid #f2f2f2;
		line-height: 80rpx;
		font-size: 30rpx;
	}
	.area{
		width:524rpx;
		height:240rpx;
		border:1rpx solid #f2f2f2;
		line-height: 80rpx;
		font-size: 30rpx;
		margin-top:30rpx;
	}
	.submit{
		width:480rpx;
		height:80rpx;
		background: #000000;
		margin:30rpx auto;
		text-align: center;
		line-height: 80rpx;
		color:#fff;
		border-radius: 8rpx;
		font-size: 30rpx;
	}
	.close{
		width:40rpx;
		height:40rpx;
		position: absolute;
		top:20rpx;
		right:20rpx;
		/* color:#797979; */
	}
	.shade{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background: rgba(0,0,0,0.5);
	}
	.pop{
		width:500rpx;
		height:250rpx;
		margin:450rpx auto 0;
		background: #fff;
		border-radius: 20rpx;
	}
	.pop-title{
		text-align: center;
		font-size: 32rpx;
		color:#121212;
		line-height: 150rpx;
	}
	.pop-btn{
		width:126rpx;
		height:56rpx;
		margin:20rpx auto 0;
		border-radius: 10rpx;
		background: #121212;
		color: #fff;
		font-size: 30rpx;
		text-align: center;
		line-height: 56rpx;
	}
</style>
