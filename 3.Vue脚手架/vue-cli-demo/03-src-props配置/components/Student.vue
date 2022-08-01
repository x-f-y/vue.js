<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <!-- <h2>学生年龄：{{age + 1}}</h2> -->
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Student',
  data() {
    return {
      msg: '我是一名学生',
      myAge: this.age // props中的数据比data中的数据更先出现在vc上
    }
  },
  methods: {
    updateAge() {
      // eslint-disable-next-line vue/no-mutating-props
      // this.age++ // 可以起到修改收到的年龄的作用，但是控制台会报错，解决方法如下：
      this.myAge++
    }
  },
  // 简单声明接收 （接收到的数据和data中的数据最终都会出现在组件实例对象上，但接收到的数据优先级更高）
  props: ['name', 'age', 'sex']
  // 接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number,
    sex: String
  } */
  // 接收的同时对数据进行：类型限制+必要性限制+指定默认值 
  /* props: {
    name: {
      type: String,
      required: true // name是必需的
    },
    age: {
      type: Number,
      default: 99 //默认值
    },
    sex: {
      type: String,
      required: true
    }
  } */
}
</script>