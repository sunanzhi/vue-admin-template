<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="绘画作品标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author" />
      </el-form-item>
      <el-form-item label="作品图片上传">
        <el-upload v-if="showUploadImage" :http-request="myUpload" :multiple="false" :before-upload="beforeUpload" action="https://up.qiniup.com" drag>
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            将文件拖到此处，或<em>点击上传</em>
          </div>
        </el-upload>
        <div v-if="!showUploadImage">
          <el-image
            style="height: 150px; width: 150px;"
            :src="form.image"
            fit="scale-down"
            @click="removeImage(this)"
          />
        </div>
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
import { qiniuGetTokenAndKey, uploadQiniu } from '@/api/system/system'

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
      uploadImageData: {
        uploadToken: '',
        uploadKey: '',
        url: ''
      },
      contentCategory: 1,
      contentScene: 'contentImage',
      showUploadImage: true
    }
  },
  mounted() {
    EventBus.$emit('setTinymceEditorImageParams', ({ category: this.contentCategory, scene: this.contentScene }))
  },
  methods: {
    onSubmit() {
      add(this.form).then(response => {
        if (response.data === true) {
          this.$message({ message: '添加成功', type: 'success' })
        }
        this.$router.push({ path: '/cultures/works/painting/list' })
      })
    },
    async beforeUpload() {
      await qiniuGetTokenAndKey({ category: 1, scene: 'thumbnail' }).then(response => {
        this.uploadImageData.uploadKey = response.data.key
        this.uploadImageData.uploadToken = response.data.token
        this.uploadImageData.url = response.data.url
      })
    },
    myUpload(file) {
      const formData = new FormData()
      formData.append('file', file.file)
      formData.append('key', this.uploadImageData.uploadKey)
      formData.append('token', this.uploadImageData.uploadToken)
      uploadQiniu(formData).then(response => {
        this.showUploadImage = false
        this.form.image = this.uploadImageData.url
        this.$message({ message: '上传成功', type: 'success' })
      })
    },
    removeImage(e) {
      this.$alert('是否移除此图片', '提醒', {
        confirmButtonText: '确定',
        callback: action => {
          this.form.image = ''
          this.showUploadImage = true
          this.$message({
            type: 'success',
            message: '移除成功'
          })
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

