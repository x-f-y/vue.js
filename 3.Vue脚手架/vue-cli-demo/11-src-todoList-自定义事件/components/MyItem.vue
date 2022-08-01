<template>
  <li>
    <label>
      <!-- 当form元素的内容、选择的内容或选中的状态发生改变时，触发change事件 -->
      <input type="checkbox" :checked="todoObj.completed" @change="handleCheck(todoObj.id)" />
      <!-- 如下代码也能实现功能，但由于修改了props，有点违反原则，不太推荐使用 -->
      <!-- <input type="checkbox" v-model="todoObj.completed" /> -->
      <span>{{todoObj.name}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  // 简单声明接收组件MyList传递过来的数据
  props: ['todoObj', 'checkTodo', 'deleteTodo'],
  methods: {
    // 勾选or未勾选
    handleCheck(id) {
      // 通知App组件将id对应的todo的completed取反
      this.checkTodo(id)
    },
    // 删除
    handleDelete(id) {
      if (confirm('确认删除吗？')) {
        this.deleteTodo(id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>