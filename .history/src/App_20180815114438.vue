<template>
  <div id="app">
    <nav-bar></nav-bar> 
    <router-view/>
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
    BottomNav
  }
}
</script>

<style lang="scss">
  body,html,ul {
    padding :0;
    margin: 0;
  }
</style>


