<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="分类标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.summary" />
      </el-form-item>
      <el-form-item label="分类图上传">
        <el-upload
          :http-request="myUpload"
          :before-upload="beforeUpload"
          action=""
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :file-list="fileList"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <!-- 查看大图 -->
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { get, edit } from '@/api/cultures/category'
import { qiniuGetTokenAndKey, uploadQiniu } from '@/api/system/system'

export default {
  data() {
    return {
      form: {
        culturesCategoryId: '',
        title: '',
        summary: '',
        image: ''
      },
      uploadImageData: {
        uploadToken: '',
        uploadKey: '',
        url: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      imageList: [],
      fileList: []
    }
  },
  created() {
    this.form.culturesCategoryId = this.$route.query.id
    this.getInfo()
  },
  methods: {
    getInfo() {
      get({ culturesCategoryId: this.form.culturesCategoryId }).then(response => {
        this.form = response.data
        this.imageList.push(this.form.image)
        this.fileList.push({ url: this.form.image })
      })
    },
    onSubmit() {
      // 取最后一张图，多图可以换写法
      this.form.image = this.imageList.pop()
      edit(this.form).then(response => {
        if (response.data === true) {
          this.$message({ message: '修改成功', type: 'success' })
        }
      })
    },
    async beforeUpload() {
      // 判断是否多图上传
      if (this.imageList.length >= 1) {
        this.$message.error('不能多图上传')
        throw new Error('不能多图上传')
      }
      await qiniuGetTokenAndKey({ category: 1, scene: 'category' }).then(response => {
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
        this.imageList.push(this.uploadImageData.url)
        this.$message({ message: '上传成功', type: 'success' })
      })
    },
    handleRemove(file, fileList) {
      // 重新调整imageList 数据
      const tmpImageList = []
      fileList.forEach(tmpFile => {
        tmpImageList.push(tmpFile.url)
      })
      this.imageList = tmpImageList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

