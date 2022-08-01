<template>
  <ul class="todo-main">
    <transition-group name="todoItem" appear>
      <MyItem v-for="todo in todos" :key="todo.id" :todoObj="todo"></MyItem>
    </transition-group>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  name: 'MyList',
  components: {
    MyItem
  },
  props: ['todos']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todoItem-enter-active {
  animation: atguigu 0.5s;
}

.todoItem-leave-active {
  animation: atguigu 0.5s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>