<template>
  <div id="app">
    <nav-bar></nav-bar> 
    <router-view/>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import bottomNav from './components/navbar/BottomNav'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components : {
    'nav-bar' : NavBar,
    bottomNav
  }
}
</script>

<style lang="scss">
  body,html,ul {
    padding :0;
    margin: 0;
  }
</style>


