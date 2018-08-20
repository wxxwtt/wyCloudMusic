<template>
  <div class="mui-input-row mui-search">
    <a id="icon-mic"><span class="mui-icon mui-icon-mic-filled"></span></a>
					<input type="search" class="mui-input-clear" placeholder="搜索音乐">
				</div>
</template>
<script>
export default {
  
}
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
    }
    
    input::-webkit-input-placeholder {
      color: #fff;
      font-weight: normal;
      font-size: 14px;
    }
  }
</style>
