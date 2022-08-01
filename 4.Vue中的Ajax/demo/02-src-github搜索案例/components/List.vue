<template>
  <div class="row">
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用!</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中...</h1>
    <!-- 展示用户列表 -->
    <div v-show="info.users.length" class="card" v-for="item in info.users" :key="item.id">
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style='width: 100px' />
      </a>
      <p class="card-text">{{item.login}}</p>
    </div>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">出错了，错误的原因是：{{info.errMsg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      info: {
        users: [], // 用户列表
        isFirst: true, // 是否是初次展示
        isLoading: false, // 是否正在加载
        errMsg: '' // 错误信息
      }
    }
  },
  mounted() {
    // 接受Search传过来的数据
    this.$bus.$on('updataListData', infoObj => {
      // 对象合并
      Object.assign(this.info, infoObj)
    })
  },
  beforeDestroy() {
    // 销毁前解绑自定义事件
    this.$bus.$off('getData')
  },
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>