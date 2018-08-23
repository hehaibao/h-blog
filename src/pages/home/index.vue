<template>
  <div class="home h">
    <el-container class="h">
        <left-side @showmsg="getcomponentmsg" :msg="msg"></left-side>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="16">
                    <el-carousel :interval="4000" type="card" height="200px">
                      <el-carousel-item v-for="item in 4" :key="item">
                      <h3>{{ item }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                    <div class="grid-content-left">
                        <!-- 列表 -->
                        <h2>最新文章</h2>
                        <ul class="list">
                            <li v-for="v in list" :key="v.id">
                                <h2><router-link :to="{name: 'Detail', params: { id: v.id }}">{{ v.title }}</router-link></h2>
                                <p class="article-info">
                                    <span><i class="el-icon-time"></i> {{ v.date }}</span>
                                    <i class="el-icon-document"></i> <span class="tags" v-for="tag in v.tags" :key="tag">{{ tag }}</span>
                                </p>
                                <p class="article-desc">{{ v.desc }}</p>
                            </li>
                        </ul>
                        <!-- 分页 -->
                        <el-pagination
                            @current-change="handleCurrentChange"
                            background
                            layout="prev, pager, next"
                            :total="newsListCount">
                        </el-pagination>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content-right">
                        <div class="rt-row"><p class="welcome">下午好，欢迎来到博客</p></div>
                        <div class="rt-row">
                            <el-input
                                class="search-ipt"
                                placeholder="请输入要搜索的关键字"
                                v-model="search">
                            </el-input>
                            <el-button slot="append" icon="el-icon-search" @click="serachPost"></el-button>
                        </div>
                        <div class="rt-row">
                            <h2>热评文章</h2>
                            <ul class="hot-list">
                                <li v-for="hot in hotList" :key="hot.id">{{ hot.title }}</li>
                            </ul>
                        </div>
                        <div class="rt-row">
                            <h2>热门标签</h2>
                            <div class="tags">
                                <span v-for="tag in tags" :key="tag.id" :style="{color: tag.color}">{{ tag.text }}</span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <foot></foot>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import leftSide from '@/components/aside.vue'
import foot from '@/components/footer.vue'
import axios from 'axios'
// eslint-disable-next-line
import mockdata from '@/common/mockdata'

export default {
  name: 'Home',
  data () {
    return {
      msg: '',
      search: '',
      newsListCount: 0,
      list: [],
      hotList: [],
      tags: []
    }
  },
  components: {
    leftSide,
    foot
  },
  mounted () {
    this.getNewsList() // 获取最新文章
    this.getHotList() // 获取热评文章
    this.getTagsList() // 获取标签
  },
  methods: {
    getNewsList () {
      axios.get('newsList').then(res => {
        let data = res.data
        this.newsListCount = data.total // 总数量
        this.list = data.lists
      })
    },
    getHotList () {
      axios.get('hotList').then(res => {
        let data = res.data
        this.hotList = data.lists
      })
    },
    getTagsList () {
      axios.get('tagsList').then(res => {
        let data = res.data
        this.tags = data.lists
      })
    },
    handleCurrentChange (val) {
      // 分页改变时回调
      console.log(`当前页: ${val}`)
      this.getNewsList()
    },
    serachPost () {
      // 搜索文章
      alert('todo')
    },
    getcomponentmsg (msg) {
      alert('我在首页------' + msg)
    }
  }
}
</script>

<style scoped>
/* carousel */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    text-align: center;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.grid-content-left {
    margin-top: 20px;
}
.grid-content-left > h2 {
    margin-bottom: 30px;
}

/* left */
.list li {
    border-bottom: 1px dotted #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
.list li h2 {
    font-size: 18px;
    font-weight: 400;
}
.list .article-info {
    font-size: 14px;
    color: #999;
}
.list .article-info .tags {
    margin-right: 3px;
}
.list .article-desc {
    font-size: 14px;
    color: #333;
    word-break: break-all;
    line-height: 1.4;
}
.el-pagination {
    margin-bottom: 20px;
}

/* right */
.welcome {
    font-weight: 700;
    font-size: 16px;
}
.rt-row {
    margin-bottom: 25px;
}
.rt-row h2 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 15px;
    position: relative;
    padding-left: 15px;
}
.rt-row h2:before {
    content: "";
    width: 4px;
    height: 18px;
    display: block;
    background-color: #4ec6c8;
    position: absolute;
    top: 0;
    left: 0;
}
.search-ipt {
    width: 250px;
}
.hot-list li {
    margin-bottom: 10px;
    color: #4c4c4c;
}
.tags span {
    margin: 0 10px 10px 0;
    display: inline-block;
}
</style>
