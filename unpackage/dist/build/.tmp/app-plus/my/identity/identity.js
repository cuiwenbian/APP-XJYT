(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/identity/identity"],{"804b":function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"9ff0":function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");o(n("66fd"));var t=o(n("bcd0"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a09b:function(e,t,n){},a19b:function(e,t,n){"use strict";var o=n("a09b"),i=n.n(o);i.a},bcd0:function(e,t,n){"use strict";n.r(t);var o=n("804b"),i=n("ee6c");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("a19b");var s,r=n("f0c5"),u=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=u.exports},ee42:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("a315"),a={data:function(){return{name:"",idcard:"",imgs:[],picPaths:[],positive:"positive",reverse:"reverse",pos:"",rev:"",type:"",p_flag:!0,r_flag:!0,p_url:"",r_url:"",shade:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getName:function(e){this.name=e.detail.value},getIdcard:function(e){this.idcard=e.detail.value},chooseImageTap:function(t){var n=this,o=t.currentTarget.dataset.flag;e.showActionSheet({itemList:["从相册中选择","拍照"],itemColor:"#00000",success:function(e){e.cancel||(0==e.tapIndex?("positive"==o&&n.chooseWxImage1("album"),"reverse"==o&&n.chooseWxImage2("album")):1==e.tapIndex&&("positive"==o&&n.chooseWxImage1("camera"),"reverse"==o&&n.chooseWxImage2("camera")))}})},chooseWxImage1:function(t){var n=this,o=n.imgs,i={};e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(e){for(var t=o.length-1;t>=0;t--)for(var a in o[t])"positive"==a&&o.splice(t,1);i.positive=e.tempFilePaths[0],n.imgs.push(i),n.p_url=e.tempFilePaths[0],n.p_flag=!1,n.imgs=n.imgs}})},chooseWxImage2:function(t){var n=this,o=n.imgs,i={};e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(e){for(var t=o.length-1;t>=0;t--)for(var a in o[t])"reverse"==a&&o.splice(t,1);i.reverse=e.tempFilePaths[0],n.imgs.push(i),n.r_url=e.tempFilePaths[0],n.r_flag=!1,n.imgs=n.imgs,n.rev=o[1].reverse,n.pos=o[0].positive}})},upImgs:function(t,n){var i=this,a=this.global_.token;for(var s in t[n])e.uploadFile({url:this.url+"realname/",filePath:t[n][s],name:s,header:{Authorization:"JWT "+a},formData:null,success:function(s){return console.log(o(s," at my\\identity\\identity.vue:221")),400==s.statusCode?(e.showToast({title:"数据异常",icon:"none",duration:2e3}),!1):406==s.statusCode?(e.showToast({title:"图片太大，请重新上传",icon:"none",duration:2e3}),!1):(n++,void(n==t.length?e.request({url:i.url+"realname/",method:"POST",data:{name:i.name,idcard:i.idcard},header:{Authorization:"JWT "+a},success:function(t){return console.log(o(t," at my\\identity\\identity.vue:252")),402==t.statusCode?(e.showToast({title:"身份证号已存在，请重新认证",icon:"none",duration:2e3}),!1):401==t.statusCode?(e.showToast({title:"身份证号错误",icon:"none"}),!1):410==t.statusCode?(e.showToast({title:"图片格式错误",icon:"none"}),!1):void(200==t.statusCode&&(i.shade=!0))}}):i.upImgs(t,n)))},fail:function(e){}})},submitt:function(){var t=this;if(!t.name)return e.showToast({title:"用户名不能为空",icon:"none"}),!1;if(!t.idcard)return e.showToast({title:"身份证号不能为空",icon:"none"}),!1;var n=i.checkIdcard(t.idcard);return n?2!==t.imgs.length?(e.showToast({title:"身份证照不全",icon:"none"}),!1):void t.upImgs(t.imgs,0):(e.showToast({title:"请输入正确的身份证号",icon:"none",duration:2e3}),!1)},sure:function(){e.switchTab({url:"../../pages/my/my"})}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},ee6c:function(e,t,n){"use strict";n.r(t);var o=n("ee42"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a}},[["9ff0","common/runtime","common/vendor"]]]);