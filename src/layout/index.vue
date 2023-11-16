<template>
  <div id="layout">
    <pcHead></pcHead>
    <!-- 内容区域 -->
    <main class="container">
      <router-view />
    </main>
    <!-- 底部 -->
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import pcHead from './components/pcHead'
import pcFooter from './components/pcFooter'

export default {
  name: 'Layout',
  components: {
    pcHead,
    pcFooter
  },
  computed: {

  },
  watch: {

  }
}
</script>
<style lang="scss">
#layout {
  height: 100%;
}
// header {
//   position: sticky;
//   right: 0;
//   top: 0;
//   left: 0;
//   z-index: 999;
//   background: #fff;
// }
.serves {
  position: fixed;
  bottom: 100px;
  right: 8px;
  z-index: 99;
  cursor: pointer;
  .lottery {
    margin-bottom: 30px;
  }
}
.no-scroll {
  height: 100vh;
  overflow: hidden;
}
</style>
