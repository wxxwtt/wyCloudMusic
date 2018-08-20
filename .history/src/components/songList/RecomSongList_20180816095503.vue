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
  // display: flex;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .list-box {
    width: 33%;
    img {
      width: 100%;
    }
  }
}
</style>
