<template>
  <div><audio :src="songInfo.url" controls autoplay></audio></div>
</template>
<script>
export default {
  data(){
    return {
      id: this.$route.query.id,
      songInfo:[]
    }
  },
  created(){
    this.hideNav();
    this.getSongById();
  },
  methods : {
    hideNav(){
      this.$on('hideNav',false)
    },
    getSongById(){
      this.$axios.get('/music/url?id=' + this.id,{
          xhrFields: { withCredentials: true }
        }).then(res=>{
          if(res.data.code==200){
            this.songInfo = res.data.data[0]
          }
          console.log(11111111);
        }).catch(err=>{
          console.log(err);
        })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
