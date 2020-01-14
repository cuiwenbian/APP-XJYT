<template>
	<view class="con"><rich-text :nodes="aa"></rich-text></view>
</template>

<script>
function formatRichText(html = '') {
	let newContent = html.replace(/<img[^>]*>/gi, function(match, capture) {
		match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
		return match;
	});
	newContent = newContent.replace(/style="[^"]+"/gi, function(match, capture) {
		match = match.replace(/width:[^;]+;/gi, 'max-width:100%;height: auto;').replace(/width:[^;]+;/gi, 'max-width:100%;height: auto;');
		return match;
	});
	newContent = newContent.replace(/\<img/gi, '<img style="max-width:100%;margin-top:0;margin-bottom:5px;height: auto;"');
	console.log(newContent);
	return newContent;
}
export default {

    data() {
        return {
            ction: '',
            aa: ''
        };
    },
    onLoad(option) {
        this.ction = uni.getStorageSync('index-banner-content') || '';
		console.log(this.ction)
		this.aa = this.ction.replace(/_/g, '=').replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
        uni.removeStorageSync('index-banner-content');
        // #ifdef MP-WEIXIN
        let aa = this.ction.replace(/_/g, '=');
        aa = formatRichText(aa);
        this.aa = aa;
        //#endif
        // #ifndef MP-WEIXIN
        this.aa = this.ction.replace(/_/g, '=').replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
        //#endif
    }
};
</script>

<style>
uni-rich-text img {
	max-width: 100% !important;
}
.con {
	width: 100%;
	padding: 36rpx;
	box-sizing: border-box;
	overflow: hidden;
}
</style>
