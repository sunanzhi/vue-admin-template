<template>
  <div>
    <div class="body-section-avatar">
      <div class="demo-basic--circle">
        <div class="block">
          <el-avatar :size="70" :src="userInfo.avatar" />
        </div>
        <el-dialog
          title="更换头像"
          :visible.sync="changeAvatarDialog"
          width="30%"
        >
          <el-upload
            :http-request="myUpload"
            class="avatar-uploader"
            action=""
            :before-upload="beforeUpload"
            :show-file-list="false"
          >
            <img v-if="uploadImageData.url" :src="uploadImageData.url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
          <span slot="footer" class="dialog-footer">
            <el-button @click="changeAvatarDialog = false">取 消</el-button>
            <el-button type="primary" @click="updateUserAvatar">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
    <el-divider>
      <i class="el-icon-user" @click="changeAvatarDialog = true" />
    </el-divider>
    <el-row :gutter="20" style="margin-bottom: 40px;">
      <el-col :span="6" :offset="1">
        <el-card class="left-menu" shadow="hover">
          <el-row>
            <el-col :span="6">
              <p style="text-align: right;">
                用户名：
              </p>
            </el-col>
            <el-col :span="18" style="text-align: left; line-height: 50px;">
              <div v-if="changeUsernameFlag">
                <el-input v-model="newUsername" style="width: 70%;" placeholder="请输入新用户名" />
                <i class="el-icon-check" @click="updateUsername" />
                <i class="el-icon-close" @click="changeUsernameFlag = false" />
              </div>
              <div v-if="!changeUsernameFlag">
                <el-link disabled style="font-size: 16px;">{{ userInfo.username }}</el-link>
                <i class="el-icon-edit" @click="changeUsernameFlag = true" />
              </div>
            </el-col>
          </el-row>
          <el-row v-if="userInfo.email">
            <el-col :span="6">
              <p style="text-align: right;">
                邮箱：
              </p>
            </el-col>
            <el-col :span="18" style="text-align: left; line-height: 50px;">
              <el-link disabled style="font-size: 16px;">{{ userInfo.email }}</el-link>
            </el-col>
          </el-row>
          <el-row v-if="userInfo.mobile">
            <el-col :span="6">
              <p style="text-align: right;">
                手机号：
              </p>
            </el-col>
            <el-col>
              <el-link disabled>{{ userInfo.mobile }}</el-link>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="15" :offset="1">
        <el-card shadow="hover">
          用户其他内容
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { qiniuGetTokenAndKey, uploadQiniu } from '@/api/system/system'
import { setAvatar, setUsername } from '@/api/user/user'

export default {
  data() {
    return {
      userInfo: {
        avatar: '',
        username: '',
        email: '',
        mobile: ''
      },
      uploadImageData: {
        uploadToken: '',
        uploadKey: '',
        url: ''
      },
      newAvatarUrl: '',
      changeAvatarDialog: false,
      changeUsernameFlag: false,
      newUsername: ''
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch('user/getInfo').then(userInfo => {
        this.userInfo = userInfo
        this.newUsername = this.userInfo.username
      })
    },
    async beforeUpload() {
      await qiniuGetTokenAndKey({ category: 1, scene: 'avatar' }).then(response => {
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
        this.$message({ message: '上传成功', type: 'success' })
      })
    },
    updateUserAvatar() {
      if (this.uploadImageData.url === '') {
        this.$message.error('请先上传头像')
        throw new Error('请先上传头像')
      }
      setAvatar({ avatar: this.uploadImageData.url }).then(response => {
        this.$message({ message: '更换成功', type: 'success' })
        this.changeAvatarDialog = false
        this.userInfo.avatar = this.uploadImageData.url
      })
    },
    // 更新用户名
    updateUsername() {
      setUsername({ username: this.newUsername }).then(response => {
        this.userInfo.username = this.newUsername
        this.$message({ message: '更改成功', type: 'success' })
        this.changeUsernameFlag = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.body-section-avatar {
  margin-top: 40px;
}
.left-menu p, .left-menu p .el-link {
  text-align: left;
  font-size: 16px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
