<template>
  <div>
    <!-- 未登录 -->
    <el-form ref="loginForm" v-if="!isLogin" :model="loginForm" status-icon :rules="rules" label-width="80px" class="login-form">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
          <el-checkbox v-model="loginForm.checked">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
          <router-link to="/register">还没有账号？去注册</router-link> | <router-link to="/">返回首页</router-link>
      </el-form-item>
    </el-form>

    <!-- 已登录 -->
    <el-card class="box-card" v-if="isLogin">
      <div class="text item">
        Hi, 欢迎回来！当前状态：已登录
        <p><router-link to="/">回到首页</router-link></p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { setStore, getStore } from '@/utils/mUtils'

export default {
  name: 'Login',
  data () {
    return {
      isLogin: false, // 是否登录，默认未登录
      loginForm: {
        username: '',
        password: '',
        checked: false
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' }
        ],
        password: [
          { required: true, message: '请输入密码' }
        ]
      }
    }
  },
  mounted () {
    this.isLogin = getStore('isLogin') // 获取是否登录状态
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 通过验证
          // TODO: 请求登录接口，此处我只演示部分代码
          setStore('isLogin', true) // 记录登录状态至缓存
          this.loginForm.username = ''
          this.loginForm.password = ''
          this.$router.push({ path: '/' }) // 跳转首页
        } else {
          // 未通过验证
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.login-form {
    width: 400px;
    margin: 20px auto auto;
    padding: 20px;
    border: 1px solid #ddd;
}
.login-form h2 {
    font-size: 24px;
    text-align: center;
    margin: 30px 0;
}
</style>
