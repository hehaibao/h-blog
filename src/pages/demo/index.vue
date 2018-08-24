<template>
  <div class="home h">
    <el-container class="h">
        <left-side @showmsg="getcomponentmsg" :msg="msg"></left-side>
        <el-main>
            <div class="breadcrumb">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item>效果演示</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <div class="content">
                <h2 class="title">elementUI demos</h2>
                <div class="demos">
                    <a href="javascript:;" @click="loading" v-loading.fullscreen.lock="fullscreenLoading">loading</a>
                    <a href="javascript:;" @click="toast">toast</a>
                    <a href="javascript:;" @click="messageBox">messageBox</a>
                    <a href="javascript:;" @click="notification">notification</a>
                    <a href="javascript:;" @click="dialog">dialog</a>
                </div>
                <h2 class="title">my demos</h2>
                <div class="demos">
                    <a v-txtDemo="{ color: 'red', fontsize: '18px' }">指令 - 让我变红</a>
                    <a>{{ filterTest | filterA }} - 过滤 - 小写变大写</a>
                </div>
            </div>
            <foot></foot>
        </el-main>
    </el-container>

    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import leftSide from '@/components/aside.vue'
import foot from '@/components/footer.vue'

export default {
  name: 'Demo',
  data () {
    return {
      msg: '',
      filterTest: 'hello world',
      fullscreenLoading: false,
      centerDialogVisible: false
    }
  },
  components: {
    leftSide,
    foot
  },
  directives: {
    // 自定义指令
    txtDemo (el, binding) {
      el.style.color = binding.value.color // 改变字的颜色
      el.style.fontSize = binding.value.fontsize // 改变字的大小
    }
  },
  filters: {
    // 自定义过滤器
    filterA (value) {
      // 将小写过滤成大写
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  methods: {
    loading () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    },
    toast () {
      this.$message.error('测试消息')
    },
    messageBox () {
      this.$alert('你好', '提示', {
        confirmButtonText: '确定',
        callback: action => {
          alert('回调')
        }
      })
    },
    notification () {
      const h = this.$createElement

      this.$notify({
        title: '您有一条消息',
        message: h('i', { style: 'color: teal' }, '恭喜你中奖了，哈哈哈')
      })
    },
    dialog () {
      this.centerDialogVisible = true
    },
    test () {
      alert('todo')
    },
    getcomponentmsg (msg) {
      alert('我在效果演示页-----' + msg)
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
.title {
  margin: 20px 0;
}
.demos a {
    padding: 4px 10px;
    margin-right: 5px;
    background-color: #f2f2f2;
    display: inline-block;
}
</style>
