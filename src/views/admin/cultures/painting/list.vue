<template>
  <div class="app-container">
    <el-form ref="form" :model="searchForm" label-width="70px">
      <el-form-item label="关键搜索">
        <el-input v-model="searchForm.search" placeholder="标题/作者" />
      </el-form-item>
      <el-form-item label="时间范围">
        <el-col :span="11">
          <el-date-picker v-model="searchForm.where.beginTime" value-format="yyyy-MM-dd" type="date" placeholder="开始时间" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="searchForm.where.endTime" value-format="yyyy-MM-dd" type="date" placeholder="结束时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button style="float: right;" round @click="fetchData"><i class="el-icon-refresh">刷新</i></el-button>
        <el-button round style="float: right; margin-right: 20px;" @click="fetchData"><i class="el-icon-search">搜索</i></el-button>
      </el-form-item>
    </el-form>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      @sort-change="sortChange"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40" />
      <el-table-column align="center" label="ID" width="50">
        <template slot-scope="scope">
          {{ scope.row.culturesId }}
        </template>
      </el-table-column>
      <el-table-column label="标题" width="260">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="160">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="年份" prop="years" width="100" align="center" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.years }}</span>
        </template>
      </el-table-column>
      <el-table-column label="收藏" width="80" align="center" prop="starCount" sortable="custom">
        <template slot-scope="scope">
          <span>{{ scope.row.starCount }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="下架/上架" width="90" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-value="1" inactive-value="0" @change="setStatus($event, scope.row.culturesId, scope.$index)" />
          <!-- <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status | statusValueChange }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column align="center" prop="createTime" label="创建时间" width="180" sortable="custom">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="info" size="mini" @click="showDetail(scope.row.culturesId)">详情</el-button>
          <el-button type="primary" size="mini" @click="edit(scope.row.culturesId)">修改</el-button>
          <el-button type="warning" size="mini" @click="getTags(scope.row.culturesId)">标签</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button :disabled="selectedRows.length === 0" @click="deleteThis()">批量删除</el-button>
    </div>
    <pagination
      :total="page.total"
      :page.sync="page.current"
      :limit.sync="page.limit"
      @pagination="fetchData"
    />
    <!-- 弹窗组件 -->
    <el-dialog title="设置标签" :visible.sync="setTagsDialogVisible">
      <el-form :model="culturesTagForm">
        <el-tag
          v-for="tag in culturesTagForm.tags"
          :key="tag"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="tagInputVisible"
          ref="saveTagInput"
          v-model="tagInputValue"
          class="input-new-tag"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ 新标签</el-button>
        <el-form-item label="热门标签" />
        <el-checkbox-group v-model="culturesTagForm.tags">
          <el-checkbox-button v-for="hotTag in culturesTagForm.hotTags" :key="hotTag" :label="hotTag" style="margin: 5px;" name="type" />
        </el-checkbox-group>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setTagsDialogVisible = false, culturesTagForm.nowTagCulturesId = 0">取 消</el-button>
        <el-button type="primary" @click="setTags">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="编辑"
      :visible.sync="editDialogFormVisible"
      width="70%"
    >
      <edit-form-components
        v-if="editDialogFormVisible"
        ref="editFormComponents"
        :select-cultures-id="selectCulturesId"
        @refreshThisPage="refreshThisPageFunction"
      />
    </el-dialog>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { adminList } from '@/api/cultures/works/painting'
import { setStatus, getTags, setTags, batchDelete } from '@/api/cultures/cultures'
import edit from './edit.vue'

export default {
  components: { Pagination, 'edit-form-components': edit },
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
        where: {
          beginTime: '',
          endTime: ''
        },
        order: {
          createTime: '',
          years: '',
          starCount: ''
        }
      },
      setTagsDialogVisible: false,
      editDialogFormVisible: false,
      culturesTagForm: {
        nowTagCulturesId: 0,
        tags: [],
        hotTags: []
      },
      selectedRows: [],
      selectCulturesId: 0,
      tagInputVisible: false,
      tagInputValue: ''
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
      this.editDialogFormVisible = true
      this.selectCulturesId = id
    },
    // 是否刷新当前页面
    refreshThisPageFunction(refreshFlag) {
      if (refreshFlag === true) {
        // this.editDialogFormVisible = false
        this.fetchData()
      }
    },
    // 设置状态
    setStatus(event, id, index) {
      setStatus({ culturesId: id, status: event }).then(response => {
        // 设置失败
        if (response.data !== true) {
          this.list[index].status = event === '1' ? '0' : '1'
        } else {
          this.$notify({ message: '修改成功', type: 'success' })
        }
      })
    },
    getTags(id) {
      getTags({ culturesId: id }).then(response => {
        this.setTagsDialogVisible = true
        this.culturesTagForm.tags = response.data.tags
        this.culturesTagForm.hotTags = response.data.hotTags
        this.culturesTagForm.nowTagCulturesId = id
      })
    },
    setTags(id) {
      setTags({ culturesId: this.culturesTagForm.nowTagCulturesId, tags: this.culturesTagForm.tags }).then(response => {
        // 设置失败
        if (response.data === true) {
          this.$notify({ message: '设置成功', type: 'success' })
          this.setTagsDialogVisible = false
          this.culturesTagForm.nowTagCulturesId = 0
        }
      })
    },
    // 移除标签
    handleClose(tag) {
      this.culturesTagForm.tags.splice(this.culturesTagForm.tags.indexOf(tag), 1)
    },
    // 新增标签输入框
    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 保存标签
    handleInputConfirm() {
      const tagInputValue = this.tagInputValue
      if (tagInputValue) {
        this.culturesTagForm.tags.push(tagInputValue)
      }
      this.tagInputVisible = false
      this.tagInputValue = ''
    },
    // 多选
    handleSelectionChange(row) {
      this.selectedRows = row
    },
    // 批量删除
    deleteThis() {
      const culturesIds = []
      this.selectedRows.forEach(row => {
        culturesIds.push(row.culturesId)
      })
      batchDelete({ culturesIds: culturesIds }).then(response => {
        if (response.data === true) {
          this.$notify({ message: '删除成功', type: 'success' })
          this.fetchData()
        }
      })
    },
    sortChange(column) {
      if (column.prop == null || column.order == null) {
        this.searchForm.order[column.prop] = ''
      } else {
        this.searchForm.order[column.prop] = column.order === 'ascending' ? 'asc' : 'desc'
      }
      this.fetchData()
    }
  }
}
</script>
<style scoped>
.line{
  text-align: center;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
