import Vue from "vue"
import App from "./App.vue"
Vue.config.productionTip = false

/* // 创建Demo组件
const Demo = Vue.extend({})
// 创建Demo组件的实例对象vc
const demo = new Demo()
// 向Vue的原型对象上添加d，其值为demo
Vue.prototype.d = demo */

new Vue({
    el: "#app",
    render: (h) => h(App),
    beforeCreate() {
        // 安装全局事件总线
        Vue.prototype.$bus = this
    },
})
