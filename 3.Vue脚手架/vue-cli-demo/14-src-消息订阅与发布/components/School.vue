<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入pubsub-js(用于消息订阅与发布)
import pubsub from 'pubsub-js'

export default {
  name: 'School',
  data() {
    return {
      name: '尚硅谷atguigu',
      address: '北京'
    }
  },
  methods: {
    demo(msgName, data) {
      console.log(this) // 这里的this是当前组件实例对象vc
      console.log('有人发布了' + msgName + '消息，School组件接收到了消息：', data)
    }
  },
  mounted() {
    // 数据的接受者订阅消息
    // 回调函数的第一个参数是消息名，第二个参数才是订阅的消息数据
    /* this.pubId = pubsub.subscribe('hello', function (msgName, data) {
      console.log(this) // 这里的this是undefined
      console.log('有人发布了' + msgName + '消息，School组件接收到了消息：', data)
    }) */
    /* this.pubId = pubsub.subscribe('hello', (msgName, data) => {
      console.log(this) // 这里的this是当前组件实例对象vc
      console.log('有人发布了' + msgName + '消息，School组件接收到了消息：', data)
    }) */
    this.pubId = pubsub.subscribe('hello', this.demo)
  },
  beforeDestroy() {
    // 组件销毁前取消订阅消息
    pubsub.unsubscribe(this.pubId)
  },
}
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>