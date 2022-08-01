// 该文件专门用于创建整个应用的路由器

// 引入vue-router
import VueRouter from "vue-router"
// 引入组件
import Home from "../components/Home"
import About from "../components/About"

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
    ],
})
