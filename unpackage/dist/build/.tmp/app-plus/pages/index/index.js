(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0958":function(e,t,a){"use strict";var n=a("d64e"),i=a.n(n);i.a},"0a6f":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=o(a("45f4"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=null,l={data:function(){return{Todayprice:"",yesterdayprice:"",yesterday:"",seven_profit:"",total_profit:"",cWidth:"",cHeight:"",pixelRatio:1,notice:"",csgo:"",time:[],price:[],hure:[],feck:[],usd:"",hige:"",minn:""}},onLoad:function(){i=this;var t=this;this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(550),i.getServerData(),e.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){var a=e.data;t.csgo=a}})},methods:{web1:function(){e.navigateTo({url:"../web1/web1"})},web2:function(){e.navigateTo({url:"../web2/web2"})},getServerData:function(){var t=this,a=Date.parse(new Date)/1e3,r=(new Date,518400),o=a-r;e.request({url:"https://gateio.org/json_svr/query/?u=10&c=9137018&type=tvkline&symbol=fil_usdt&from=".concat(o,"&to=").concat(a,"&interval=28800"),method:"POST",success:function(e){function a(e){var t=new Date(e),a=(t.getFullYear(),t.getMonth()+1);a=a<10?"0"+a:a;var n=t.getDate();n=n<10?"0"+n:n;var i=t.getHours();i=i<10?"0"+i:i;var r=t.getMinutes();return r=r<10?"0"+r:r,a+"-"+n}console.log(n(e," at pages\\index\\index.vue:159"));var r=e.data.split("\n");t.usd=r;for(var o=[],u=[],s=[],l=1;l<t.usd.length-1;l++){var d=r[l].split(",")[0],c=a(parseInt(d));o.push(c),t.time=o;var f=new Date;f.setTime(f.getTime()-864e5);f.getFullYear(),f.getMonth(),f.getDate()}for(var h=1;h<t.usd.length-1;h++){var p=r[h].split(",")[2],g=parseFloat(p);u.push(g),t.price=u}for(var v=1;v<t.usd.length-1;v++){var m=r[v].split(",")[1],b=parseFloat(m);s.push(b),t.feck=s}for(var y=1;y<t.usd.length-1;y++)var x=r[y].split(",")[3];var w=parseFloat(r[r.length-2].split(",")[4]),T=parseFloat(r[r.length-6].split(",")[4]),_=w-T,F=_.toFixed(2),C=100*(w/m-1);c=C.toFixed(2)+"%";i.hige=parseFloat(p)+1,i.minn=parseFloat(x)-1,t.Todayprice=w,t.yesterday=c,t.yesterdayprice=F,(F>0||c>0)&&(t.yest="+"+t.yest);var D={list:[]};D.list=t.usd,i.showArea("canvasArea",t.usd)}})},showArea:function(e,t){var a;s=new r.default((a={$this:i,canvasId:e,type:"area",fontSize:11,legend:!0,dataLabel:!1},u(a,"legend",{show:!1}),u(a,"dataPointShape",!1),u(a,"legend",{show:!1}),u(a,"pixelRatio",i.pixelRatio),u(a,"categories",i.time),u(a,"series",[{name:"FIL价格",data:i.price,color:"#58f4e3"}]),u(a,"animation",!0),u(a,"xAxis",{type:"grid",gridColor:"#333535",disableGrid:!0,gridType:"solid",dashLength:8,axisLineColor:"#333535",itemCount:20,labelCount:8}),u(a,"yAxis",{type:"grid",gridType:"solid",gridColor:"#333535",dashLength:8,splitNumber:4,min:i.minn,max:i.hige,axisLineColor:"red",format:function(e){return e.toFixed(1)}}),u(a,"width",i.cWidth*i.pixelRatio),u(a,"height",i.cHeight*i.pixelRatio),u(a,"extra",{area:{type:"straight",opacity:.2,addLine:!0,width:1,gradient:!0}}),a))},touchCandle:function(e){s.scrollStart(e)},moveCandle:function(e){s.scroll(e)},touchEndCandle:function(e){s.scrollEnd(e),s.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})},touchArea:function(e){s.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=l}).call(this,a("6e42")["default"],a("0de9")["default"])},"1dc5":function(e,t,a){"use strict";a.r(t);var n=a("0a6f"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},"6f64":function(e,t,a){"use strict";a.r(t);var n=a("dcbf"),i=a("1dc5");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("0958");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},a5ed:function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("6f64"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d64e:function(e,t,a){},dcbf:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})}},[["a5ed","common/runtime","common/vendor"]]]);