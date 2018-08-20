<template>
  <h1>推荐音乐</h1>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods : {
    getMusicList(){
      this.$axios.get('/recommend/songs').then( res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>


