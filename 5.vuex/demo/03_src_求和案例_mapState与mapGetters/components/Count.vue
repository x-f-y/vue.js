<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      step: 1
    }
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据（对象写法）
    /* ...mapState({
      'sum': 'sum',// 属性名的引号可以省略，属性值的引号不能省略
      school: 'school',
      subject: 'subject'
    }), */

    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState(['sum', 'school', 'subject']),

    // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
    /* ...mapGetters({
      bigSum: 'bigSum'
    }), */

    // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      this.$store.commit('JIA', this.step)
    },
    decrement() {
      this.$store.commit('JIAN', this.step)
    },
    incrementOdd() {
      this.$store.dispatch('jiaOdd', this.step)
    },
    incrementWait() {
      this.$store.dispatch('jiaWait', this.step)
    },
  },
  /* mounted(){
    console.log(this)
  } */
}
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>
