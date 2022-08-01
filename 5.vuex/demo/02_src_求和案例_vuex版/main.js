import Vue from "vue"
import App from "./App.vue"
// 引入store
import store from "./store"

Vue.config.productionTip = false

// 注意：import会有变量提升效果，运行js文件时，不管import语句的位置在哪，首先执行import语句

// 安装了vuex插件之后，在创建vm时就可以传入store这个配置项了
const vm = new Vue({
    render: (h) => h(App),
    store,
}).$mount("#app")
// console.log(vm)
