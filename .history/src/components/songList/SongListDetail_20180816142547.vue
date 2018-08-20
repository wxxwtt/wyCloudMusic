<template>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell" v-for="item in songList" :key="item.id">
          <a class="mui-navigate-right">{{item.name}}</a>
      </li>
</ul>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      songList: []
    };
  },
  created() {
    this.getSonglist();
  },
  methods: {
    getSonglist() {
      this.$axios
        .get("/playlist/detail?id=" + this.id, {
          xhrFields: { withCredentials: true }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.songList = res.data.playlist.tracks;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
