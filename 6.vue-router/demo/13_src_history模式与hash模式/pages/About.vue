<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
  // 通过路由规则，进行该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log('About--beforeRouteEnter', to, from)
    // 判断是否需要鉴权
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next() // 放行
      } else {
        alert("学校名不对，无权限查看！")
        return
      }
    }
    next() // 放行
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('About--beforeRouteLeave', to, from)
    next()
  }
}
</script>