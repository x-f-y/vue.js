<template>
  <div>
    <!-- ref属性类似于html的id属性，用来标识一个dom元素 -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  nama: 'App',
  components: {
    School
  },
  data() {
    return {
      msg: '欢迎学习Vue'
    }
  },
  methods: {
    showDom() {
      console.log(this)  // App组件实例对象
      console.log(this.$refs.title) // <h1>欢迎学习Vue</h1>
      console.log(this.$refs.btn) // <button>点我输出上方的DOM元素</button>
      console.log(this.$refs.sch) // School组件实例对象
    }
  },
}
</script>