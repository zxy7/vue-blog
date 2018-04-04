<template>
  <div>
    <Header :head="head" :subhead="subhead"> </Header>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'Tags',
  components: { Header },
  data () {
    return {
      head: 'Tags',
      subhead: 'keep hungry keep foolish'
    }
  }
}
</script>

<style scoped>
  #navbar {
  background-image: url("../assets/tags.jpg");
  }
</style>
