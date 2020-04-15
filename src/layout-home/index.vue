<template>
  <el-container direction="vertical">
    <Header />
    <Body />
    <Footer />
  </el-container>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style lang="css" scoped>
body > .el-container {
  margin-bottom: 40px;
}
</style>
