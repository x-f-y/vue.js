<template>
  <ul>
    <li>消息编号：{{id}}</li>
    <li>消息标题：{{title}}</li>
    <li>{{x}}</li>
    <li>{{y}}</li>

    <!-- <li>{{a}}</li>
    <li>{{b}}</li> -->
  </ul>
</template>

<script>
export default {
  name: 'Detail',
  // props: ['a','b'],
  props: ['id', 'title', 'x', 'y'],
  mounted() {
    console.log(this.$route)
  },
}
</script>