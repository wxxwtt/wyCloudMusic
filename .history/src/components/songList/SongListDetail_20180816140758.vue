<template>
  
</template>
<script>
export default {
  data(){
    return {
      songList : []
    }
  },
  methods : {
    getSonglist(){
      this.$axios.get('/playlist/detail',{ xhrFields: { withCredentials: true } })
      .then(res =>{
        this.songList = res
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
