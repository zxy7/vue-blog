<template>
  <div>
  <Header :head="head" :subhead="subhead"> </Header>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'About',
  components: { Header },
  data () {
    return {
      head: 'About',
      subhead: "it's me"
    }
  }
}
</script>

<style scoped>

#navbar {
  /*background-image: url("../assets/a.jpg");*/
}

</style>
