import Vue from "vue"
import App from "./App.vue"
// 引入vue-resource插件库
import vueResource from "vue-resource"

Vue.config.productionTip = false
// 使用vue-resource插件库
Vue.use(vueResource)

new Vue({
    render: (h) => h(App),
    // 安装全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
}).$mount("#app")
