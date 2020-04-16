<template>
  <div>
    <el-footer style="height: 280px;" :style="{backgroundImage: `url(${backgroundImage})`}">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="5">
          <el-link :underline="false" href="/">
            <el-image
              class="logo"
              :src="require('@/assets/home/template/structure/logo-light.png')"
              fit="contain"
            />
          </el-link>
        </el-col>
        <el-col :span="4">
          <div>
            <h4>联系地址</h4>
            <p class="address">英国 伦敦 贝克街-221B</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <h4>其他链接</h4>
            <el-row>
              <el-col :span="12">
                <ul class="list-unstyled">
                  <li>
                    <el-link icon="el-icon-arrow-right">关于我们</el-link>
                  </li>
                  <li>
                    <el-link icon="el-icon-arrow-right">官方微博</el-link>
                  </li>
                  <li>
                    <el-link icon="el-icon-arrow-right">联系反馈</el-link>
                  </li>
                </ul>
              </el-col>
              <el-col :span="12">
                <ul class="list-unstyled">
                  <li>
                    <el-link icon="el-icon-arrow-right">合作伙伴</el-link>
                  </li>
                  <li>
                    <el-link icon="el-icon-arrow-right">团队成员</el-link>
                  </li>
                  <li>
                    <el-link icon="el-icon-arrow-right">使用帮助</el-link>
                  </li>
                  <li>
                    <el-link href="/#/admin/dashboard" icon="el-icon-arrow-right">管理入口</el-link>
                  </li>
                </ul>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <h4>二维码</h4>
            <el-row>
              <el-col :span="24">
                <!-- <el-image
                  style="height: 90px;"
                  :src="qrCodeImage"
                  fit="contain"
                />
                <p class="qrcode-title">微信公众号</p> -->
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <div>
        <p class="copyright"><small><a href="http://beian.miit.gov.cn/" target="_blank">© 2020. SunAnZhi All rights Reserved. 粤ICP备18084253号 </a></small></p>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      backgroundImage: require('@/assets/home/template/structure/footer-bg.jpg'),
      qrCodeImage: require('@/assets/home/template/structure/qrcode.jpeg')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-footer {
  background-color: #b3c0d1;
  color: white;
  text-align: center;
  opacity: 0.8;
  background-size: cover;
}
.logo {
  height: 80px;
  margin-top: 65px;
  opacity: 0.7;
}
.address, .copyright, .qrcode-title {
  opacity: 0.7;
  margin-bottom: 20px;
  font-size: 14px;
}
h4 {
  margin-top: 30px;
  opacity: 0.7;
  letter-spacing: 4px;
}
.list-unstyled {
  list-style: none;
  margin: 0px;
}
.el-link {
  margin-bottom: 20px;
}
.qrcode-title {
  font-size: 13px;
}
</style>
