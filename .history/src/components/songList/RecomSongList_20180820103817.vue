<template>
  <div class="song-list">
    <router-link :to="{'name':'SongListDetail',query:{id:item.id}}" class="list-box" v-for="item in songList" :key="item.id">
      <div>
        <img v-lazy="item.picUrl" alt="">
      </div>
			<div><p>{{item.name}}</p></div>
		</router-link>
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
          // console.log(res);
          this.songList = res.data.result.splice(0,6)
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
    width: 30%;
    img {
      width: 100%;
    }
    img[lazy=loading] {
    width: 100%;
    height: 100px;
    margin: auto;
    background: #000;
    color: #fff;
  }
  }
}
</style>
