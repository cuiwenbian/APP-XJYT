<template>
	<!-- 建议反馈 -->
	<view class="container" style="position: relative;">
		<view v-if='flag'>
			<view class="box"></view>
			<view>
				<image class="none" src="../../static/images/machine.png" mode=""></image>
				<view class="tips">
					您还没有提交反馈!
				</view>
			</view>
		</view>
		<view v-else v-for="item in messages" :key='item.id' @click='detail(item)'>
			<view class='t'></view>
			<view class="suggest-list">
				<view class='time'>
					   <view class="submit-time">提交时间：{{item.add_time}}</view>
					   <view class='status' v-show="item.company_submit==1">提交成功</view>
					   <view class='status' v-show='item.company_submit==2'>已回复</view>
				</view>
				<view class="question">
					<view class='tit'>标题：</view>
					<view class='answer'>{{item.title}}</view>
				</view>
				<view class="question">
					<view class='tit'>描述：</view>
					<view class='answer'>{{item.message}}</view>
				</view>
			</view>
		</view>
		
		<view class="newadd" @click="addMessage">
			提交建议
		</view>
		<view  :class="hidden?'cover1':'cover'">
			<view class="frame">
				<input class="title" type="text" :value="title" @input='getTitleContent' placeholder="标题"/>
				<textarea class="area" :value="desc" @input='getDescContent' placeholder="问题描述" placeholder-class="plac"/>
				<view class="submit" @click='submit'>提交</view>
				<image class="close" src="../../static/images/close.png" mode="" @click="close"></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default{
		data(){
		  return{
			  flag:false,
			  hidden:true,
			  title:'',
			  desc:'',
			  //shade:false,
			  messages:'',
			  id:'',
			  add_time:''
		  }	
		},
		onLoad() {
			var _this=this;
			uni.request({
				url:this.url+'advicefeedback/',
				method:'GET',
				data:{
					title:this.title,
					message:this.desc
				},
				header:{
					Authorization:'JWT'+' '+this.global_.token
				},
				success(res) {
					if(res.data.data==''){
						_this.flag=true
					}else{
						_this.flag=false
					}
					_this.messages=res.data.data;
					for(let i=0;i<_this.messages.length;i++){
						var t=_this.messages[i].add_time;
						var t1=t.substr(0,10)+'  '+t.substr(11,8)
						_this.messages[i].add_time=t1
						var up=_this.messages[i].updated_time;
						var up1=up.substr(0,10)+'  '+up.substr(11,8)
						_this.messages[i].updated_time=up1
					}
					
				}
			})
		    
		},
        onBackPress(option){
              plus.key.hideSoftKeybord()    
            },
		methods:{
			getTitleContent:function(e){
				this.title=e.detail.value
				
			},
			getDescContent:function(e){
				this.desc=e.detail.value
		
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
			    	url:this.url+'advicefeedback/',
					method:'POST',
					data:{
						title:this.title,
						message:this.desc
					},
					header:{
						Authorization:'JWT'+' '+this.global_.token
					},
					success(res) {
						//console.log(res)
						
						if(res.statusCode==200){
							 _this.hidden=true;
							 _this.title='';
							 _this.desc='';
						}
						uni.showToast({
							title:'提交成功',
							icon:'none',
							duration:2000
						})
						
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return; 
						page.onLoad(); 
							
					}
			    })
			},
			detail:function(item){
				console.log(item)
				var mes=JSON.stringify(item);
				console.log(mes)
				uni.navigateTo({
					url:'../suggest-detail/suggest-detail?message='+mes
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
		height:auto;
		/* height:280rpx; */
		background: #fff;
		padding: 20rpx 48rpx;
		overflow: hidden;
		box-sizing: border-box;
	}
	.time{
		height:90rpx;
		width:100%;
		border-bottom:1rpx solid #f2f2f2;
		
	}
	.submit-time{
		height:90rpx;
		width:520rpx;
		line-height: 90rpx;
		float:left;
		font-size: 28rpx;
		color:#A0A0A0;
	}
	.status{
		
		height:90rpx;
		line-height: 90rpx;
		float: right;
		color:#DCB16E;
		font-size: 28rpx;
	}
	.question{
		color:#121212;
		margin-top:20rpx;
		margin-bottom:20rpx;
		width:100%;
		
	}
	.tit{
		width:15%;
		height:90rpx;
		float: left;
		line-height: 90rpx;
		font-size: 28rpx;
		
	}
	.answer{
		height: auto;
		width:85%;
		word-break:break-all;
		word-wrap:break-word;
		float: left;
		line-height: 90rpx;
		font-size: 28rpx;
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
		background: #0A1117;
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
		padding:0 10rpx;
		box-sizing: border-box;
		border:1rpx solid #f2f2f2;
		line-height: 80rpx;
		font-size: 30rpx;
	}
	.area{
		width:524rpx;
		height:240rpx;
		padding:5rpx 10rpx;
		box-sizing: border-box;
		border:1rpx solid #f2f2f2;
		line-height: 80rpx;
		font-size: 30rpx;
		margin-top:30rpx;
	}
	.plac{
		line-height: 80rpx;
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
