<template>
  <div id="app">
    <nav-bar></nav-bar> 
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components : {
    'nav-bar' : NavBar
  }
}
</script>

<style lang="scss">
  body,html,ul {
    padding :0;
    margin: 0;
  }
</style>


