(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/identity/identity"],{8068:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"826d":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("a315"),a={data:function(){return{name:"",idcard:"",imgs:[],picPaths:[],positive:"positive",reverse:"reverse",pos:"",rev:"",type:"",p_flag:!0,r_flag:!0,p_url:"",r_url:"",shade:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getName:function(e){this.name=e.detail.value},getIdcard:function(e){this.idcard=e.detail.value},chooseImageTap:function(t){var i=this,o=t.currentTarget.dataset.flag;console.log(e(o," at my\\identity\\identity.vue:126")),n.showActionSheet({itemList:["从相册中选择","拍照"],itemColor:"#00000",success:function(t){t.cancel||(0==t.tapIndex?(console.log(e(o," at my\\identity\\identity.vue:135")),"positive"==o&&i.chooseWxImage1("album"),"reverse"==o&&i.chooseWxImage2("album")):1==t.tapIndex&&("positive"==o&&i.chooseWxImage1("camera"),"reverse"==o&&i.chooseWxImage2("camera")))}})},chooseWxImage1:function(t){var i=this,o=i.imgs,a={};n.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(t){console.log(e("图片本地路径1"," at my\\identity\\identity.vue:167")),console.log(e(t," at my\\identity\\identity.vue:168"));for(var n=o.length-1;n>=0;n--)for(var s in o[n])"positive"==s&&o.splice(n,1);a.positive=t.tempFilePaths[0],i.imgs.push(a),i.p_url=t.tempFilePaths[0],i.p_flag=!1,i.imgs=i.imgs}})},chooseWxImage2:function(t){var i=this,o=i.imgs,a={};n.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(t){console.log(e("图片本地路径2"," at my\\identity\\identity.vue:194")),console.log(e(t," at my\\identity\\identity.vue:195"));for(var n=o.length-1;n>=0;n--)for(var s in o[n])"reverse"==s&&o.splice(n,1);a.reverse=t.tempFilePaths[0],i.imgs.push(a),i.r_url=t.tempFilePaths[0],i.r_flag=!1,i.imgs=i.imgs,i.rev=o[1].reverse,i.pos=o[0].positive,console.log(e("cwb"," at my\\identity\\identity.vue:211")),console.log(e(o," at my\\identity\\identity.vue:212"))}})},upImgs:function(t,i){var o=this,a=this.global_.token;for(var s in t[i])console.log(e(s," at my\\identity\\identity.vue:221")),n.uploadFile({url:this.url+"realname/",filePath:t[i][s],name:s,header:{Authorization:"JWT "+a},formData:null,success:function(s){if(console.log(e("网络路径"," at my\\identity\\identity.vue:231")),console.log(e(s," at my\\identity\\identity.vue:232")),400==s.statusCode)return n.showToast({title:"图片太大，请重新上传",icon:"none",duration:2e3}),!1;i++,i==t.length?n.request({url:o.url+"realname/",method:"POST",data:{name:o.name,idcard:o.idcard},header:{Authorization:"JWT "+a},success:function(t){if(console.log(e(t," at my\\identity\\identity.vue:254")),400==t.statusCode)return n.showToast({title:"图片太大，请重新上传",icon:"none",duration:2e3}),!1;200==t.statusCode&&(console.log(e(o.shade," at my\\identity\\identity.vue:264")),o.shade=!0)}}):o.upImgs(t,i)},fail:function(t){console.log(e(t," at my\\identity\\identity.vue:274"))}})},submitt:function(){var t=this;if(console.log(e(t.pos," at my\\identity\\identity.vue:283")),console.log(e(t.rev," at my\\identity\\identity.vue:284")),!t.name)return n.showToast({title:"用户名不能为空",icon:"none"}),!1;if(!t.idcard)return n.showToast({title:"身份证号不能为空",icon:"none"}),!1;var i=o.checkIdcard(t.idcard);return i?2!==t.imgs.length?(n.showToast({title:"身份证照不全",icon:"none"}),!1):void t.upImgs(t.imgs,0):(n.showToast({title:"身份证格式不正确",icon:"none",duration:2e3}),!1)},sure:function(){console.log(e("等待审核"," at my\\identity\\identity.vue:320")),n.switchTab({url:"../my/my"})}}};t.default=a}).call(this,i("0de9")["default"],i("6e42")["default"])},"9ff0":function(e,t,i){"use strict";(function(e){i("9c0b"),i("921b");n(i("66fd"));var t=n(i("bcd0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},a19b:function(e,t,i){"use strict";var n=i("d488"),o=i.n(n);o.a},bcd0:function(e,t,i){"use strict";i.r(t);var n=i("8068"),o=i("ee6c");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("a19b");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},d488:function(e,t,i){},ee6c:function(e,t,i){"use strict";i.r(t);var n=i("826d"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a}},[["9ff0","common/runtime","common/vendor"]]]);