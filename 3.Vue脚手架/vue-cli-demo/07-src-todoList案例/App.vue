<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :receive="receive"></MyHeader>
        <MyList :todos="todoList" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todos="todoList" :checkAllTodo="checkAllTodo" :clearFinishedTodo="clearFinishedTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  nama: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      todoList: [
        { id: '001', name: '抽烟', completed: true },
        { id: '002', name: '喝酒', completed: false },
        { id: '003', name: '烫头', completed: false },
      ]
    }
  },
  methods: {
    // 添加一个todo
    receive(todoObj) {
      this.todoList.unshift(todoObj)
    },
    // 勾选or未勾选一个todo
    checkTodo(id) {
      this.todoList.forEach(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
      })
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todoList = this.todoList.filter(item => item.id !== id)
    },
    // 全选or取消全选
    checkAllTodo(status) {
      this.todoList.forEach(item => {
        item.completed = status
      })
    },
    // 清除所有勾选的todo
    clearFinishedTodo() {
      this.todoList = this.todoList.filter(item => {
        return !item.completed
      })
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>