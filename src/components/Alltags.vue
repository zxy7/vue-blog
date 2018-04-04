<template>
    <div id="tag_cloud" class="tags">
        <a v-for="item in taglist" :key="item.tagid" :href="'#tags/'+item.tagname" :title="item.tagname" rel="item.tagid">{{item.tagname}}</a>
    </div>
</template>

<script>
export default {
  name: 'Alltags',
  props: {
    taglist: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
    #tag_cloud a {
        font-size: 14px;
        border: none;
        line-height: 28px;
        margin: 0 2px 8px;
        background-color: rgb(85, 158, 196);
        display: inline-block;
        border-radius: 999em;
        padding: 0 10px;
        color: #fff;
        text-decoration: none;
    }

</style>
