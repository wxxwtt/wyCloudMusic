<template>
  <aplayer v-if="flag" autoplay :music="{title: name,artist: songer,src: songInfo.url}"
  />
</template>
<script>
import Aplayer from 'vue-aplayer'
export default {
  data(){
    return {
      id: this.$route.query.id,
      name:this.$route.query.name,
      songer:this.$route.query.songer,
      songInfo:[],
      songList:[],
      flag:false,
    }
  },
  props:[],
  mounted(){
    this.getSongById();
    
  },
  methods : {
    getSongById(){
      this.$axios.get('/music/url?id=' + this.id,{
          xhrFields: { withCredentials: true }
        }).then(res=>{
          if(res.data.code==200){
            this.songInfo = res.data.data[0];
            this.flag = true;
            console.log(res);
          }
        }).catch(err=>{
          console.log(err);
        })
    }
  },
  components : {
    Aplayer
  }
}
</script>
<style lang="scss" scoped>
  .music {
    aplayer {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
</style>
