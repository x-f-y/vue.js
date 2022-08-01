# 笔记

## Vue脚手架配置代理
> 方法一
在vue.config.js中添加如下配置
```javascript
devServer：{
    proxy: "http://localhost:5000" // proxy属性值是目标服务器的基础路径
}
```
说明：
1. 发送ajax请求的基础路径需要改成代理服务器的基础路径
2. 优点：配置简单，请求资源时直接发给前端（localhost:8080）即可
3. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
4. 工作方式：若按照上述配置代理，当请求了前端不存在的资源（public文件夹下没有的资源）时，那么该请求才会转发给服务器，如果public文件夹下有请求的目标资源，那么代理服务器将不会再将请求转发给目标服务器
> 方法二
编写vue.config.js配置具体代理规则
```javascript
devServer: {
	proxy: {
		'/api': { // 请求前缀，请求的url以/api开头时代理服务器才会将其转发到对应的服务器
			target: 'http://localhost:5000', // 目标服务器的基础路径
			pathRewrite: {'^/api': ''} // 代理服务器把请求转发给目标服务器时去除请求前缀
			wx: true // 用于支持websocket，默认值是true
			changeOrigin: true, // 用于控制请求头中host的值，该字段默认值是true
		},
		'/atguigu': {
			target: 'http://localhost:5000',
			pathRewrite: {'^/atguigu', ''}
		}
	}
}
/**
 * changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
 * changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
 * changeOrigiin默认值为true
 */ 
```
说明：
1. 发送ajax请求的基础路径需要改成代理服务器的基础路径，且要加上请求前缀 
2. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
3. 缺点：配置略微繁琐，请求资源时必须加前缀

## 插槽
1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件==>子组件
2. 分类：默认插槽、具名插槽、作用域插槽
3. 使用方式：
    1. 默认插槽
    ```vue
    <!-- 父组件中 -->
    <Category>
        <div>html结构1</div>
    </Category>
    <!-- 子组件中 -->
    <template>
    	<div>
            <!-- 定义插槽 -->
            <slot>插槽默认内容...</slot>
        </div>
    </template>
    ```
    2. 具名插槽
    ```vue
    <!-- 父组件中 -->
    <Category>
		<div slot="center">html结构1</div>
		<template slot="footer">
			<div>html结构2</div>
		</template>
		<!-- v-slot:footer只能用在template标签中（注意：template标签不是必须的，只是以v-slot:footer这种形式使用时必须使用template标签） -->
        <template v-slot:footer>
            <div>html结构3</div>
        </template>
    </Category>
    <!-- 子组件中 -->
    <template>
    	<div>
            <!-- 定义插槽 -->
            <slot name="center">插槽默认内容...</slot>
            <slot name="footer">插槽默认内容...</slot>
        </div>
    </template>
    ```
    3. 作用域插槽
        1. 理解：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Category组件中，但使用数据所遍历出来的结构由APP组件决定）
        2. 具体编码
        ```vue
        <!-- 父组件（组件的使用者）中 -->
        <Category>
			<!-- 2、使用scope或slot-scope进行接收（注意：必须使用template标签包起来） -->
            <template scope="scopeData">
                <!-- 生成的是ul列表 -->
                <ul>
                    <li v-for="g in scopeData.games" :key="g">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category>
			<!-- slot-scope和scope等价，只不过是新旧api的问题 -->
            <template slot-scope="scopeData">
                <!-- 生成的是h4标题 -->
                <li v-for="g in scopeData.games" :key="g">{{g}}</li>
            </template>
        </Category>
        <!-- 子组件（存放数据的组件）中 -->
        <template>
            <div>
				<!-- 1、给插槽的使用者传递数据 -->
                <slot :games="games"></slot>
            </div>
        </template>
        <script>
            export default {
                name: 'Category',
                // 数据在子组件自身
                data(){
                    return {
                        games: ['红色警戒','战狼','中国医生','发财日记']
                    }
                }
            }
        </script>
        ```

## 总结-最终出现在vm或vc上的属性或方法
- 属性：data computed props（属性）
- 方法：methods props（方法）

## 组件间通信
- 父给子传递数据-->父组件通过标签属性的方式给子组件传递数据，子组件需要使用props配置项接收
- 子给父传递数据-->父组件通过标签属性的方式给子组件传递一个函数，子组件需要使用props配置项接收并在合适的时机调用该函数并携带上要传递给父组件的数据
- 子给父传递数据-->组件自定义事件，接收数据的组件绑定自定义事件，发送数据的组件触发自定义事件，接受数据的组件最好在beforeDestroy钩子中解绑自定义事件
- 任意组件间通信-->全局事件总线
- 任意组件间通信-->消息订阅与发布
- 插槽给插槽的使用者传递数据-->存放数据的组件使用<slot :xxx="data"></slot>传递数据给组价的使用者，组件的使用者使用<template scope="xxx"></template>进行接收
- 多个组件共享数据-->vuex