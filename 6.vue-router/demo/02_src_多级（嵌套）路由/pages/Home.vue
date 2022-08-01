<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 注意：跳转要写完整路径 -->
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- 注意：跳转要写完整路径 -->
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  /* mounted() {
    console.log('Home组件挂载完毕了', this) // this(Home组件实例对象)中多了两个属性$route和$router
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  }, */
  /* beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }, */
}
</script>