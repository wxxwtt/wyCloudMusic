<template>
  <aplayer v-if="flag" autoplay :music="currentSong" :list="songList"
  />
</template>
<script>
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {
      id: this.$route.query.id,
      name: this.$route.query.name,
      songer: this.$route.query.songer,
      currentSong: {},
      songList: [],
      flag: false
    };
  },
  props: [],
  mounted() {
    this.getSongById();
    this.getLyricById();
  },
  methods: {
    getSongById() {
      this.$axios
        .get("/music/url?id=" + this.id, {
          xhrFields: { withCredentials: true }
        })
        .then(res => {
          if (res.data.code == 200) {
            let songInfo = res.data.data;
            console.log(songInfo);
            // // this.songInfo = res.data.data[0];
            songInfo.forEach(element => {
              let songObj = {
                title: this.$route.query.name,
                artist: this.$route.query.songer,
                src: element.url
              };
              this.currentSong = songObj;
              this.songList.push(songObj);
            });
            this.flag = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getLyricById() {
      this.$axios
        .get("/lyric?id=" + this.id, {
          xhrFields: { withCredentials: true }
        })
        .then(res => {
          console.log(res);
          this.songList.forEach(item => {
            item.lrc = res.data.lrc;
          })
        })
        .catch(err => {});
    }
  },
  components: {
    Aplayer
  }
};
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
