<template>
  <div class="song-list">
    <div class="list-box" v-for="item in songList" :key="item.id">
      <div>
        <img :src="item.picUrl" alt="">
      </div>
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
        .get("/personalized")
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
  // display: flex;
  display: flex;
                flex-direction: row;
                flex-wrap: wrap;
  .list-box {
    width: 33%;
  }
}
</style>
