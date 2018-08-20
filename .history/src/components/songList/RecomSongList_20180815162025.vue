<template>
  <div class="song-list">
    <div class="mui-card" v-for="item in songList" :key="item.id">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;">{{item.name}}</p>
					</div>
				</div>
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
  .mui-card {
    width: 33%;
  }
}
</style>
