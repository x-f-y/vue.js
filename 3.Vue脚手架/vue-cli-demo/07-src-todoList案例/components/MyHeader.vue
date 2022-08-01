<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputValue" @keyup.enter="add" />
  </div>
</template>

<script>
// 导入nanoid （专门用来生成一个唯一的id）
import { nanoid } from 'nanoid'

export default {
  name: 'MyHeader',
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    add() {
      // 校验输入
      if (!this.inputValue.trim()) {
        return alert('输入不能为空')
      }
      // 得到一个唯一的id
      const singleId = nanoid()
      // 包装成一个对象
      const todoObj = { id: singleId, name: this.inputValue, completed: false }
      // console.log(todoObj)
      // 通知App组件添加一个todo对象
      this.receive(todoObj)
      // 添加todo之后清空输入框
      this.inputValue = ''
    }
  },
  props: ['receive'],
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>