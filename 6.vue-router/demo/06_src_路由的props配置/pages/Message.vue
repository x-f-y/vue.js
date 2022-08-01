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
}
</script>