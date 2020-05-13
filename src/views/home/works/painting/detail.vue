<template>
  <div>
    <div class="body-section-title">
      <p>作品赏析</p>
    </div>
    <el-divider>
      <i class="el-icon-video-camera-solid" />
    </el-divider>
    <el-row :gutter="20" style="margin-bottom: 40px;">
      <el-col :span="15" :offset="1">
        <el-card v-loading="culturesInfoLoading" shadow="hover">
          <div style="width: 100%;">
            <el-image
              style="width: 250px; float: left; margin-bottom: 20px;"
              :src="culturesInfo.image"
              :preview-src-list="[culturesInfo.image]"
              lazy
              fit="cover"
            />
            <div>
              <h4>{{ culturesInfo.title }}</h4>
              <p>{{ culturesInfo.author }}</p>
              <p>{{ culturesInfo.years }}</p>
            </div>
          </div>
        </el-card>
        <el-card v-loading="culturesInfoLoading">
          <el-collapse>
            <el-collapse-item title="作品描述">
              <div style="width: 100%;" v-html="culturesInfo.content" />
            </el-collapse-item>
          </el-collapse>
        </el-card>
        <el-card>
          <div style="margin-bottom: 20px;">
            <el-input v-model="newCommentInfo.content" type="textarea" style="height: 80px;" placeholder="输入你的评论内容" />
            <el-button v-if="newCommentInfo.content" type="warning" plain style="margin-top: 10px; margin-bottom: 10px; float: right;" @click="commentAdd">提交</el-button>
          </div>
          <ul
            v-infinite-scroll="commentList"
            infinite-scroll-disabled="commentListDisabled"
            class="infinite-list"
            style="overflow:auto; width: 100%; list-style-type:none; padding-left: 0px;"
          >
            <li v-for="(comment, index) in commentInfo.items" :key="'comment' + index" class="infinite-list-item" style="text-align: left;">
              <div style="width: 100%; height: 100px;">
                <div style="width: 20%; margin-left: 20px;">
                  <el-image
                    style="width: 50px; height: 50px; float: left;"
                    :src="comment.avatar"
                    fit="cover"
                  />
                </div>
                <div style="width: 80%; float: left; word-wrap:break-word; word-break:break-all;">
                  <div style="width: 100%; height: 20px; margin: 2px 10px -10px 20px; opacity: 0.5;">
                    <div style="float: left;">
                      {{ comment.username }}
                    </div>
                    <div style="float: right; color: grey;">
                      {{ comment.createTime }}
                    </div>
                  </div>
                  <div style="width: 100%; margin: 0px 0 30px 20px; font-size: 18px; color: grey; letter-spacing: 2px; line-height: 25px; white-space:pre-line;">
                    {{ comment.content }}
                  </div>
                  <div style="width: 100%; height: 50px;">
                    <el-button size="mini" style="float: right;" round @click="replyComment">回复</el-button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="6" :offset="1">
        <el-card v-loading="culturesInfoLoading" shadow="hover">
          <!-- <h4>相关作品</h4>
          <div>
            <div class="related-work">
              <el-image fit="cover" class="related-work-image" src="https://unsplash.it/300/300?image=548" />
              <el-image fit="cover" class="related-work-image" src="https://unsplash.it/300/300?image=659" />
              <el-image fit="cover" class="related-work-image" src="https://unsplash.it/300/300?image=974" />
            </div>
          </div> -->
          <h4 v-if="culturesInfo.tagList.length >= 1">相关标签</h4>
          <div>
            <div class="related-tag">
              <el-tag v-for="(tag, tagIndex) in culturesInfo.tagList" :key="'tag' + tagIndex" type="info" style="margin: 2px;">{{ tag.name }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { detail } from '@/api/cultures/works/painting'
import { add, list } from '@/api/cultures/comment'

export default {
  data() {
    return {
      count: 0,
      culturesInfoLoading: true, // 数据加载loading
      culturesInfo: {
        culturesId: 0,
        culturesCategoryId: 0,
        starCount: 0,
        createTime: '',
        title: '',
        author: '',
        years: '',
        image: '',
        sourceImage: '',
        content: '',
        tagList: []
      },
      commentInfo: {
        noMoreFlag: false,
        page: 1,
        limit: 10,
        items: []
      },
      newCommentInfo: {
        commentId: 0,
        content: ''
      }
    }
  },
  computed: {
    commentListDisabled() {
      return this.commentInfo.noMoreFlag
    }
  },
  mounted() {
    // 作品id
    this.culturesInfo.culturesId = this.$route.params.culturesId
    // 作品详情内容
    this.paintingDetail()
  },
  methods: {
    // 作品详情
    paintingDetail() {
      detail({ culturesId: this.culturesInfo.culturesId }).then(response => {
        this.culturesInfo = response.data
        this.culturesInfoLoading = false
      })
    },
    // 添加评论
    commentAdd() {
      add({ culturesId: this.culturesInfo.culturesId, commentId: this.newCommentInfo.commentId, content: this.newCommentInfo.content }).then(response => {
        this.commentInfo.items.unshift(response.data)
        this.newCommentInfo.content = ''
        this.newCommentInfo.commentId = 0
        this.$message({ message: '评论成功', type: 'success' })
      })
    },
    // 评论列表
    commentList() {
      list({
        culturesId: this.culturesInfo.culturesId,
        page: this.commentInfo.page,
        limit: this.commentInfo.limit
      }).then(response => {
        if (response.data.page.lastPage === response.data.page.current) {
          this.commentInfo.noMoreFlag = true
        } else {
          this.commentInfo.noMoreFlag = false
        }
        this.commentInfo.items = this.commentInfo.items.concat(response.data.items)
        this.commentInfo.page++
      })
    },
    replyComment() {
      this.$message('暂不支持')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";

.related-work {
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.related-work-image {
  position: relative;
  display: inline-block;
  margin: 2px;
  height: 80px;
  width: 80px;
  text-align: left;
}
</style>
