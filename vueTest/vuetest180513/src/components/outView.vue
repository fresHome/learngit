<template>
  <div>
    父组件
    <i>{{number}}</i>
    <in-view :sendData="sendData" @son-change="getSonChange"></in-view>
  </div>
</template>

<script>
  import InView from './InView'

  export default {
    name: "out-view",
    data() {
      return {
        sendData:{
          message:'父组件传过来的信息'
        },
        number:1
      }
    },
    methods:{
      getSonChange(val){
        console.log(val);
        console.log('点击子组件了。')
      }
    },
    components: {
      InView
    }
  }
</script>

<style scoped>

</style>
