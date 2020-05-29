import Vue from 'vue'
import App from './App'
import Global from './components/global.vue' //引用文件
Vue.config.productionTip = false;
Vue.prototype.global_ = Global; //挂载到vue实例上面
// 120.243.177.199
//Vue.prototype.url='http://192.168.1.208:8000/api/v2/'
//Vue.prototype.url='http://192.168.1.218/api/v2/'
//Vue.prototype.url = 'https://api.ipcn.xyz/api/v2/'
// Vue.prototype.urll = 'https://api.ipcn.xyz/media/'
// Vue.prototype.url='http://47.102.112.106/api/v2/'
//Vue.prototype.url = 'http://47.103.215.235:8080/api/v2/'
// Vue.prototype.urll = 'http://47.103.215.235:8080/media/'
// Vue.prototype.url = 'https://t.api.ipcn.xyz/api/v2/'
//正式服务器
Vue.prototype.url = 'https://api.ipcn.xyz/api/v1/'
Vue.prototype.urla = 'https://api.ipcn.xyz/'
//测试域名
// Vue.prototype.url = 'https://apitest.ipcn.xyz/api/v1/'
// Vue.prototype.urla = 'https://apitest.ipcn.xyz/'
App.mpType = 'app'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

const app = new Vue({
	...App
})
app.$mount()



