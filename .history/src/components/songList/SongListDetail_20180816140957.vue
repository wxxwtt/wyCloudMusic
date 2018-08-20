<template>
  
</template>
<script>
export default {
  data(){
    return {
      id:this.routes.query.id,
      songList : []
    }
  },
  created(){
    this.getSonglist();
  }
  ,
  methods : {
    getSonglist(){
      this.$axios.get('/playlist/detail' + this.id,{ xhrFields: { withCredentials: true } })
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
