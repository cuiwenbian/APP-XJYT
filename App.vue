<script>
	export default {
		onLaunch: function() {
				var that = this;
				var times = uni.getStorageSync('nowtime');
				var setTime = new Date().getTime();
				if(times){
					console.log('当前时间戳' + setTime)
					console.log('本地存储时间戳' + times)
					var allTime = setTime - times;
					console.log('登录使用token时间' + allTime)
					if (allTime > 1000 * 60 * 21600) {          //如果token超过十五天，自动清除token,重新登录
						console.log('token已过期')
						uni.removeStorageSync('token');
						uni.removeStorageSync('phone');
						uni.removeStorageSync('nowtime');
					} else {
						console.log('token未过期')
					} 
				}
				
				
			
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				var wgtVer = inf.version;
				console.log("当前应用版本：" + wgtVer);
				uni.setStorageSync('version', wgtVer)
			});
			// #endif
		
			// #ifdef MP-WEIXIN
			//var token = uni.getStorageSync('token');
			//var phone = uni.getStorageSync('phone');
			//var openid = uni.getStorageSync('openid');
			///var scope = uni.getStorageSync('scope');
			// if (token && phone) {
			// 	this.global_.phone = phone;
			// 	this.global_.token = token;
			// 	uni.reLaunch({
			// 		url: '/pages/index/index'
			// 	});
			// }

			// #endif


		},
		onShow: function() {}


	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";

	* {
		padding: 0;
		margin: 0;
	}

	@font-face {
		font-family: 'myface_medium';
		src: url('./static/assets/DIN Medium.ttf');
	}

	@font-face {
		font-family: 'myface_bold';
		src: url('./static/assets/din-bold_.otf');
	}

	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #FFFFFF;
	}

	.example {
		padding: 0 30upx 30upx;
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #666;
		margin: 40upx 25upx;
		padding-left: 25upx;
		position: relative;
	}

	.example .example-title {
		margin: 40upx 0;
	}

	.example-title:before {
		content: "";
		display: inline-block;
		position: absolute;
		left: 0upx;
		top: 0upx;
		width: 2px;
		height: 34upx;
		background-color: #007aff;
		border-radius: 2px;
	}

	.example-body {
		padding: 0 40upx;
	}
</style>
