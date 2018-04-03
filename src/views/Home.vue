<template>
  <div class="hello">
    <Header> </Header>
    <div class="postListItem"  v-for="item in postList" :key="item.id">
      <PostItem :title="item.title" :subtitle="item.subtitle" :preview="item.preview" :meta="item.meta"> </PostItem>
      <hr/>
    </div>

    <router-link class="more right" to="home/2">
      Older Posts →
    </router-link>
    <Footer> </Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import PostItem from '@/components/PostItem'
import Footer from '@/components/Footer'
// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random
var data = Mock.mock({
  'list|1-4': [{
    'id|+1': 1,
    'title': Random.title(3, 5),
    'subtitle': Random.title(6, 15),
    'preview': Random.cparagraph(),
    'meta': Random.date('M  d, yyyy')
  }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
export default {
  name: 'Home',
  components: { Header, PostItem, Footer },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      postList: data.list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postListItem{
  padding: 0 16px;
  max-width: 750px;
  margin: 0 auto;
}
.more{
  height: 50px;
  text-transform: uppercase;
  color: #404040;
  margin-right: 16px;
}
</style>
