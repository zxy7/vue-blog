<template>
    <div id="navbar">
        <div>
            <div>
                <svg class="icon right" aria-hidden="true" @click="toggleClick" >
                    <use xlink:href="#icon-menu"></use>
                </svg>
                <a class="backtohome left" href="/">Zxy Blog</a>
            </div>
            <ul class="menu" :class="{'in':isIn}">
                <li  v-for="item in menuTab" :key="item.key">
                    <router-link :to="item.href">
                      {{item.tabName}}
                    </router-link>
                </li>
            </ul>

        </div>

        <div class="site-heading">
            <h1>{{head}}</h1>
            <span class="subheading">{{subhead}}</span>
        </div>

    </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    head: {
      type: String
    },
    subhead: {
      type: String
    }
  },
  data () {
    return {
      menuTab: [
        { tabName: 'HOME', href: '/home' },
        { tabName: 'DAIRY', href: '/dairy' },
        { tabName: 'ABOUT', href: '/about' },
        { tabName: 'TAGS', href: '/tags' }
      ],
      currentIndex: 1,
      isIn: false

    }
  },
  methods: {
    toggleClick () {
      this.isIn = !this.isIn
    }
  }
}
</script>

<style lang="scss" >
#navbar{
    background: center center no-repeat url("../assets/home.jpg");
    background-size: cover;
    padding: 16px;
    color: white;
    .icon{
        font-size: 20px;
        @media only screen and (min-width: 768px) {
        opacity: 0;
        }
    }
    .backtohome{
        font-weight: 600;
        color: #fff;
        height: 25px;
        line-height: 25px;
    }
    .menu.in{
        @media only screen and (max-width: 768px) {
            opacity: 1;
        }
    }
    .menu{
        position: absolute;
        right: 0;
        @media only screen and (min-width: 768px) {
            li {
                display: inline;
                a {
                    color: white;
                    padding: 20px;
                    font-size: 12px;
                    line-height: 20px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }
            }
        }
        @media only screen and (max-width: 768px) {
            opacity: 0;
            background: white;
            border-radius: 2px;
            width: 120px;
            margin-right: 10px;
            margin-top: 20px;
            padding: 0px;
            li {
                display: block;
                a {
                    color: #000;
                    font-size: 13px;
                    line-height: 28px;
                }
            }
        }
    }
    .site-heading{
        padding: 95px 0 40px;
        @media only screen and (min-width: 768px){
            padding: 150px 0;
        }
        h1{
            font-size: 50px;
            margin: 0;
        }
    }
}

</style>
