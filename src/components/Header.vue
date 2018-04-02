<template>
    <div class="navbar">
        <div>
            <div>
                <i class="el-icon-menu"></i>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>

                <a class="backtohome left" href="/">Zxy Blog</a>
            </div>
            <ul class="menu in">
                <li  v-for="item in menuTab" :key="item.key">
                    <a>{{item.tabName}}</a>
                </li>
            </ul>

        </div>

    <div class="site-heading">
        <h1>Zxy Blog</h1>
        <span class="subheading">一生想做浪漫极客</span>
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
    height:300px;
    color: white;
    .backtohome{
        font-weight: 800;
        color: #fff;
        height: 25px;
        line-height: 25px;
    }
    .menu.in{
        @media only screen and (max-width: 768px) {
            opacity: 1;
            background: white;
            border-radius: 2px;
            width: 120px;
            margin-right: 10px;
            padding: 0px;
            color: #000;
            li{
                display: block;
                a {
                    font-size: 13px;
                    line-height: 28px;
                }
            }
        }
    }
    .menu{
        position: absolute;
        right: 0;
        @media only screen and (min-width: 768px) {
            li {
                display: inline;
                a {
                    padding: 20px;
                }
            }
        }
    }
    .site-heading{
        padding: 95px 0 70px;
        @media only screen and (min-width: 768px){
            padding: 150px 0;
        }
        h1{
            font-size: 50px;
        }
    }
}

</style>
