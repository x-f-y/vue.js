<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">发送学生名给School组件</button>
  </div>
</template>

<script>
// 引入pubsub-js(用于消息订阅与发布)
import pubsub from 'pubsub-js'

export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男'
    }
  },
  methods: {
    sendStudentName() {
      // 消息的提供者发布消息
      pubsub.publish('hello', this.name)
    }
  },
}
</script>
<style scoped>
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 20px;
}
</style>