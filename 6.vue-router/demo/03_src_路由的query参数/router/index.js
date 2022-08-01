// 该文件专门用于创建整个应用的路由器

// 引入vue-router
import VueRouter from "vue-router"
// 引入组件
import Home from "../pages/Home"
import About from "../pages/About"
import Message from "../pages/Message"
import News from "../pages/News"
import Detail from "../pages/Detail"

// 创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "news", // 注意：子路由没有“/”
                    component: News,
                },
                {
                    path: "message", // 注意：子路由没有“/”
                    component: Message,
                    children: [
                        {
                            path: "detail",
                            component: Detail,
                        },
                    ],
                },
            ],
        },
        {
            path: "/about",
            component: About,
        },
    ],
})
