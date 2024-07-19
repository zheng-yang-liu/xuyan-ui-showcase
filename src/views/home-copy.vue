<template>
  <div>
    <p v-if="isFullscreen">浏览器当前处于全屏模式</p>
    <p v-else>浏览器当前不在全屏模式</p>
    <button @click="toggleFullscreen">切换全屏模式</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFullscreen: false
    };
  },
  mounted() {
    this.checkFullscreen();
    document.addEventListener('fullscreenchange', this.checkFullscreen);
    document.addEventListener('webkitfullscreenchange', this.checkFullscreen);
    document.addEventListener('mozfullscreenchange', this.checkFullscreen);
    document.addEventListener('MSFullscreenChange', this.checkFullscreen);
  },
  beforeDestroy() {
    document.removeEventListener('fullscreenchange', this.checkFullscreen);
    document.removeEventListener('webkitfullscreenchange', this.checkFullscreen);
    document.removeEventListener('mozfullscreenchange', this.checkFullscreen);
    document.removeEventListener('MSFullscreenChange', this.checkFullscreen);
  },
  methods: {
    checkFullscreen() {
      this.isFullscreen = !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      );
    },
    toggleFullscreen() {
      if (!this.isFullscreen) {
        const element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
          element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
          element.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) { /* IE11 */
          document.msExitFullscreen();
        }
      }
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>
