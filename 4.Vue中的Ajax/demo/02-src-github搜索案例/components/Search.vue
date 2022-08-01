<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '' // 用户输入的关键字
    }
  },
  methods: {
    // 点击Search时触发
    searchUsers() {
      //发送请求
      /* axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response => {
          console.log(response.data)
        },
        err => {
          console.log(err.message)
        }
      ) */
      // 请求前更新数据
      this.$bus.$emit('updataListData', {
        isFirst: false,
        isLoading: true
      })
      axios.get('https://api.github.com/search/users', {
        params: {
          q: this.keyWord
        }
      }).then(
        response => {
          // console.log(response.data)
          // 请求成功后更新数据
          this.$bus.$emit('updataListData', {
            isLoading: false,
            users: response.data.items
          })
        },
        err => {
          console.log(err.message)
          // 请求失败后更新数据
          this.$bus.$emit('updataListData', {
            isLoading: false,
            errMsg: err.message
          })
        }
      )
    }
  }
}
</script>