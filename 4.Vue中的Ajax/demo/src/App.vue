<template>
  <div class="wrap">
    <Category title="游戏">
      <template scope="atguigu">
        <ul>
          <li v-for="(item,index) in atguigu.games" :key="index">{{item}}</li>
        </ul>
        <h4 style="text-align:center;">{{atguigu.msg}}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 解构赋值 -->
      <template scope="{games,msg}">
        <ol>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ol>
        <h4 style="text-align:center;">{{msg}}</h4>
      </template>
    </Category>
    <Category title="游戏">
      <!-- slot-scope和scope效果一样（新旧API） -->
      <template slot-scope="{games,msg}">
        <h4 style="text-align:center;" v-for="(item,index) in games" :key="index">{{item}}</h4>
        <h4 style="text-align:center;">{{msg}}</h4>
      </template>
    </Category>

  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style lang="css" scoped>
.wrap {
  display: flex;
  justify-content: space-around;
}
</style>