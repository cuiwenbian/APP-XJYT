(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0aad":function(e,n,t){"use strict";var o=t("2f9c"),a=t.n(o);a.a},"1f6d":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a;i(t("7c9f"));function i(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{scr:!0,n:!0,title:"",notice:"",csgo:"",According:!1,diro:!0,link:"",baner:"",version:"",remark:"",urll:this.urll,pool:""}},onLoad:function(){a=this,e.getSystemInfo({success:function(e){console.log(o(e.platform," at pages\\index\\index.vue:154"))}}),e.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(o(n," at pages\\index\\index.vue:168")),a.csgo=n.data.data.notice,console.log(o(a.csgo," at pages\\index\\index.vue:172")),a.daern=n.data.data.must,1==a.daern&&(a.diro=!1,console.log(o(a.diro," at pages\\index\\index.vue:176"))),a.version=n.data.data.version,a.andri=e.getStorageSync("version"),console.log(o(a.andri," at pages\\index\\index.vue:180")),console.log(o(a.version," at pages\\index\\index.vue:181")),a.andri!=a.version&&(a.According=!0,console.log(o(a.According," at pages\\index\\index.vue:188")),e.request({url:a.url+"version/",method:"GET",header:{Authorization:"JWT "+a.global_.token},success:function(e){console.log(o(e," at pages\\index\\index.vue:196")),a.remark=e.data[0].remark,console.log(o(a.remark," at pages\\index\\index.vue:198"))}}))}})},onShow:function(){var n=this;e.request({url:this.url+"home/rotation/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){n.baner=e.data}}),e.request({url:this.url+"home/news/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(o(e," at pages\\index\\index.vue:224")),n.title=e.data,console.log(o(n.title," at pages\\index\\index.vue:226"))}}),e.request({url:this.url+"cloudinfo/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){n.pool=e.data.data,console.log(o(e.data.data," at pages\\index\\index.vue:237"))}})},methods:{next:function(){this.n=!1},back:function(){this.n=!0},buy:function(n){e.navigateTo({url:"../poolDetails/poolDetails?cloudid="+n})},quit:function(){1==this.daern?plus.runtime.quit():this.According=!1},update:function(){var n=this;e.request({url:this.url+"version/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var a=t.data[0].version;console.log(o(a," at pages\\index\\index.vue:272")),n.link=t.data[0].link,console.log(o(n.link," at pages\\index\\index.vue:274")),n.version=e.getStorageSync("version"),console.log(o(n.version," at pages\\index\\index.vue:276")),n.checkVersionToLoadUpdate(a,n.version)},fail:function(){},complete:function(){}})},checkVersionToLoadUpdate:function(n,t){var a=this;if(n!=t){if(3!=plus.networkinfo.getCurrentType())return void e.showToast({title:"有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止更新，将在您连接WIFI之后重新检测更新",mask:!0,duration:5e3,icon:"none"});e.showModal({title:"版本更新",content:"有新的版本发布，检测到您当前为Wifi连接，是否立即进行新版本下载？",confirmText:"立即更新",cancelText:"稍后进行",success:function(n){if(n.confirm){e.showToast({icon:"none",mask:!0,title:"有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序",duration:5e3});var t=a.link;console.log(o(t," at pages\\index\\index.vue:311"));var i=plus.downloader.createDownload(t,{},function(n,t){200==t?plus.runtime.install(plus.io.convertLocalFileSystemURL(n.filename),{},{},function(n){e.showToast({title:"安装失败",duration:1500})}):e.showToast({title:"更新失败",duration:1500})});i.start()}else n.cancel&&console.log(o("稍后更新"," at pages\\index\\index.vue:330"))}})}},noupdate:function(){this.According=!1},some:function(n){e.request({url:this.url+"home/rotation/details/"+n+"/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(o(n," at pages\\index\\index.vue:349"));var t=n.data.link,a=n.data.text_content.replace(/=/g,"_");""==t?e.navigateTo({url:"../banner/banner?content="+encodeURIComponent(a)}):e.navigateTo({url:"../web1/web1?url=".concat(t)})}})},information:function(n){e.request({url:this.url+"home/news/details/"+n+"/",method:"PUT",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(o(n," at pages\\index\\index.vue:373"));var t=n.data.data,a=t.link,i=t.read_volume,s=t.text_content.replace(/=/g,"_");console.log(o(n," at pages\\index\\index.vue:378"));var u=t.add_time,r=t.title;console.log(o(" at pages\\index\\index.vue:381")),""==a?e.navigateTo({url:"../banner2/banner2?volume="+i+"&cont="+encodeURIComponent(s)+"&add="+u+"&title="+r}):e.navigateTo({url:"../web2/web2?url=".concat(a)})}})}}};n.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},"2f9c":function(e,n,t){},"80f4":function(e,n,t){"use strict";(function(e){t("c860"),t("921b");o(t("66fd"));var n=o(t("ec9c"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"88a0":function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return o})},ec1f:function(e,n,t){"use strict";t.r(n);var o=t("1f6d"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},ec9c:function(e,n,t){"use strict";t.r(n);var o=t("88a0"),a=t("ec1f");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("0aad");var s,u=t("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);n["default"]=r.exports}},[["80f4","common/runtime","common/vendor"]]]);