<template>
  <el-main>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
  </el-main>
</template>

<script>
export default {
  name: 'Body',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  margin-top: 100px;
  top: 100px;
  background-color: white;
  color: #333;
  text-align: center;
  // header:100px footer:280px
  min-height: calc(100vh - 380px);
  // min-height: 600px;
  padding: 0px 50px;
}
</style>
