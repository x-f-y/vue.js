<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>number的值为{{number}}</h2>
    <button @click="add">点我number+1</button>
    <button @click="sendStudentName">把学生名给APP</button>
    <button @click="unbind">解绑atguigu事件</button>
    <button @click="death">销毁当前Student实例对象vc</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      sex: '男',
      number: 0
    }
  },
  methods: {
    add() {
      console.log('调用了add函数')
      this.number++
    },
    sendStudentName() {
      // 触发Student组件实例对象身上的atguigu事件
      this.$emit('atguigu', this.name, 666, 999, 100)
      // this.$emit('demo')
    },
    unbind() {
      this.$off('atguigu') // 解绑一个自定义事件
      // this.$off(['atguigu', 'demo']) // 解绑多个自定义事件
      // this.$off() // 解绑所有的自定义事件
    },
    death() {
      // 销毁当前Student组件实例对象，销毁后该组件实例对象上的所有自定义事件全都失效，不会再被触发了
      // 但原生dom事件（如add事件）还没失效，还会被触发，只是没有响应式了（视图不更新）
      this.$destroy()
    }
  },
}
</script>
<style scoped lang="less">
.student {
  background-color: orange;
  padding: 5px;
  margin-top: 20px;
}
</style>