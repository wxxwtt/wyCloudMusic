<template>
  <!-- <div class="music"><audio :src="songInfo.url" controls autoplay></audio></div> -->
  <aplayer autoplay
  :music="{
    title: 'secret base~君がくれたもの~',
    artist: 'Silent Siren',
    src: songInfo.url,
    pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
  }"
/>
</template>
<script>
import aplayer from 'vue-aplayer'
export default {
  data(){
    return {
      id: this.$route.query.id,
      songInfo:[]
    }
  },
  props:['isShow'],

  created(){
    this.getSongById();
  },
  methods : {
    getSongById(){
      this.$axios.get('/music/url?id=' + this.id,{
          xhrFields: { withCredentials: true }
        }).then(res=>{
          if(res.data.code==200){
            this.songInfo = res.data.data[0]
            console.log(res);
          }
        }).catch(err=>{
          console.log(err);
        })
    }
  },
  components : {
    aplayer
  }
}
</script>
<style lang="scss" scoped>
  .music {
    audio {
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
</style>
