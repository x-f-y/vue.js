<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">发送学生名给School组件</button>
  </div>
</template>

<script>
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
      this.$bus.$emit('hello', this.name)
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