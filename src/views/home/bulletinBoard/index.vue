<template>
  <div>
    <div class="body-section-title">
      <p>公告栏</p>
    </div>
    <el-divider>
      <i class="el-icon-s-order" />
    </el-divider>
    <div>
      <el-row>
        <el-col :span="24">
          <el-timeline>
            <el-timeline-item timestamp="2020-04-17 00:00:00" placement="top">
              <el-card>
                <h4>莫斯文化馆正式上线!</h4>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bulletBoardLoading: true
    }
  }
}
</script>

<style lang="scss" scoped>
.body-section-title {
  font-size: 30px;
  font-weight: inherit;
  margin: 40px 0 40px 0;
  letter-spacing: 5px;
}
.el-timeline-item {
  text-align: left;
}
</style>
