<template>
  <div>
    <el-header style="height: 100px; width: 100%;">
      <el-row :gutter="20">
        <el-col :span="6">im logo</el-col>
        <el-col :span="10" :offset="8">
          <el-dropdown>
            <span class="el-dropdown-link">
              下拉菜单
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
.el-header {
  position: fixed;
  background-color: #b3c0d1;
  color: #333;
  z-index: 99999;
}
</style>
