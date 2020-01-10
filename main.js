import Vue from 'vue'
import App from './App'
import Global from './components/global.vue' //引用文件
Vue.config.productionTip = false;
Vue.prototype.global_ = Global; //挂载到vue实例上面

//Vue.prototype.url='http://192.168.1.208:8000/api/v1.1.0/'
//Vue.prototype.urll='http://192.168.1.218/api/v1.1.0/'
//Vue.prototype.url = 'https://t.api.ipcn.xyz/api/v1.1.0/'
Vue.prototype.urll = 'https://t.api.ipcn.xyz/media/'
//Vue.prototype.url='http://47.102.112.106/api/v1.1.0/'
Vue.prototype.url = 'http://47.103.215.235:8080/api/v1.1.0/'
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()


function clear() {
	uni.removeStorageSync('token');
	uni.removeStorageSync('phone');
}
setInterval(clear, 2592000);
