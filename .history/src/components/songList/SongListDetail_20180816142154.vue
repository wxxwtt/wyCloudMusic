<template>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 1</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 2</a>
    </li>
    <li class="mui-table-view-cell">
        <a class="mui-navigate-right">Item 3</a>
    </li>
</ul>
</template>
<script>
export default {
  data(){
    return {
      id:this.$route.query.id,
      songList : []
    }
  },
  created(){
    this.getSonglist();
  }
  ,
  methods : {
    getSonglist(){
      this.$axios.get('/playlist/detail?id=' + this.id,{ xhrFields: { withCredentials: true } })
      .then(res =>{
        if(res.data.code==200){
          this.songList = res.data.playlist.subscribers;
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
