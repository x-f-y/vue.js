<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{completedTodo}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearFinished">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  computed: {
    completedTodo() {
      // 使用reduce函数做条件统计
      /* const total = this.todos.reduce((pre, current) => {
        return pre + (current.completed ? 1 : 0)
      }, 0)
      return total */
      return this.todos.reduce((pre, current) => pre + (current.completed ? 1 : 0), 0)
    },
    total() {
      return this.todos.length
    },
    /* isAll() {
      return this.completedTodo === this.total && this.total > 0
    } */
    isAll: {
      get() {
        return this.completedTodo === this.total && this.total > 0
      },
      set(value) {
        // console.log(value)
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo', value)
      }
    }
  },
  methods: {
    /* checkAll(e) {
      this.checkAllTodo(e.target.checked)
    } */
    clearFinished() {
      // this.clearFinishedTodo()
      this.$emit('clearFinishedTodo')
    }
  },
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>