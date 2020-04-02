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
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { EventBus } from '@/utils/event-bus'
import Tinymce from '@/components/Tinymce'
import { add } from '@/api/cultures/works/painting'

export default {
  components: { Tinymce },
  data() {
    return {
      form: {
        title: '',
        author: '',
        image: '',
        years: '',
        content: ''
      },
      contentCategory: 1,
      contentScene: 'contentImage'
    }
  },
  mounted() {
    EventBus.$emit('setTinymceEditorImageParms', ({ category: this.contentCategory, scene: this.contentScene }))
  },
  methods: {
    onSubmit() {
      add(this.form).then(response => {
        if (response.data === true) {
          this.$message('添加成功')
        }
        this.$router.push({ path: '/cultures/works/painting/list' })
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

