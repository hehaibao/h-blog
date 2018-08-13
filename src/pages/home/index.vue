<template>
  <div class="home h">
    <el-container class="h">
        <left-side></left-side>
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
                            background
                            layout="prev, pager, next"
                            :total="100">
                        </el-pagination>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content-right">
                        <div class="rt-row"><p class="welcome">下午好，欢迎来到博客</p></div>
                        <div class="rt-row">
                            <el-input
                                placeholder="请输入要搜索的关键字"
                                prefix-icon="el-icon-search"
                                v-model="search">
                            </el-input>
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

export default {
  name: 'Home',
  data () {
    return {
      search: '',
      list: [ // 文章列表 数据模拟
        {
          id: 1,
          title: 'Vue的一些常见面试题',
          desc: '本篇主要结合Vue，以QA的形式列出相关的一些面试题，答案仅供参考~ （Tips: 以后还将会陆续更新！）',
          date: '08月07日',
          tags: ['tag1', 'tag2', 'tag3']
        },
        {
          id: 2,
          title: 'PDF.js和PDFObject.js的使用',
          desc: '前言 这两天有个需求，要在网页上显示PDF文件。让我看看有没有好的解决方法，能不能让非IT人员不能下',
          date: '08月06日',
          tags: ['tag1', 'tag2']
        },
        {
          id: 3,
          title: 'Echarts图表练习篇：学习时长统计',
          desc: '什么是Echarts? ECharts（官网：http://echarts.baidu.com/），一个使用 JavaScript 实现的开源可视',
          date: '08月02日',
          tags: ['tag1', 'tag2']
        },
        {
          id: 4,
          title: '个人的一些js demo分享',
          desc: '三生三世十里桃花',
          date: '08月02日',
          tags: ['tag1', 'tag2']
        }
      ],
      hotList: [ // 热评文章 数据模拟
        {
          id: 1,
          title: '测试文章111111111'
        },
        {
          id: 2,
          title: '测试文章22222222222'
        },
        {
          id: 3,
          title: '测试文章3333333333'
        },
        {
          id: 4,
          title: '测试文章44444444'
        },
        {
          id: 5,
          title: '测试文章55555555555'
        }
      ],
      tags: [ // 标签 数据模拟
        {
          id: 1,
          text: 'vue',
          color: '#cf828d'
        },
        {
          id: 2,
          text: 'wordpress',
          color: '#bcd50d'
        },
        {
          id: 3,
          text: 'js',
          color: '#5b404d'
        },
        {
          id: 4,
          text: 'es2015',
          color: '#3b323f'
        },
        {
          id: 5,
          text: 'webpack',
          color: '#33b484'
        },
        {
          id: 6,
          text: 'vue-router',
          color: '#d970b4'
        },
        {
          id: 7,
          text: 'php',
          color: '#a75b51'
        }
      ]
    }
  },
  components: {
    leftSide,
    foot
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
.hot-list li {
    margin-bottom: 10px;
    color: #4c4c4c;
}
.tags span {
    margin: 0 10px 10px 0;
    display: inline-block;
}
</style>
