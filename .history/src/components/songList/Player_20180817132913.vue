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
    this.navIsShow();
    this.getSongById();
  },
  methods : {
    navIsShow() {
      console.log(this.$route.path);
      if(this.$route.path == '/Find/SongListDetail/Player'){
        this.$emit('hide',this.isShow)
        console.log('该隐藏了');
        // eventBus.$emit('isShow','子组件传递的数据')
      }else {
        this.$emit('hide',!this.isShow)
      }
    },
    getSongById(){
      this.$axios.get('/music/url?id=' + this.id,{
          xhrFields: { withCredentials: true }
        }).then(res=>{
          if(res.data.code==200){
            this.songInfo = res.data.data[0]
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
