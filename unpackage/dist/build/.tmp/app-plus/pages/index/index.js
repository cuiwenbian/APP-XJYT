(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0958":function(e,t,a){"use strict";var n=a("d64e"),r=a.n(n);r.a},"0a6f":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=o(a("45f4"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=null,u={data:function(){return{Todayprice:"",yesterdayprice:"",yesterday:"",seven_profit:"",title:"",total_profit:"",cWidth:"",cHeight:"",pixelRatio:1,notice:"",csgo:"",time:[],price:[],price_all:[],hure:[],feck:[],usd:"",suner:"",baner:"",hige:"",minn:""}},onShow:function(){n=this;var t=this;this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(550),n.getServerData(),e.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){var a=e.data;t.csgo=a}}),e.request({url:this.url+"home/rotation/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){n.baner=e.data}}),e.request({url:this.url+"/home/news/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){t.title=e.data}})},methods:{some:function(t){e.request({url:this.url+"home/rotation/details/"+t+"/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var a=t.data.link,n=t.data.text_content.replace(/=/g,"_");null==a?e.navigateTo({url:"../banner/banner?content="+encodeURIComponent(n)}):e.navigateTo({url:"../web1/web1?url=".concat(a)})}})},information:function(t){e.request({url:this.url+"home/news/details/"+t+"/",method:"PUT",header:{Authorization:"JWT "+this.global_.token},success:function(t){var a=t.data.data,n=a.link,r=a.read_volume,o=a.text_content.replace(/=/g,"_"),i=a.add_time,l=a.title;null==n?e.navigateTo({url:"../banner2/banner2?volume="+r+"&cont="+encodeURIComponent(o)+"&add="+i+"&title="+l}):e.navigateTo({url:"../web2/web2?url=".concat(n)})}})},getServerData:function(){var t=this,a=Date.parse(new Date)/1e3,r=(new Date,518400),o=a-r;e.request({url:"https://gateio.org/json_svr/query/?u=10&c=9137018&type=tvkline&symbol=fil_usdt&from=".concat(o,"&to=").concat(a,"&interval=28800"),method:"POST",success:function(e){function a(e){var t=new Date(e),a=(t.getFullYear(),t.getMonth()+1);a=a<10?"0"+a:a;var n=t.getDate();n=n<10?"0"+n:n;var r=t.getHours();r=r<10?"0"+r:r;var o=t.getMinutes();return o=o<10?"0"+o:o,a+"-"+n}var r=e.data.split("\n");t.usd=r;for(var o=[],i=[],l=[],u=[],s=1;s<t.usd.length-1;s++){var c=r[s].split(",")[0],d=a(parseInt(c));o.push(d),t.time=o;var h=new Date;h.setTime(h.getTime()-864e5);h.getFullYear(),h.getMonth(),h.getDate()}for(var f=1;f<t.usd.length-1;f++){var p=r[f].split(",")[2],g=parseFloat(p);i.push(g),t.price=i}for(var v=1;v<t.usd.length-1;v++){var m=r[v].split(",")[2],b=parseFloat(m);l.push(b),t.price_all=l.sort();var _=t.price_all.sort(),y=_[0],T=_[_.length-1]}n.hige=parseFloat(T)+1,n.minn=parseFloat(y)-1;for(var x=1;x<t.usd.length-1;x++){var w=r[x].split(",")[1],F=parseFloat(w);u.push(F),t.feck=u}for(var k=1;k<t.usd.length-1;k++)r[k].split(",")[3];var A=parseFloat(r[r.length-2].split(",")[4]),C=parseFloat(r[r.length-6].split(",")[4]),D=A-C,W=D.toFixed(2),q=100*(A/w-1);d=q.toFixed(2)+"%";t.Todayprice=A,t.yesterday=d,t.yesterdayprice=W,(W>0||d>0)&&(t.yest="+"+t.yest);var E={list:[]};E.list=t.usd,n.showArea("canvasArea",t.usd)}})},showArea:function(e,t){var a;l=new r.default((a={$this:n,canvasId:e,type:"area",fontSize:11,legend:!0,dataLabel:!1},i(a,"legend",{show:!1}),i(a,"dataPointShape",!1),i(a,"legend",{show:!1}),i(a,"pixelRatio",n.pixelRatio),i(a,"categories",n.time),i(a,"series",[{name:"FIL价格",data:n.price,color:"#58f4e3"}]),i(a,"animation",!0),i(a,"xAxis",{type:"grid",gridColor:"#333535",disableGrid:!0,gridType:"solid",dashLength:8,axisLineColor:"#333535",itemCount:20,labelCount:8}),i(a,"yAxis",{type:"grid",gridType:"solid",gridColor:"#333535",dashLength:8,splitNumber:4,min:n.minn,max:n.hige,axisLineColor:"red",format:function(e){return e.toFixed(1)}}),i(a,"width",n.cWidth*n.pixelRatio),i(a,"height",n.cHeight*n.pixelRatio),i(a,"extra",{area:{type:"straight",opacity:.2,addLine:!0,width:1,gradient:!0}}),a))},touchCandle:function(e){l.scrollStart(e)},moveCandle:function(e){l.scroll(e)},touchEndCandle:function(e){l.scrollEnd(e),l.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})},touchArea:function(e){l.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=u}).call(this,a("6e42")["default"])},"1dc5":function(e,t,a){"use strict";a.r(t);var n=a("0a6f"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=r.a},"2a32":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},"6f64":function(e,t,a){"use strict";a.r(t);var n=a("2a32"),r=a("1dc5");for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);a("0958");var i=a("2877"),l=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},a5ed:function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("6f64"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d64e:function(e,t,a){}},[["a5ed","common/runtime","common/vendor"]]]);