<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			// #ifdef APP-PLUS
			plus.runtime.getProperty(plus.runtime.appid,function(inf){  
			    var wgtVer=inf.version;  
				console.log("当前应用版本："+wgtVer);
				uni.setStorageSync('version',wgtVer)
		   });
		   // #endif
           var value = uni.getStorageSync('token');
           var value1 = uni.getStorageSync('phone');
           console.log(value)
           console.log(value1)
           if (value && value1){
           	this.global_.phone = value1;
           	this.global_.token = value;
                uni.switchTab({
                	url: '/pages/index/index'
                });
           }else{
           	uni.navigateTo({
           		url: '/pages/login/login'
           	});		 
           }
		 
		},
		onShow: function () {
			console.log('App Show')
			// #ifdef MP-WEIXIN

			// #endif
		},
		onHide: function () {
			console.log('App Hide')
		},
	
	}
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    page {
    	display: flex;
    	flex-direction: column;
    	box-sizing: border-box;
    	background-color: #FFFFFF;
    }
	
    .example{
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
    .example .example-title{
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
    .example-body{
        padding: 0 40upx;
    }
</style>
