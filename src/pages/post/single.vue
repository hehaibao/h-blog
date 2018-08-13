<template>
    <div class="home h" v-loading="fullscreenLoading">
      <el-container class="h">
          <left-side></left-side>
          <el-main>
            <div class="breadcrumb">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">文章</a></el-breadcrumb-item>
                <el-breadcrumb-item>正文</el-breadcrumb-item>
              </el-breadcrumb>
            </div>

            <div class="content">
              <h2>{{ title }}</h2>
              <p>
                <span>作者：{{ author }}</span>
                <span>发布日期：{{ publishDate }}</span>
                <span>浏览量：{{ viewCount }}</span>
              </p>
              <div class="con" v-html="content"></div>
              <div class="rate">
                <el-rate
                  v-model="rate"
                  show-text>
                </el-rate>
              </div>
            </div>
            <foot></foot>
          </el-main>
      </el-container>
    </div>
</template>

<script>
import leftSide from '@/components/aside.vue'
import foot from '@/components/footer.vue'

export default {
  name: 'Single',
  data () {
    return {
      id: '',
      title: '',
      author: '',
      publishDate: '',
      viewCount: '',
      content: '',
      fullscreenLoading: true,
      rate: null
    }
  },
  components: {
    leftSide,
    foot
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    hideLoading () {
      // 2秒后关闭loading
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    async fetchData () {
      this.hideLoading() // 关闭模拟loading
      this.id = this.$route.params.id // 获取URL传过来的参数id
      // 请求接口 获取详情数据 TODO
      // 此处没有用mock，简单的模拟一下做演示
      switch (this.id) {
        case 1:
          this.title = 'Vue的一些常见面试题'
          break
        case 2:
          this.title = 'PDF.js和PDFObject.js的使用'
          break
        case 3:
          this.title = 'Echarts图表练习篇：学习时长统计'
          break
        case 4:
          this.title = '个人的一些js demo分享'
          break
      }
      this.author = 'haibao'
      this.publishDate = '2018-08-13'
      this.viewCount = '200'
      this.content = '<strong>当前文章的ID是：</strong>' + this.id
    }
  }
}
</script>

<style scoped>
.breadcrumb {
  background-color: #f2f2f2;
  padding: 10px;
}
.content {
  padding: 25px 0;
  min-height: 450px;
}
.rate {
  margin-top: 20px;
}
</style>
