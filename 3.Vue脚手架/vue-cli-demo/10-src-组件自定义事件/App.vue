<template>
  <div class="app">
    <h1>{{msg}}学生姓名是：{{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on:) -->
    <!-- <Student v-on:atguigu="getStudentName" @demo="m1" /> -->
    <!-- .once是事件修饰符，表示只触发一次 -->
    <!-- <Student v-on:atguigu.once="getStudentName" /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <!-- .native是事件修饰符，表示click是原生的dom事件，如果不加.native，则Vue会将click解析成自定义事件 -->
    <Student ref="stu" @click.native="show" />
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  nama: 'App',
  components: {
    Student,
    School
  },
  data() {
    return {
      msg: '你好啊！',
      studentName: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('App组件收到了学校名：', name)
    },
    /* getStudentName(name, ...params) {
      console.log('App组件收到了学生名：', name, params)
      this.studentName = name
    }, */
    m1() {
      console.log('demo事件被触发了')
    },
    show() {
      alert(123)
    }
  },
  mounted() {
    // this.$refs.stu.$on('atguigu', this.getStudentName) // 绑定自定义事件
    /* this.$refs.stu.$on('atguigu', function (name, ...params) {
      console.log(this) // 这里的this是Student组件实例对象（因为是Student组件触发的atguigu事件）
      this.studentName = name
    }) */
    this.$refs.stu.$on('atguigu', (name, ...params) => {
      // console.log(this) // 这里的this是App组件实例对象
      this.studentName = name
    })
    // this.$refs.stu.$once('atguigu', this.getStudentName) // 绑定自定义事件 只触发一次
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>