<template>
	<view class="con">
        <rich-text :nodes="aa"></rich-text>
	</view>
</template>

<script>
	export default {
		data () {
			return {
                ction:'',
                aa:'',
			}
		},
        
        onLoad(option) {
            this.ction = option.content;
            this.aa=this.ction.replace(/_/g,"=");
        }
	}
</script>

<style>

.con{
	padding: 36rpx;
    box-sizing: border-box;
}
</style>
