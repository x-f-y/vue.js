# 笔记

## Vue脚手架(vue-cli)使用流程
Vue脚手架是Vue官方提供的标准化开发工具，其使用步骤如下：
1. 全局安装vue/cli
```
npm install -g @vue/cli
```
2. 切换到要创建项目的目录，然后运行如下命令
```
vue create 项目名称
```
3. 启动项目
```
npm run serve
```

## 其他
* npm run build 该命令对项目进行打包，只会在最后执行一次
* npm run lint 该命令用于对项目中的js和vue文件进行语法检查，一般很少用到
* npm view less-loader versions 查看less-loader的所有版本
* npm i less-loader@9 安装 less-loader 9的的最新版本

## 脚手架文件结构
```
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源，例如图片、视频等
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

## 关于不同版本的Vue
- vue.js与vue.runtime.xxx.js的区别：
    1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
    2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## ref属性
* 被用来给元素或子组件注册引用信息（id的替代者）
* 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
* 使用方式
    ```
    // 打标识
    <h1 ref="xxx"></h1>或<School ref="xxx"></School>
    // 获取
    this.$refs.xxx
    ```

## 配置项props
    功能：让组件接收外部传过来的数据
	注意：接收到的数据（包括属性和方法）最终都会出现在组件实例对象vc上
    (1)传递数据：
        <Demo name="xxx" />
    (2)接收数据：
        第一种方式（只接收）：
            props:['name']
        第二种方式（限制类型）：
            props:{
                name:String
            }
        第三种方式（限制类型、限制必要性、指定默认值）
            props:{
                name:{
                    type: String,
                    required: true,
                    default: '老王'
                }
            }
备注：props是只读的，Vue底层会监测对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据

## vue.config.js配置文件
+ 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
+ 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

## mixin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合，例如：
            export default {
                data(){...}
                methods:{...}
                ...
            }
        第二步使用混入，例如（先使用import引入混入）：
            （1）全局混入：Vue.mixin(xxx)
            （2）局部混入：mixins:[xxx]（配置项）

## 插件plugins
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue，第二个及以后的参数是插件使用者传递的数据
    定义插件：
		export default {
			// param1、param2...是Vue.use()传递的自定义参数（从第二个开始，第一个是引入的插件）
			install(Vue[, param1][, param2][...]){
				// 1. 添加全局过滤器
				Vue.filter(...)
				// 2 添加全局指令
				Vue.directive(...)
				// 3 配置全局混入（合）
				Vue.mixin(...)
				// 4 添加实例方法
				Vue.prototype.$myMethod = function(){...}
				Vue.prototype.$myProperty = xxx
			}
		}
    使用插件：
		import xxx from ...
		Vue.use(xxx) // 还可以传递其他自定义参数

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped></style>

## 总结TodoList案例
1. 组件化编码流程(关闭语法检查（修改vue.config.js文件后需要npm run serve重启项目），安装全局事件总线)：
    - 拆分静态组件：组件要按功能点拆分，命名不要与html元素冲突
    - 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用
        - 一个组件在用：放在组件自身即可
        - 一些组件在用：放在它们共同的父组件上（状态提升）
2. props适用于：
    - 父组件==>子组件 通信
    - 子组件==>父组件 （要求父先给子一个函数）
3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做

## webStorage
1. 存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2. 浏览器端通过`Window.sessionStorage`和`Window.localStorage`属性来实现本地存储机制
3. 相关API：
    1. `xxxStorage.setItem('key','value')`
        该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新对应的值
    2. `xxxStorage.getItem('key')`
        该方法接受一个键名作为参数，返回键名对应的值
    3. `xxxStorage.removeItem('key')`
        该方法接受一个键名作为参数，并把该键名对应的键值对从存储中删除
    4. `xxxStorage.clear()`
        该方法会清空存储中的所有数据
4. 备注：
    1. sessionStorage存储的内容会随着浏览器窗口的关闭而消失
    2. localStorage存储的内容，需要手动清除才会消失
    3. 通过xxxStorage存储的键值，浏览器会将它们转换为字符串类型
    4. 要想在浏览器的本地存储和会话存储中保存和读取对象或数组，可以调用`JSON.stringify()`和`JSON.parse()`方法
    5. `xxxStorage.getItem(xxx)`如果xxx对应的value获取不到，那么返回null
    6. `JSON.parse(null)`的结果依然是null

## 组件自定义事件
1. 一种组件间通信的方式，适用于子组件==>父组件
2. 使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3. 绑定自定义事件
    1. 第一种方式，在父组件中：`<Demo @atguigu="test"/>`或`<Demo v-on:atguigu="test"/>`
    2. 第二种方式，在父组件中：
    ```javascript
    <Demo ref="demo">
    ......
    mounted(){
        this.$refs.demo.$on('atguigu',this.test)
    }
    ```
    3. 若想让自定义事件只能触发一次，可以使用 once 事件修饰符，或 $once 方法
4. 触发自定义事件：`this.$emit('atguigu',数据)`
5. 解绑自定义事件：`this.$off('atguigu')`，如果要解绑多个事件，参数就是包含多个事件名的数组，如果不传参数，表示解绑所有的自定义事件
6. 组件上可以绑定原生DOM事件，需要使用 native 修饰符
7. 注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调要么配置在methods中，要么使用箭头函数，否则this就不再指向当前的组件实例对象，
   而是指向触发自定义事件的组件实例对象

## 全局事件总线（GlobalEventBus）
1. 一种组件间通信的方式，适用于任意组件间通信
2. 安装全局事件总线：
```javascript
new Vue({
    ......
    beforeCreate(){
        Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm
    }
    ......
})
```
3. 使用事件总线：
    1. 接受数据：A组件想接受数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
    ```javascript
    methods:{
        demo(data){ ...... }
    },
    ......
    mounted(){
        this.$bus.$on('事件名称',this.demo)
    }
    ```
    2. 提供数据：`this.$bus.$emit('事件名',要提供的数据)`
4. 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

## 消息订阅与发布
1. 一种组件间通信的方式，适用于任意组件间通信
2. 使用步骤
    1. 安装pubsub：`npm i pubsub-js`
    2. 引入：`import Pubsub from 'pubsub-js`
    3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身
    ```javascript
    methods:{
		// 第一个参数是消息名，第二个及以后的参数才是传递的数据
        demo(msgName,data){......}
    },
    ......
    mounted(){
		// 回调函数要么写成箭头函数，要么配置在methods中，否则this不再指向当前组件的组件实例对象
        this.pubId = Pubsub.subscribe('消息名称',this.demo) // 订阅消息
    }
    ```
    4. 提供数据：`Pubsub.publish('消息名称',数据) // 发布消息`
    5. 最好在beforeDestroy钩子中，用`Pubsub.unsubscribe(this.pubId)`去取消订阅

## nextTick
1. 语法：this.$nextTick(callbackFn)
2. 作用：在下一次DOM更新结束后执行其指定的回调
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue封装的过渡与动画
1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名

2. 图示：

    ![image-20220515224917564](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220515224917564.png)

3. 写法：
    1. 准备好样式
        - 元素进入的样式：
            1. v-enter：进入的起点
            2. v-enter-active：进入过程中
            3. v-enter-to：进入的终点
        - 元素离开的样式：
            1. v-leave：离开的起点
            2. v-leave-active：离开过程中
            3. v-leave-to：离开的终点
    2. 使用 `<transition>`(或`<transition-group>`) 包裹要过渡的元素，并配置name属性（配置了name属性，则样式中所有v换成name属性值）：
    ```html
    <transition name="hello" appear>
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
	<transition-group name="hello" appear>
	  <h1 v-show="!isShow" key="1">你好啊</h1>
	  <h1 v-show="isShow" key="2">尚硅谷</h1>
	</transition-group>
    ```
	3. 备注：给`<transition>`标签(或`<transition-group>`标签)添加`appear`属性表示在首次渲染页面的时候给`<transition>`标签里面的元素加上动画效果
    4. 备注：有多个元素需要过渡，则需要将 `<transition>` 替换为 `<transition-group>` ，且每个元素都要指定一个唯一的key值

