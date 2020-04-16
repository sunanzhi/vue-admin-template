<template>
  <div>
    <el-header style="height: 120px; width: 100%;">
      <div class="header-container" :style="{backgroundImage: `url(${backgroundImage})`}">
        <el-link :underline="false" href="/">
          <el-image
            class="logo"
            :src="require('@/assets/home/template/structure/logo-light.png')"
            fit="contain"
          />
        </el-link>
        <div class="menu">
          <el-link :underline="false" href="/#/home">
            <span class="no-dropdown-menu">
              首页
            </span>
          </el-link>
          <span class="no-dropdown-menu">
            公告
          </span>
          <el-dropdown v-if="isLogin">
            <span class="el-dropdown-link menu-dropdown">
              我的<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      backgroundImage: require('@/assets/home/template/structure/header-bg.jpg'),
      isLogin: true
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  position: fixed;
  background-color: white;
  z-index: 999;
  padding: 0px;
}
.header-container {
  height: 100px;
  width: 100%;
  background-size: cover;
}
.logo {
  float: left;
  height: 60px;
  margin-top: 20px;
  opacity: 0.7;
}
.menu {
  float: right;
}
.menu-dropdown, .no-dropdown-menu {
  line-height: 100px;
  margin-right:30px;
  color: white;
  opacity: 0.7;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  font-weight: bold;
}
</style>
