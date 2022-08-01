<template>
  <div>
    <button @click="getStudents">读取学生信息</button>
    <button @click="getCars">读取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudents() {
      // 发送ajax请求
      axios.get('http://localhost:8080/api1/students').then(
        response => {
          // response.data才是服务器端真正返回的数据
          console.log(response.data)
        },
        err => {
          console.log(err.message)
        }
      )
    },
    getCars() {
      // 发送ajax请求
      axios.get('http://localhost:8080/api2/cars').then(
        response => {
          console.log(response.data)
        },
        err => {
          console.log(err.message)
        }
      )
    }
  },
}
</script>

<style>
</style>
