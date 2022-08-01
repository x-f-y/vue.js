<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <router-link :to="{
          name: 'xiangqing', // 注意：使用这种方式传递参数时，只能写name，不能写path
          params: {
            id: m.id,
            title: m.title
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