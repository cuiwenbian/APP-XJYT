(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0958":function(e,t,a){"use strict";var n=a("d64e"),i=a.n(n);i.a},"0a6f":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=r(a("45f4"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=null,l={data:function(){return{Todayprice:"",yesterdayprice:"",yesterday:"",seven_profit:"",total_profit:"",cWidth:"",cHeight:"",pixelRatio:1,notice:"",csgo:"",s:"123987998449898",time:[],price:[],hure:[],feck:[],usd:"",hige:"",minn:""}},onLoad:function(){i=this;var t=this;this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(500),i.getServerData(),e.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){var a=e.data;t.csgo=a}})},methods:{web1:function(){e.navigateTo({url:"../web1/web1"})},web2:function(){e.navigateTo({url:"../web2/web2"})},getServerData:function(){var t=this,a=Date.parse(new Date)/1e3;console.log(n(new Date(a)," at pages\\index\\index.vue:161"));new Date;var o=518400,r=a-o;e.request({url:"https://gateio.org/json_svr/query/?u=10&c=9137018&type=tvkline&symbol=fil_usdt&from=".concat(r,"&to=").concat(a,"&interval=28800"),method:"POST",success:function(e){function a(e){console.log(n(e," at pages\\index\\index.vue:173"));var t=new Date(e);console.log(n(t," at pages\\index\\index.vue:175"));t.getFullYear();var a=t.getMonth()+1;a=a<10?"0"+a:a;var i=t.getDate();i=i<10?"0"+i:i;var o=t.getHours();o=o<10?"0"+o:o;var r=t.getMinutes();return r=r<10?"0"+r:r,a+"-"+i}var o=e.data.split("\n");t.usd=o;for(var r=[],s=[],u=[],l=1;l<t.usd.length-1;l++){var d=o[l].split(",")[0],c=a(parseInt(d));r.push(c),t.time=r;var f=new Date;f.setTime(f.getTime()-864e5);var g=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate();console.log(n(g," at pages\\index\\index.vue:205")),console.log(n(t.time," at pages\\index\\index.vue:206"))}for(var p=1;p<t.usd.length-1;p++){var h=o[p].split(",")[2],v=parseFloat(h);s.push(v),t.price=s}for(var x=1;x<t.usd.length-1;x++){var m=o[x].split(",")[1],b=parseFloat(m);u.push(b),t.feck=u}for(var y=1;y<t.usd.length-1;y++)var w=o[y].split(",")[3];var T=parseFloat(o[o.length-2].split(",")[4]),_=parseFloat(o[o.length-6].split(",")[4]),F=T-_,D=F.toFixed(2),C=100*(T/m-1);c=C.toFixed(2)+"%";console.log(n(h," at pages\\index\\index.vue:231")),console.log(n(w," at pages\\index\\index.vue:232")),i.hige=parseFloat(h)+1,i.minn=parseFloat(w)-1,t.Todayprice=T,t.yesterday=c,t.yesterdayprice=D,(D>0||c>0)&&(t.yest="+"+t.yest);var L={list:[]};L.list=t.usd,console.log(n(i.minn," at pages\\index\\index.vue:247")),i.showArea("canvasArea",t.usd)}})},showArea:function(e,t){var a;u=new o.default((a={$this:i,canvasId:e,type:"area",fontSize:11,legend:!0,dataLabel:!1},s(a,"legend",{show:!1}),s(a,"dataPointShape",!1),s(a,"legend",{show:!1}),s(a,"pixelRatio",i.pixelRatio),s(a,"categories",i.time),s(a,"series",[{name:"FIL价格",data:i.price,color:"#58f4e3"}]),s(a,"animation",!0),s(a,"xAxis",{type:"grid",gridColor:"#333535",disableGrid:!0,gridType:"solid",dashLength:8,axisLineColor:"#333535",itemCount:20,labelCount:8}),s(a,"yAxis",{type:"grid",gridType:"solid",gridColor:"#333535",dashLength:8,splitNumber:4,min:i.minn,max:i.hige,axisLineColor:"#333",format:function(e){return e.toFixed(1)}}),s(a,"width",i.cWidth*i.pixelRatio),s(a,"height",i.cHeight*i.pixelRatio),s(a,"extra",{area:{type:"straight",opacity:.2,addLine:!0,width:1,gradient:!0}}),a))},touchCandle:function(e){u.scrollStart(e)},moveCandle:function(e){u.scroll(e)},touchEndCandle:function(e){u.scrollEnd(e),u.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})},touchArea:function(e){u.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=l}).call(this,a("6e42")["default"],a("0de9")["default"])},"0a73":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"1dc5":function(e,t,a){"use strict";a.r(t);var n=a("0a6f"),i=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=i.a},"6f64":function(e,t,a){"use strict";a.r(t);var n=a("0a73"),i=a("1dc5");for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);a("0958");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},a5ed:function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("6f64"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d64e:function(e,t,a){}},[["a5ed","common/runtime","common/vendor"]]]);