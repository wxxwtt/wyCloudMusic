<template>
  <div>
    <div class="mui-input-row mui-search">
      <a id="icon-mic" class=""><span class="mui-icon mui-icon-mic"></span></a>
            <input type="search" class="mui-input-clear" placeholder="搜索音乐">
    </div>
    <banner></banner>
    <div class="mui-content-padded">
				<h4>推荐歌单</h4>
			</div>
    <song-list></song-list>
  </div>
</template>
<script>
import RecomSongList from '../songList/RecomSongList'
import banner from '../lunbo/banner'
export default {
  data(){
    return {

    }
  },
  components : {
    'song-list' : RecomSongList,
    'banner':banner
  }
};
</script>
<style lang="scss" scoped>
.mui-search {
  background-color: #ff4a4a;
  display: flex;
  padding-top: 20px;
  color: #fff !important;
  input {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    color: #fff !important;
    margin-right: 10px;
  }
  #icon-mic {
    color: #fff;
    font-size: 30px;
  }
  input::-webkit-input-placeholder {
    color: #fff;
    font-weight: normal;
    font-size: 14px;
  }
}
</style>
