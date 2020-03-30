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
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.row.culturesId }}
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年份" width="150" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.years }}</span>
        </template>
      </el-table-column>
      <el-table-column label="收藏数量" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.starCount }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | statusValueChange }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :total="page.total"
      :page.sync="page.current"
      :limit.sync="page.limit"
      @pagination="fetchData"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { adminList } from '@/api/cultures/works/painting'

export default {
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'danger',
        1: 'success'
      }
      return statusMap[status]
    },
    statusValueChange(status) {
      const statusValue = {
        0: '下架',
        1: '上架'
      }
      return statusValue[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      page: {
        total: 1,
        current: 1,
        limit: 20
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      adminList({ page: this.page.current, limit: this.page.limit }).then(response => {
        this.page.total = Number(response.data.page.total)
        this.page.current = Number(response.data.page.current)
        this.page.limit = Number(response.data.page.limit)
        this.list = response.data.items
        this.listLoading = false
      })
    }
  }
}
</script>
