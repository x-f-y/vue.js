<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear属性表示首次渲染页面的时候给transition里面的元素加上动画效果 -->
    <!-- transition标签最终不会出现在DOM树中 -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: orange;
}
/* .v-enter-active {
  animation: atguigu 1s;
}
.v-leave-active {
  animation: atguigu 1s reverse;
} */
.hello-enter-active {
  animation: atguigu 1s;
}
.hello-leave-active {
  animation: atguigu 1s reverse;
}
@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>