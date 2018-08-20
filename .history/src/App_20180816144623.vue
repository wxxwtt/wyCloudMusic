<template>
  <div id="app">
    <!-- <nav-bar></nav-bar>  -->
    <transition>
      <router-view/>
    </transition>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import BottomNav from './components/navbar/BottomNav'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components : {
    'nav-bar' : NavBar,
    bottomNav : BottomNav
  }
}
</script>

<style lang="scss">
body {background-color: #fff;
font-size: 14px;}
  body,html,ul {
    list-style: none;
    padding :0;
    margin: 0;
  }
  #app {
    padding-bottom: 75px;
  }
</style>


