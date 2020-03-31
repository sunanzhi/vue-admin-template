<template>
  <div class="app-container">
    <el-form ref="form" :model="searchForm" label-width="150px">
      <el-form-item label="搜索关键字">
        <el-input v-model="searchForm.search" placeholder="标题/作者" />
      </el-form-item>
      <el-form-item label="时间范围筛选">
        <el-col :span="11">
          <el-date-picker v-model="searchForm.beginTime" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="searchForm.endTime" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="">
        <el-col :span="8">
          <label>创建时间：</label>
          <el-radio-group v-model="searchForm.order.createTime">
            <el-radio label="asc">正序</el-radio>
            <el-radio label="desc">倒序</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="8">
          <label>作品年份：</label>
          <el-radio-group v-model="searchForm.order.years">
            <el-radio label="asc">正序</el-radio>
            <el-radio label="desc">倒序</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="8">
          <label>收藏数量：</label>
          <el-radio-group v-model="searchForm.order.starCount">
            <el-radio label="asc">正序</el-radio>
            <el-radio label="desc">倒序</el-radio>
          </el-radio-group>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="float: right;" @click="fetchData">搜索</el-button>
      </el-form-item>
    </el-form>
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
      <el-table-column label="作者" width="200">
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
      <el-table-column class-name="status-col" label="下架/上架" width="110" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-value="1" inactive-value="0" @change="setStatus($event, scope.row.culturesId, scope.$index)" />
          <!-- <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | statusValueChange }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="创建时间" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="showDetail(scope.row.culturesId)">详情</el-button>
          <el-button type="text" size="mini" @click="edit(scope.row.culturesId)">修改</el-button>
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
import { setStatus } from '@/api/cultures/cultures'

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
      },
      searchForm: {
        search: '',
        beginTime: '',
        endTime: '',
        order: {
          createTime: '',
          years: '',
          starCount: ''
        }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      adminList(Object.assign({ page: this.page.current, limit: this.page.limit }, this.searchForm)).then(response => {
        this.page.total = Number(response.data.page.total)
        this.page.current = Number(response.data.page.current)
        this.page.limit = Number(response.data.page.limit)
        this.list = response.data.items
        this.listLoading = false
      })
    },
    // 跳转修改页面
    edit(id) {
      this.$router.push({ path: '/cultures/works/painting/edit', query: { id: id }})
    },
    // 设置状态
    setStatus(event, id, index) {
      setStatus({ culturesId: id, status: event }).then(response => {
        // 设置失败
        if (response.data !== true) {
          this.list[index].status = event === '1' ? '0' : '1'
        } else {
          this.$message({ message: '修改成功', type: 'success' })
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
