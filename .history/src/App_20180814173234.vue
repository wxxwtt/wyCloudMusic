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

<style lang="sass" scoped>

</style>


