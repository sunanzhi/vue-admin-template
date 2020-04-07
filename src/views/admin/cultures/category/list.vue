<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="50">
        <template slot-scope="scope">
          {{ scope.row.culturesCategoryId }}
        </template>
      </el-table-column>
      <el-table-column label="标题" width="200">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="描述" width="350">
        <template slot-scope="scope">
          <span>{{ scope.row.summary }}</span>
        </template>
      </el-table-column>
      <el-table-column label="图片" width="100">
        <template slot-scope="scope">
          <el-image
            :src="scope.row.image"
            :preview-src-list="[scope.row.image]"
          />
        </template>
      </el-table-column>
      <el-table-column label="作品数" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.countCultures }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="下架/上架" width="90" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-value="1" inactive-value="0" @change="setStatus($event, scope.row.culturesCategoryId, scope.$index)" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.updateTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="edit(scope.row.culturesCategoryId)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { adminList, setStatus } from '@/api/cultures/category'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      adminList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    },
    // 跳转修改页面
    edit(id) {
      this.$router.push({ path: '/admin/cultures/category/category-edit', query: { id: id }})
    },
    // 设置状态
    setStatus(event, id, index) {
      setStatus({ culturesCategoryId: id, status: event }).then(response => {
        // 设置失败
        if (response.data !== true) {
          this.list[index].status = event === '1' ? '0' : '1'
        } else {
          this.$notify({ message: '修改成功', type: 'success' })
        }
      })
    }
  }
}
</script>
<style scoped>
.line{
  text-align: center;
}
</style>
