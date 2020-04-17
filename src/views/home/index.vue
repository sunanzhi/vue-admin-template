<template>
  <div>
    <div class="body-section-title">
      <p>近期热门</p>
    </div>
    <el-divider>
      <i v-if="hotListLoading" class="el-icon-loading" />
      <i v-if="!hotListLoading" class="el-icon-hot-water" />
    </el-divider>
    <div v-for="(hotItem, hotIndex) in hotList.topList" :key="'hotIndex' + hotIndex">
      <div class="hover-effect smoothie hot-cultures-category">
        <a href="#" class="smoothie">
          <el-image
            style="height: 413px;"
            class="img-responsive smoothie"
            :src="hotItem.image"
          />
        </a>
        <div class="hover-overlay smoothie text-center">
          <div class="vertical-align-bottom">
            <h4>{{ hotItem.title }}</h4>
          </div>
        </div>
        <div class="hover-caption dark-overlay smoothie text-center">
          <div class="vertical-align-top">
            <p>
              <small>{{ hotItem.summary }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(commonItem, commonIndex) in hotList.commonList" :key="'commonIndex' + commonIndex">
      <div class="hover-effect smoothie not-hot-cultures-category">
        <a href="#" class="smoothie">
          <el-image
            style="height: 290px"
            class="img-responsive smoothie"
            :src="commonItem.image"
          />
        </a>
        <div class="hover-overlay smoothie text-center">
          <div class="vertical-align-bottom">
            <h4>{{ commonItem.title }}</h4>
          </div>
        </div>
        <div class="hover-caption dark-overlay smoothie text-center">
          <div class="vertical-align-top">
            <p>
              <small>{{ commonItem.summary }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { hotList } from '@/api/cultures/category'

export default {
  data() {
    return {
      hotList: {
        topList: [],
        commonList: []
      },
      hotListLoading: true
    }
  },
  mounted() {
    this.getHotList()
  },
  methods: {
    getHotList() {
      this.hotListLoading = true
      hotList().then(response => {
        this.hotList.topList = response.data.topList
        this.hotList.commonList = response.data.commonList
      })
      this.hotListLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/home/index.scss";

.el-row {
  margin-bottom: 50px;
}
.body-section-title {
  font-size: 30px;
  font-weight: inherit;
  margin: 40px 0 40px 0;
  letter-spacing: 5px;
}
.hot-cultures-category {
  width: 46.8%;
  margin: 0px 1.6% 3% 1.6%;
  float: left;
}
.not-hot-cultures-category {
  width: 30.13%;
  margin: 0px 1.6% 3% 1.6%;
  float: left;
}
</style>
