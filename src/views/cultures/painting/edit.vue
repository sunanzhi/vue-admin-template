<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="绘画作品标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="作品图片链接">
        <el-input v-model="form.image" />
      </el-form-item>
      <el-form-item label="年份">
        <el-input v-model="form.years" />
      </el-form-item>
      <el-form-item label="作品介绍内容">
        <tinymce ref="tinymce" v-model="form.content" :height="300" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { get, edit } from '@/api/cultures/works/painting'

export default {
  components: { Tinymce },
  data() {
    return {
      form: {
        culturesId: '',
        title: '',
        author: '',
        image: '',
        years: '',
        content: ''
      }
    }
  },
  created() {
    this.form.culturesId = this.$route.query.id
    this.getInfo()
  },
  methods: {
    getInfo() {
      get({ culturesId: this.form.culturesId }).then(response => {
        this.form = response.data
      })
    },
    onSubmit() {
      edit(this.form).then(response => {
        if (response.data === true) {
          this.$message('修改成功')
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

