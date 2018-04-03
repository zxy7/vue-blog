<template>
    <div class="footer" >
        <ul class="inline">
            <li v-for="item in info" :key="item.key">
                <a target="_blank" :href="item.address">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.iconname"></use>
                    </svg>
                </a>
            </li>
        </ul>
        <p>
            Copyright &copy;Zxy Blog 2017
            <br /> Theme by
            <a href="https://github.com/zxy7">Zxy</a>
        </p>
    </div>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      info: [
        {address: 'http://www.zhihu.com/people/zzz-49-4-35/activities', iconname: '#icon-zhihu0'},
        {address: 'http://weibo.com/u/5048920080', iconname: '#icon-weibo'},
        {address: 'https://www.facebook.com/zxy7', iconname: '#icon-facebookfacebook52'},
        {address: 'https://github.com/zxy7', iconname: '#icon-github'}
      ]
    }
  }
}
</script>
<style lang="scss">
.footer{
    font-size: 20px;
    padding: 50px 0;
    ul{
        padding:0 20px;
        li{
            display: inline-block;
            padding: 0 5px;
            a{
                color: #2c3e50;
            }
            .icon{
                width: 2em;
                height: 2em;
            }
        }
    }
}
</style>
