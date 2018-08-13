<template>
    <div class="h">
      <el-aside width="200px" class="aside h">
          <a target="_blank" :href="blogUrl">
            <img :src="logo" class="logo" alt="">
            <h1>{{ title }}</h1>
          </a>
          <p class="solgan">{{ solgan }}</p>
          <ul>
              <li v-for="nav in navs" :key="nav.text">
                  <router-link :to="nav.link">{{ nav.text }}</router-link>
              </li>
          </ul>
      </el-aside>
    </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      title: '博客标题',
      blogUrl: 'http://www.hehaibao.com/',
      solgan: '不忘初心，砥砺前行',
      logo: require('../assets/images/logo.jpg'),
      navs: [ // 菜单
        {
          text: '首页',
          link: '/'
        },
        {
          text: '登录',
          link: '/login'
        },
        {
          text: '注册',
          link: '/register'
        },
        {
          text: '菜单4',
          link: '/'
        },
        {
          text: '菜单5',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.logo {
    width: 80px;
    height: 80px;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    margin: 25px auto;
}
h1 {
    color: #fff;
    font-size: 22px;
    margin: 20px auto;
}
.solgan {
    color: #f2f2f2;
    font-size: 12px;
}
.el-aside {
    text-align: center;
    height: 100%;
    background-color: #4ec6c8;
}
.el-aside ul {
    margin: 40px 25% 0;
}
.el-aside li {
    border-bottom: 1px dashed #d1f1e9;
    padding: 10px 0;
}
.el-aside li a {
    font-size: 16px;
    color: #fff;
    display: block;
}
.el-aside li a:hover {
    color: #333;
}
</style>
