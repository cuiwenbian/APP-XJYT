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
			// this.ction = decodeURIComponent(option.content);
            this.aa=this.ction.replace(/_/g,"=").replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
        }
	}
</script>

<style>
uni-rich-text img{max-width:100% !important;}
.con{
	width:100%;
	padding: 36rpx;
    box-sizing: border-box;
	overflow: hidden;
}
</style>
