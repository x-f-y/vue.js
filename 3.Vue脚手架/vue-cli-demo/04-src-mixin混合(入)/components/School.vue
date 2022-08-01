<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// 引入mixin（局部引入）
import { mixin1, mixin2 } from '../mixin'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'School',
  data() {
    return {
      name: '尚硅谷',
      address: '北京',
      x: 777
    }
  },
  mixins: [mixin1, mixin2],
  mounted() {
    console.log("你好啊!!!!!!")
  }
}
</script>