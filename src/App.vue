<template>
  <div id="app">
    <!--<img src="./assets/home.jpg">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.left{
  float: left;
}
.right{
  float: right;
}
li {
  list-style: none;
}
 a, a:hover {
   text-decoration: none;
 }
.inline{
  display: inline-block;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
