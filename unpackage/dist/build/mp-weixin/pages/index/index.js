(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0aad":function(o,t,n){"use strict";var e=n("2f9c"),i=n.n(e);i.a},"1f6d":function(o,t,n){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e;i(n("7c9f"));function i(o){return o&&o.__esModule?o:{default:o}}var a={data:function(){return{scr:!0,n:!0,title:"",notice:"",csgo:"",According:!1,diro:!0,link:"",baner:"",version:"",remark:"",urll:this.urll,pool:""}},onLoad:function(){e=this,o.getSystemInfo({success:function(o){console.log(o.platform)}}),o.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(t),e.csgo=t.data.data.notice,console.log(e.csgo),e.daern=t.data.data.must,1==e.daern&&(e.diro=!1,console.log(e.diro)),e.version=t.data.data.version,e.andri=o.getStorageSync("version"),console.log(e.andri),console.log(e.version),e.andri!=e.version&&(e.According=!0,console.log(e.According),o.request({url:e.url+"version/",method:"GET",header:{Authorization:"JWT "+e.global_.token},success:function(o){console.log(o),e.remark=o.data[0].remark,console.log(e.remark)}}))}})},onShow:function(){var t=this;o.request({url:this.url+"home/rotation/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(o){t.baner=o.data}}),o.request({url:this.url+"home/news/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(o){console.log(o),t.title=o.data,console.log(t.title)}}),o.request({url:this.url+"cloudinfo/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(o){t.pool=o.data.data,console.log(o.data.data)}})},methods:{next:function(){this.n=!1},back:function(){this.n=!0},buy:function(t){o.navigateTo({url:"../poolDetails/poolDetails?cloudid="+t})},quit:function(){1==this.daern?plus.runtime.quit():this.According=!1},update:function(){var t=this;o.request({url:this.url+"version/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){var e=n.data[0].version;console.log(e),t.link=n.data[0].link,console.log(t.link),t.version=o.getStorageSync("version"),console.log(t.version),t.checkVersionToLoadUpdate(e,t.version)},fail:function(){},complete:function(){}})},checkVersionToLoadUpdate:function(t,n){var e=this;if(t!=n){if(3!=plus.networkinfo.getCurrentType())return void o.showToast({title:"有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止更新，将在您连接WIFI之后重新检测更新",mask:!0,duration:5e3,icon:"none"});o.showModal({title:"版本更新",content:"有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？",confirmText:"立即更新",cancelText:"稍后进行",success:function(t){if(t.confirm){o.showToast({icon:"none",mask:!0,title:"有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序",duration:5e3});var n=e.link;console.log(n);var i=plus.downloader.createDownload(n,{},function(t,n){200==n?plus.runtime.install(plus.io.convertLocalFileSystemURL(t.filename),{},{},function(t){o.showToast({title:"安装失败",duration:1500})}):o.showToast({title:"更新失败",duration:1500})});i.start()}else t.cancel&&console.log("稍后更新")}})}},noupdate:function(){this.According=!1},some:function(t){o.request({url:this.url+"home/rotation/details/"+t+"/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(t);var n=t.data.link,e=t.data.text_content.replace(/=/g,"_");""==n?o.navigateTo({url:"../banner/banner?content="+encodeURIComponent(e)}):o.navigateTo({url:"../web1/web1?url=".concat(n)})}})},information:function(t){o.request({url:this.url+"home/news/details/"+t+"/",method:"PUT",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(t);var n=t.data.data,e=n.link,i=n.read_volume,a=n.text_content.replace(/=/g,"_");console.log(t);var r=n.add_time,c=n.title;console.log(),""==e?o.navigateTo({url:"../banner2/banner2?volume="+i+"&cont="+encodeURIComponent(a)+"&add="+r+"&title="+c}):o.navigateTo({url:"../web2/web2?url=".concat(e)})}})}}};t.default=a}).call(this,n("543d")["default"])},"2f9c":function(o,t,n){},"80f4":function(o,t,n){"use strict";(function(o){n("c860"),n("921b");e(n("66fd"));var t=e(n("ec9c"));function e(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,n("543d")["createPage"])},"88a0":function(o,t,n){"use strict";var e,i=function(){var o=this,t=o.$createElement;o._self._c},a=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return e})},ec1f:function(o,t,n){"use strict";n.r(t);var e=n("1f6d"),i=n.n(e);for(var a in e)"default"!==a&&function(o){n.d(t,o,function(){return e[o]})}(a);t["default"]=i.a},ec9c:function(o,t,n){"use strict";n.r(t);var e=n("88a0"),i=n("ec1f");for(var a in i)"default"!==a&&function(o){n.d(t,o,function(){return i[o]})}(a);n("0aad");var r,c=n("f0c5"),l=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=l.exports}},[["80f4","common/runtime","common/vendor"]]]);