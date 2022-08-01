<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <router-link :to="{
          name: 'xiangqing',
          params: {
            id: m.id,
            title: m.title
          },
          query: {
            x: 123,
            y: 456
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      messageList: [
        { id: '001', title: 'message001' },
        { id: '002', title: 'message002' },
        { id: '003', title: 'message003' },
      ]
    }
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: 'xiangqing',
        params: {
          id: m.id,
          title: m.title
        },
        query: {
          x: 123,
          y: 456
        }
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'xiangqing',
        params: {
          id: m.id,
          title: m.title
        },
        query: {
          x: 123,
          y: 456
        }
      })
    }
  },
  /* beforeDestroy() {
    console.log('Message组件即将被销毁了')
  }, */
}
</script>