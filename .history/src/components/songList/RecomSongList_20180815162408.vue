<template>
  <div class="song-list">
    <div class="" v-for="item in songList" :key="item.id">
			<div><p>{{item.name}}</p></div>
		</div>

    
  </div>
</template>
<script>
export default {
  data() {
    return {
      songList : []
    };
  },
  created(){
    this.getSongList();
  },
  methods: {
    getSongList() {
      this.$axios
        .get("/personalized", { xhrFields: { withCredentials: true } })
        .then(res => {
          console.log(res);
          this.songList = res.data.result
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.song-list {
  display: flex;
  .mui-card {
    width: 50%;
  }
}
</style>
