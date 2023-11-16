<template>
  <div id="layout">
    <HomeHead></HomeHead>
    <!-- 内容区域 -->
    <main class="container">
      <router-view />
    </main>
    <!-- 底部 -->
    <HomeFoot></HomeFoot>
  </div>
</template>

<script>
import HomeHead from './components/HomeHead'
import HomeFoot from './components/HomeFoot'

export default {
  name: 'Layout',
  components: {
    HomeHead,
    HomeFoot
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
