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

<style lang="css" scoped>
.el-main {
  margin-top: 100px;
  top: 100px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* min-height: calc(100vh - 250px); */
  min-height: 600px;
}
</style>
