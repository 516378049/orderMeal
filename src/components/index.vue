<template>
  <div class="index" v-on:click="testAlert('1')">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>

  import foot from '@/components/foot'
  
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      testAlert: function (text) {
        //alert(text)
      }
    },
    components: {
      foot
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  
</style>
