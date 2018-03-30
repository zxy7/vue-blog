<template>
    <div class="navbar">
        <div>
            <div>
                <i class="el-icon-menu"></i>
                <a class="backtohome left" href="/">Zxy Blog</a>
            </div>

            <ul class="menu"  v-for="item in menuTab" :key="item.key">
                <li>
                    <a>{{item.tabName}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      menuTab: [
        { tabName: 'HOME', id: 1 },
        { tabName: 'DAIRY', id: 2 },
        { tabName: 'ABOUT', id: 3 },
        { tabName: 'TAGS', id: 4 }
      ],
      currentIndex: 1

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar{
    background: url("../assets/home.jpg");
    padding: 16px;
    color: white;
    .backtohome{
        font-weight: 800;
        color: #fff;
        height: 25px;
        line-height: 25px;
    }

}

//    @media only screen and (min-width: 768px) .menu {
//        display: inline;
//    }

</style>
