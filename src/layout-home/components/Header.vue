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
          <el-link :underline="false" href="/#/bulletinBoard">
            <span class="no-dropdown-menu">
              公告
            </span>
          </el-link>
          <el-dropdown v-if="isLogin">
            <el-link :underline="false" href="/#/bulletinBoard">
              <span class="el-dropdown-link menu-dropdown">
                我的<i class="el-icon-arrow-down el-icon--right" />
              </span>
            </el-link>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-link v-if="!isLogin" :underline="false" :href="thisRouteFullPath">
            <span class="no-dropdown-menu">
              登陆
            </span>
          </el-link>
        </div>
      </div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'

export default {
  name: 'Header',
  data() {
    return {
      backgroundImage: require('@/assets/home/template/structure/header-bg.jpg'),
      isLogin: true,
      thisRouteFullPath: ''
    }
  },
  mounted() {
    this.thisRouteFullPath = `/#/login?redirect=${this.$route.fullPath}`
    // 获取用户token
    const hasToken = getToken()
    if (hasToken) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
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
  margin-top: 35px;
  float: right;
}
.el-link {
  margin-right: 30px;
}
.menu-dropdown, .no-dropdown-menu {
  color: white;
  opacity: 0.7;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  font-weight: bold;
}
</style>
