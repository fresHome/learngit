<template>
  <div class="inview">
    子组件
    <p>{{sendData.message}}</p>
    <h4>子传父</h4>
    <button @click="$emit('son-change','这是儿子抛出的值')">子传父触发按钮</button>
  </div>
</template>

<script>
  export default {
    name: "in-view",
    props: ['sendData'],
    methods: {
      handleClick() {

      }
    }
  }
</script>

<style scoped>
  .inview {
    background: lightgray;
  }
</style>
