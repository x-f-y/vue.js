# 笔记

## 路由
1. 理解：一个路由（route）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理
2. 前端路由：key是路径，value是组件
3. 后端路由：key是路径，value是函数
4. 路由的基本使用：
    1. 安装vue-router，命令：`npm i vue-router@3`(注意：和vuex一样，vue2中最高支持vue-router3版本)
    2. 编写router配置项（创建router/index.js文件）：
    ```js
    // 引入VueRouter
    import VueRouter from 'vue-router'
    // 引入组件
    import About from '../components/About'
    import Home from '../components/Home'
    // 创建并暴露router实例对象，去管理一组一组的路由规则
    export default new VueRouter({
        routes: [
            {
                path: '/about',
                component: About
            },
            {
                path: '/home',
                component: Home
            }
        ]
    })
    ```
	3. 在main.js中创建vm时传入store配置项
	```js
	...
	import VueRouter from 'vue-router'
	import router from './router'
	...
	Vue.use(VueRouter) // 进行这个操作后，在new Vue()时就可以传入router配置项
	new Vue({
		render: h => h(App),
		router
	}).$mount('#app')
	```
	注意：完成此步操作后，在浏览器的地址栏就可以看到'#'，说明vue-router开始工作了
    4. 实现切换（可用active-class配置高亮样式）
    `<router-link active-class="active" to="/about">About</router-link>`
	注意：<router-link>标签最终也会转换为a标签
    5. 指定展示位置
    `<router-view></router-view>`
	6. 过程：使用router-link标签改变地址栏的路径，地址栏路径的修改被vue-router监测到，自动去router/index.js中查找匹配的组件，
	并将其渲染到router-view标签的位置

## 几个注意点
1. 路由组件通常存放在src/pages文件夹下，一般组件通常存放在src/components文件夹下
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载
3. 路由组件的实例对象比普通组件的实例对象多了$route和$router两个属性
4. 每个路由组件的$route属性都是不一样的，里面存储着自己的路由信息
5. 每个路由组件的$router属性都是一样的，里面保存着路由器的相关信息（即整个应用只有一个router）

## 多级(嵌套)路由
1. 配置路由规则，使用children配置项
```js
routes: [
    {
        path: '/about',
        component: About
    },
    {
        path: '/home',
        component: Home,
        children: [ // 通过children配置子路由
            {
                path: 'news', // 此处一定不要写：/news
                component: News
            },
            {
                path: 'message', // 此处一定不要写：/message
                component: Message
            }
        ]
    }
]
```
2. 跳转（要写完整路径）
`<router-link active-class="active" to="/home/news">News</router-link>`
注意：`active-class="active"`表示该router-link被选中时，自动为其加上active类名

## 路由的query参数
1. 传递参数
```html
<!-- 跳转路由并携带query参数，to的字符串写法 -->
<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">跳转</router-link>
<!-- 跳转路由并携带query参数，to的对象写法 -->
<router-link :to="{
    path: '/home/message/detail',
    query: {
		id: m.id,
		title: m.title
    }
}">跳转</router-link>
```
2. 接收参数
`$route.query.id`
`$route.query.title`

## 命名路由
1. 作用：可以简化路由的跳转
2. 如何使用
    1. 给路由命名：
    ```js
    {
        path: '/demo',
        component: Demo,
        children: [
            {
                path: 'test',
                component: Test,
                children: [
                    {
                        name: 'hello', // 给路由命名
                        path: 'welcome',
                        component: Hello
                    }
                ]
            }
        ]
    }
    ```
    2. 简化跳转
    ```html
    <!-- 简化前，需要写完整的路径 -->
    <router-link to="/demo/test/welcome">跳转</router-link>
    <!-- 简化后，直接通过命名跳转 -->
    <router-link :to="{name:'hello'}">跳转</router-link>
    <!-- 简化写法配合传递参数 -->
    <router-link :to="{
        name: 'hello', // 不再使用path配置项，而是使用name配置项代替
        query: {
            id: 666,
            title: '你好'
        }
    }">跳转</router-link>
    ```
	注意：如果使用命名路由，则<router-link>标签的to属性必须写成对象形式

## 路由的params参数
1. 配置路由，声明接收params参数
```js
{
    path: '/home',
    component: Home,
    children: [
        {
            path: 'news',
            component: News
        },
        {
            path: 'message',
            component: Message,
            children: [
                {
                    name: 'xiangqing',
                    path: 'detail/:id/:title', // 使用占位符声明接收params参数
                    component: Detail
                }
            ]
        }
    ]
}
```
2. 传递参数
```html
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="`/home/message/detail/${m.id}/${m.title}`">跳转</router-link>
<!-- 跳转并携带params参数，to的对象写法 -->
<router-link :to="{
    name: 'xiangqing', // 这里不能写path配置项
    params: {
        id: m.id,
        title: m.title
    }
}">跳转</router-link>
```
> 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！
3. 接收参数
`$route.params.id`
`$route.params.title`

## 路由的props配置
作用：让路由组件更方便的收到参数
```js
{
    name: 'xiangqing',
    path: 'detail/:id',
    component: Detail,
    // 第一种写法：值为对象，该对象中的所有key-value都会以props的形式传给Detail组件（值是静态的）
    // props: { a: 1 }
    // 第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的params参数以props的形式传给Detail组件（在Detail组件中需要使用props配置项接收）
    // props: true
    // 第三种写法：值为函数，这种方式既可用于传递query参数，也可用于传递params参数。
    // 这种方式返回的对象中每一组key-value都会以props的形式传递给Detail组件（在Detail组件中需要使用props配置项接收）
    props($route) {
        return {
            id: $route.params.id,
            title: $route.params.title,
            x: $route.query.x,
            y: $route.query.y,
        }
    },
}
```

## `<router-link>`的replace属性
1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为push模式和replace模式。push是在当前栈顶追加历史记录，replace是替换掉当前栈顶的历史记录。路由跳转时默认是push模式
3. 如何开启replace模式：`<router-link replace ...>跳转</router-link>`

## 编程式路由导航
1. 作用：不借助router-link实现路由跳转，让路由跳转更加灵活
2. 具体编码：
```js
this.$router.push({
    path: '/about/news/demo'
    params: {
        id: m.id,
        title: m.title
    },
    query: {
        x: 123,
        y: 456
    }
})
this.$router.replace({
    name: 'xiangqing',
    params: {
        id: m.id,
        title: m.title
    },
    query: {
        x: 123,
        y: 456
    }
})
this.$router.back() // 后退
this.$router.forward() // 前进
this.$router.go(2) // 可前进可后退（正数为前进，负数为后退）
```

## 缓存路由组件
1. 作用：让不展示的路由组件保持挂载，不被销毁
2. 具体编码：
```html
<!-- include属性是要缓存的组件名 -->
<!-- 缓存单个组件 -->
<keep-alive include="News">
    <router-view></router-view>
</keep-alive>
<!-- 缓存多个组件 -->
<keep-alive :include="[News, Message]">
    <router-view></router-view>
</keep-alive>
```

## 两个新的生命周期钩子
1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
2. 具体名字：
    1. activated 路由组件被激活时触发（看到组件）
    2. deactivated 路由组件失活时触发（看不到组件）
3. 注意：activated和deactivated是配合keep-alive一起使用的

## 路由守卫
1. 作用：对路由进行权限控制
2. 分类：全局守卫、独享守卫、组件内守卫
3. 全局守卫：
```js
const router = new VueRouter({})
// 全局前置守卫：初始化时和每次路由切换前执行
router.beforeEach((to, from, next) => {
    if(to.meta.isAuth){ // 判断当前路由是否需要进行权限控制
        if(localStorage.getItem('school') === 'atguigu'){
            next() // 放行
        }else{
            alert('暂无权限查看')
        }
    }else{
        next()
    }
})
// 全局后置守卫：初始化时和每次路由切换后执行
router.afterEach((to, from) => {
	document.title = to.meta.title || 'vue_test' // 修改网页的title
})
export default router
```
4. 独享守卫：
注意：独享路由守卫没有后置，只有前置
```js
path: '/demo',
component: Demo,
    ...
beforeEnter(to, from, next){ // 进入当前组件时调用
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){
            next()
        }else{
            alert('无权限查看')
        }
    }else{
        next()
    }
}
```
5. 组件内守卫：
```js
name: 'About',
data(){
	return {
		name: 'zs'
	}
}
    ...
// 进入守卫：通过路由规则，进入该组件之前被调用
beforeRouteEnter(to, from , next){}
// 离开守卫：通过路由规则，离开该组件之前被调用
beforeRouteLeave(to, from, next){}
    ...
```

## 路由器的两种工作模式
1. 对于一个url来说，什么是hash值？———— #及其后面的内容就是hash值
2. hash值不会包含在HTTP请求中，即：hash值不会带给服务器
3. hash模式：
    1. 地址中永远带着#号，不美观
    2. 若以后将地址通过第三方手机app共享，若app校验严格，则地址会被标记为不合法
    3. 兼容性较好
4. history模式：
	1. 如果开启history模式？
		在new VueRouter({})时传入配置项mode(与routes同级)，值为"history"，默认是hash模式，即该值为"hash"
    2. 地址干净、美观
    3. 兼容性和hash模式相比略差
    4. 存在的问题：应用打包部署上线后需要后端人员支持，解决刷新页面服务端404的问题
		一种解决方案（使用nodejs搭建的服务器）：
		```js
		npm i connect-history-api-fallback 
		const history = require('connect-history-api-fallback')
		app.use(history())
		```