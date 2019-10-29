<template>
	<view class="container">
		<ul>
		    <li><div class="div1">1</div><div class="del">删除</div></li>
		    <li><div class="div1">2</div><div class="del">删除</div></li>
		    <li><div class="div1">3</div><div class="del">删除</div></li>
		    <li><div class="div1">4</div><div class="del">删除</div></li>
		    <li><div class="div1">5</div><div class="del">删除</div></li>
		    <li><div class="div1">我只是一个单纯的div</div><div class="del">删除</div></li>
		    <li><div class="div1">7</div><div class="del">删除</div></li>
		</ul>
	</view>
</template>

<script>
//设置html的字体大小,方便使用rem布局
(function(win,doc){
    function change(){
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth*20/320+'px';
    }
    change();
    win.onresize = change;
})(window,document);
</script>
<script>
  export default{
	  data(){
		  
	  },
	  methods:{
		  
	  },
	  mounted() {
	  	document.addEventListener('DOMContentLoaded',function(){
	  	    var oUl=document.querySelector('ul');
	  	    var aLi=document.querySelectorAll('li');
	  	    var aDiv=document.querySelectorAll('.div1');
	  	    var aDel=document.querySelectorAll('.del');
	  	    var n=0;
	  	    for(var i=0;i<aLi.length;i++){
	  	        console.log(i);
	  	        aLi[i].index=i;
	  	        //滑动开始
	  	        aLi[i].addEventListener('touchstart',function(ev){
	  	            ev.preventDefault();
	  	            var oldX=ev.targetTouches[0].pageX;
	  	            console.log(oldX);
	  	            function fnMove(ev){
	  	                ev.preventDefault();
	  	                var newX=ev.targetTouches[0].pageX-oldX;
	  	                aLi[this.index].style.transform='translateX('+newX+'px)';
	  	            }
	  	            function fnEnd(ev){
	  	                aLi[this.index].removeEventListener('touchmove', fnMove,false);
	  	                aLi[this.index].removeEventListener('touchend', fnEnd,false);
	  	                ev.preventDefault();
	  	                var changeX=ev.changedTouches[0].pageX;
	  	                if(oldX-changeX > 40){
	  	                    aLi[this.index].style.transition='1s all ease';
	  	                    aLi[this.index].style.transform='translateX(-4rem)';
	  	                }else{
	  	                    aLi[this.index].style.transform='translateX(0)';
	  	                }
	  	            }
	  	            aLi[this.index].addEventListener('touchmove', fnMove,false);
	  	            aLi[this.index].addEventListener('touchend', fnEnd,false);
	  	        },false)
	  	        //删除按钮
	  	        aDel[i].index=i;
	  	        aDel[i].addEventListener('touchstart', function(){
	  	            this.innerHTML='';
	  	            this.style.height='0';
	  	            this.style.transition='0.5s all ease';
	  	            aLi[this.index].style.height='0';
	  	            aLi[this.index].style.transition='0.5s all ease';
	  	            aDiv[this.index].style.height='0';
	  	            aDiv[this.index].style.transition='0.5s all ease';
	  	            aDiv[this.index].innerHTML='';
	  	            this.addEventListener('transitionend',function(){
	  	                oUl.removeChild(aLi[this.index]);
	  	            }, false)
	  	        },false)
	  	    }
	  	},false)
	  }
  }
</script>

<style>
	body,html{
	    height: 100%;
	    width:16rem;
	    overflow:hidden;
	}
	ul{
	    width:16rem;
	    height:28.4rem;
	}
	li{
	    width:20rem;
	    height:2rem;
	    line-height: 2rem;
	    background:pink;
	}
	.div1{
	    width:16rem;
	    height:2rem;
	    float:left;
	}
	.del{
	    width:4rem;
	    height:2rem;
	    background:red;
	    float:left;
	    text-align: center;
	    line-height: 2rem;
	    color:#fff;
	}
</style>
