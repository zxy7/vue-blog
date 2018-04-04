<template>
  <div id="tags">
    <Header :head="head" :subhead="subhead" :isshowtags="isshowtags" :taglist="taglist">
    </Header>
    <div class="row">
        <div class="one-tag-list" v-for="item in taglist" :key="item.tagid">
          <span class="listing-seperator" id="'tags/'+{item.tagname}">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tag"></use>
            </svg>
            <span class="tag-text">{{item.tagname}}</span>
          </span>
          <div class="post-preview" v-if="item.tagid==classitem.tagid" v-for="classitem in classlist" :key="classitem.id">
            <a :href="'#/dairyinf/'+classitem.postid">
              <h2 class="post-title">「{{classitem.tagname}}」{{classitem.h1}}</h2>
              <h3 class="post-subtitle">{{classitem.h2}}</h3>
            </a>
            <hr />
          </div>
        </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Alltags from '@/components/Alltags'
import Footer from '@/components/Footer'
// 使用 Mock
var Mock = require('mockjs')
var Random = Mock.Random
export default {
  name: 'Tags',
  components: { Header, Alltags, Footer },
  data () {
    return {
      head: 'Tags',
      subhead: 'keep hungry keep foolish',
      isshowtags: Alltags,
      taglist: Mock.mock({
        'list|1-10': [{
          'tagid|+1': 1,
          'tagname': Random.title(1)
        }]
      }).list,
      classlist: Mock.mock({
        'list|1-20': [{
          'id|+1': 1,
          'tagid|+1': 1,
          'postid|+1': 1,
          'tagname': Random.title(1),
          'h1': Random.title(3, 6),
          'h2': Random.title(6, 15)
        }]
      }).list
    }
  }
}
</script>

<style lang="scss" scoped>
  #tags{
    .row{
      padding: 16px;
      max-width: 750px;
      margin: 0 auto;
      text-align:left;
      .listing-seperator {
        color: #0085a1;
        font-size: 21px!important;
      }
      .post-preview>a {
        color: #404040;

        .post-title {
          font-size: 16px;
          font-weight: 500;
          margin-top: 20px;
        }
        .post-subtitle {
          font-size: 12px;
          line-height: 1.3;
          margin: 0 0 10px;
          font-weight: 300;
        }
      }
    }
  }
  #navbar {
    background-image: url("../assets/tags.jpg");
  }
  a{
    background-color: rgb(85, 158, 196);
  }
</style>
