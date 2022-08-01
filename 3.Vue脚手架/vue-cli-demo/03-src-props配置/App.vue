<template>
  <div>
    <!-- 传递的参数age是字符串"18" -->
    <!-- <Student name="李四" sex="女" age="18" /> -->
    <!-- 传递的参数age是数字18 因为:是动态绑定，引号里面是一个表达式 -->
    <Student name="李四" sex="女" :age="18" />
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  nama: 'App',
  components: {
    Student
  }
}
</script>