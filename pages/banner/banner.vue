<template>
	<view class="container">
  
            <rich-text :nodes="aa"></rich-text>
       

	</view>
</template>

<script>
	export default {
		data () {
			return {
                ction:'',
                aa:''
			}
		},
        
        onLoad(option) {
            console.log(option.content)
            this.ction = option.content;
            this.aa=this.ction.replace(/_/g,"=");
            console.log(this.aa)
        }
	}
</script>

<style>

</style>
