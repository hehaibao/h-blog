<template>
  <div>
    <el-form ref="regForm" :model="regForm" status-icon :rules="rules" label-width="80px" class="reg-form">
      <h2>用户注册</h2>
      <el-form-item label="用户名" prop="username">
          <el-input v-model="regForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="regForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password_confirm">
          <el-input type="password" v-model="regForm.password_confirm" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
          <el-input v-model="regForm.email"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit('regForm')">注册</el-button>
          <router-link to="/login">已有账号？去登录</router-link> | <router-link to="/">返回首页</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.regForm.password_confirm !== '') {
          this.$refs.regForm.validateField('password_confirm')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.regForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      regForm: {
        username: '',
        password: '',
        password_confirm: '',
        email: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' }
        ],
        password: [
          { required: true, validator: validatePass }
        ],
        password_confirm: [
          { required: true, validator: validatePass2 }
        ],
        email: [
          { required: true, message: '请输入常用的邮箱' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 通过验证
          // TODO: 请求注册接口
          alert('submit!')
          // this.$router.push({ path: '/' }) // 跳转首页
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
.reg-form {
    width: 400px;
    margin: 20px auto auto;
    padding: 20px;
    border: 1px solid #ddd;
}
.reg-form h2 {
    font-size: 24px;
    text-align: center;
    margin: 30px 0;
}
</style>
