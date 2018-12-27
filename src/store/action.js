/**
 * 异步
 */
export default {
  // 异步 1秒之后加1
  asyncAdd (store, { num } = { num: 1 }) {
    setTimeout(() => {
      store.commit('add', { num })
    }, 1000)
  },
  // 异步 1秒之后减1
  asyncDiff (store, { num } = { num: 1 }) {
    setTimeout(() => {
      store.commit('diff', { num })
    }, 1000)
  }
}
