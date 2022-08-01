<template>
  <li>
    <label>
      <!-- 当form元素的内容、选择的内容或选中的状态发生改变时，触发change事件 -->
      <input type="checkbox" :checked="todoObj.completed" @change="handleCheck(todoObj.id)" />
      <!-- 如下代码也能实现功能，但由于修改了props，有点违反原则，不太推荐使用 -->
      <!-- <input type="checkbox" v-model="todoObj.completed" /> -->
      <span v-show="!todoObj.isEdit">{{todoObj.name}}</span>
      <input v-show="todoObj.isEdit" type="text" :value="todoObj.name" @blur="handleBlur" @keyup.enter="handleBlur($event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
    <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="handleEdit">编辑</button>
  </li>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  name: 'MyItem',
  // 简单声明接收组件MyList传递过来的数据
  props: ['todoObj'],
  methods: {
    // 勾选or未勾选
    handleCheck(id) {
      // 通知App组件将id对应的todo的completed取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    // 删除
    handleDelete(id) {
      if (confirm('确认删除吗？')) {
        // this.deleteTodo(id)
        PubSub.publish('deleteTodo', id)
      }
    },
    // 编辑
    handleEdit() {
      // 判断todo是否有isEdit属性
      if (this.todoObj.hasOwnProperty('isEdit')) {
        this.todoObj.isEdit = true
      } else {
        this.$set(this.todoObj, 'isEdit', true)
      }
      /* setTimeout(() => {
        this.$refs.inputTitle.focus()
      }); */
      // $指定的回调会在DOM节点更新之后再执行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    // 失去焦点
    handleBlur(e) {
      this.todoObj.isEdit = false
      // 判断输入是否为空
      if (!e.target.value.trim()) {
        return alert('输入不能为空！')
      }
      this.$bus.$emit('updateTodo', this.todoObj.id, e.target.value)
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