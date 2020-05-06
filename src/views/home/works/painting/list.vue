<template>
  <div>
    <div class="body-section-title">
      <p>绘画作品</p>
    </div>
    <el-divider>
      <i class="el-icon-picture" />
    </el-divider>
    <div style="height: 800px; width: 100%; overflow-x: hidden; overflow-y: scroll; padding-bottom: 20px; margin-top: 20px;">
      <vueWaterfallEasy ref="waterfall" :max-cols="maxCols" :imgs-arr="items" @scrollReachBottom="getPaintingList" @click="showSourceImage">
        <div slot-scope="props">
          <p style="lint-height: 20px; padding: 0 15px 15px 15px; color: grey;">{{ props.value.info }}</p>
        </div>
        <div slot="waterfall-over">已经没有更多数据啦……</div>
      </vueWaterfallEasy>
    </div>
  </div>
</template>

<script>
import { list } from '@/api/cultures/works/painting'
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  components: {
    vueWaterfallEasy
  },
  data() {
    return {
      maxCols: 5,
      items: [],
      pageConfig: {
        page: 1,
        limit: 10
      }
    }
  },
  mounted() {
    this.getPaintingList()
  },
  methods: {
    getPaintingList() {
      list(this.pageConfig).then(response => {
        if (response.data.items.length === 0) {
          this.$message('已经没有更多数据啦……')
          this.$refs.waterfall.waterfallOver()
          return
        }
        response.data.items.forEach(element => {
          this.items.push({ 'info': element.title, 'src': element.image })
        })
        this.pageConfig.page++
      })
    },
    showSourceImage(event, { index, item }) {
      // 阻止a标签跳转
      event.preventDefault()
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() === 'img') {
        console.log('img clicked', index, item)
        this.$message('hhhh')
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/home/index.scss";

.body-section-title {
  font-size: 30px;
  font-weight: inherit;
  margin: 40px 0 40px 0;
  letter-spacing: 5px;
}
.vue-waterfall-easy-container {
  width: 100%!important;
}
.vue-waterfall-easy-scroll {
  width: 110%!important;
  margin-left: -5%;
}
</style>
