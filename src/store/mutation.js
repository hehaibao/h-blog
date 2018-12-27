/**
 * 同步
 */
export default {
  add (state, { num } = { num: 1 }) {
    state.count += num
  },
  diff (state, { num } = { num: 1 }) {
    state.count -= num
  }
}
