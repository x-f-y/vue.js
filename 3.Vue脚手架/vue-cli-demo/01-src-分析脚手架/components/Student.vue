<template>
    <div>
        <!-- <v + tab 快速创建vue单文件组件模板 -->
        <h2>学生姓名：{{ name }}</h2>
        <h2 class="studentAge">学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Student",
    data() {
        return {
            name: "张三",
            age: 18,
        };
    },
};
</script>

<style>
.studentAge {
    background-color: pink;
}
</style>