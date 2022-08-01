<template>
  <div class="container">
    <h3>{{title}}分类</h3>
    <slot :games="games" msg="hello"></slot>
  </div>
</template>

<script>
export default {
  name: 'Catefory',
  props: ['title'],
  data() {
    return {
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
    }
  },
}
</script>

<style scoped>
.container {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>