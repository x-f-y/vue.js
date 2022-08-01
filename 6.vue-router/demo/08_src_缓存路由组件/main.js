import Vue from "vue"
import App from "./App.vue"
// 引入vue-router插件
import VueRouter from "vue-router"
// 引入路由器
import router from "./router"

Vue.config.productionTip = false
// 应用vue-router插件
Vue.use(VueRouter)

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app")
