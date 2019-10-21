import Vue from 'vue'//导入vue核心包 
import App from './App'//导入App.vue的vue对象
//import mintUI from 'mint-ui';//导入mint-ui核心包
//import 'mint-ui/lib/style.css'
//Vue.use(mintUI);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
