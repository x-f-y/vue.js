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
    mode: "history",
    routes: [
        {
            name: "zhuye",
            path: "/home",
            meta: { title: "主页" },
            component: Home,
            children: [
                {
                    name: "xinwen",
                    path: "news", // 注意：子路由没有“/”
                    component: News,
                    meta: { isAuth: true, title: "新闻" },
                },
                {
                    name: "xiaoxi",
                    path: "message", // 注意：子路由没有“/”
                    component: Message,
                    children: [
                        {
                            name: "xiangqing", // 给路由命名
                            path: "detail/:id/:title",
                            meta: { title: "详情" },
                            component: Detail,
                            // props的第一种写法：值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
                            /* props: {
                                a: 1,
                                b: 'hello'
                            } */

                            // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的params参数，以props的形式传给Detail组件
                            // props: true

                            // props的第三种写法：值为函数，这种方式既可用于传递query参数，也可用于传递params参数
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title,
                                    x: $route.query.x,
                                    y: $route.query.y,
                                }
                            },
                        },
                    ],
                    meta: { isAuth: true, title: "消息" },
                },
            ],
        },
        {
            name: "guanyu", // 给路由命名
            path: "/about",
            meta: { isAuth: true, title: "关于" },
            component: About,
        },
    ],
})
