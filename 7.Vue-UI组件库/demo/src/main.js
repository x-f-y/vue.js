import Vue from "vue"
import App from "./App.vue"

/* 完整引入 1 2 3 4 */
// 1. npm i element-ui
// 2. 引入ElementUI组件库
// import ElementUI from "element-ui"
// 3. 引入ElementUI的全部样式
// import "element-ui/lib/theme-chalk/index.css"

/* 按需引入 ① ② ③ ④ */
// ① npm i babel-plugin-component -D
// ② 配置babel.config.js文件
// ③ import {...} from 'element-ui'
import { Button, DatePicker } from "element-ui"

Vue.config.productionTip = false

// 4. 应用ElementUI
// Vue.use(ElementUI)

// ④ 全局注册组件
Vue.component(Button.name, Button)
Vue.component(DatePicker.name, DatePicker)

new Vue({
    render: (h) => h(App),
}).$mount("#app")
