<template>
    <ul class="mui-table-view songlist">
      <li class="mui-table-view-cell" v-for="(item,index) in songList" :key="item.id">
        <div>
          <p><span class="index">{{index+1}}</span>
        <span class="mui-navigate-right">{{item.name}}</span></p>
        </div>
        <div>
          <span class="songer">{{item.ar[0].name}}</span>
        </div>
          <!-- <a class="mui-navigate-right">{{item.name}}--{{item.ar[0].name}}</a> -->
          <!-- <img :src="item.al.picUrl" alt="" style="height:50px;width:50px;"> -->
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
            console.log(res.data);
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
.songlist {
  li {
    display: flex;
    p {
      color: #333;
      font-size: 14px;
      // display: flex;
    }
    .index {
      font-size: 20px;
      // margin-right: 10px;
    }
    .songer {
      color: #666;
      padding-left: 20px;
      font-size: 12px;
    }
  }
}
</style>
