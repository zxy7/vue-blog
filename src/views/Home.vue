<template>
  <div class="hello">
  <Header> </Header>
  <PostItem> </PostItem>

  </div>
</template>

<script>
import Header from '@/components/Header'
import PostItem from '@/components/PostItem'
export default {
  name: 'Home',
  components: { Header, PostItem },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
