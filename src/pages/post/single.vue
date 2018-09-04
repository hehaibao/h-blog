<template>
    <div class="home h">
      <el-container class="h">
          <left-side @showmsg="getcomponentmsg" :msg="msg"></left-side>
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
              <div class="con mt20">
                <h4>此处展示一下codemirror代码编辑器</h4>
                <codemirror v-model="code" :options="cmOptions"></codemirror>
              </div>
              <div class="rate">
                <el-rate
                  v-model="rate"
                  show-text>
                </el-rate>
              </div>
              <p class="tc">
                <el-button type="warning" icon="el-icon-share">点赞（10）</el-button>
                <el-button type="success" icon="el-icon-star-off" @click="showPayBox">打赏</el-button>
              </p>
              <div class="comment-box">
                <h2>说点什么</h2>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="昵称">
                    <el-input v-model="form.name" placeholder="您的昵称"></el-input>
                  </el-form-item>
                  <el-form-item label="邮箱">
                    <el-input v-model="form.email" placeholder="您的常用邮箱"></el-input>
                  </el-form-item>
                  <el-form-item label="链接">
                    <el-input v-model="form.url" placeholder="您的网站链接"></el-input>
                  </el-form-item>
                  <el-form-item label="内容">
                    <el-input type="textarea" v-model="form.desc" placeholder="说点啥吧，不然我都不知道你来过"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                  </el-form-item>
                </el-form>
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
// require component
import { codemirror } from 'vue-codemirror'
// language js
import 'codemirror/mode/javascript/javascript.js'
// require styles
import 'codemirror/lib/codemirror.css'
// theme css
import 'codemirror/theme/base16-dark.css'

export default {
  name: 'Single',
  data () {
    return {
      msg: '',
      id: '',
      title: '',
      author: '',
      publishDate: '',
      viewCount: '',
      content: '',
      fullscreenLoading: true,
      rate: null,
      form: {
        name: '',
        email: '',
        url: '',
        desc: ''
      },
      code: `const pluckDeep = key => obj => key.split(".").reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`,
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        readOnly: true
      }
    }
  },
  components: {
    leftSide,
    foot,
    codemirror
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    async fetchData () {
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
    },
    getcomponentmsg (msg) {
      alert('我在详情页-----' + msg)
    },
    showPayBox () {
      // 显示打赏弹出层
      this.$alert('<strong>这里放支付宝和微信图片即可</strong>', '打赏支持', {
        dangerouslyUseHTMLString: true
      })
    },
    onSubmit () {
      // TODO.
      alert('submit')
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
.rate, .mt20 {
  margin-top: 20px;
}
.comment-box {
  margin-top: 40px;
}
.comment-box h2 {
  margin-bottom: 20px;
}
.tc {
  text-align: center;
}
</style>
