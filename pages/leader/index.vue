<template>
	<view class="container">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad(){
			this.loadExecution()
		},
		methods: {
			loadExecution: function(){
				var _self=this;
				/**
				 * 获取本地存储中的值
				 * 若存在，说明不是首次启动，直接进入首页；
				 * 若不存在，说明是首次启动，进入引导页；
				 */
				    const value = uni.getStorageSync('token');
					const value1 = uni.getStorageSync('phone');
					console.log(value)
					console.log(value1)
				    if (value&&value1) {
							_self.global_.phone=value1;
							_self.global_.token=value;
				            uni.switchTab({
				                url: '/pages/index/index'
				            });
				       
				    } else {
				        uni.navigateTo({
				            url: '/pages/leader/guide'
				        });
				    }
		
			}
		}
	}
</script>
<style>
	
</style>
