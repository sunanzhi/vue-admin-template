<template>
  <el-container direction="vertical">
    <el-header style="height: 100px; width: 100%;">im header</el-header>
    <el-main>
      <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </section>
    </el-main>
    <el-footer style="height: 150px;">im footer</el-footer>
  </el-container>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="css" scoped>

.el-header {
  position: fixed;
  background-color: #b3c0d1;
  color: #333;
}
.el-main {
  margin-top: 100px;
  top: 100px;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* min-height: calc(100vh - 250px); */
  min-height: 600px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
}
body > .el-container {
  margin-bottom: 40px;
}
</style>
