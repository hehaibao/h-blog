<template>
  <div id="app">
      <keep-alive>
        <transition name="router-fade" mode="out-in">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>

      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
#app {
  height: 100%;
}
</style>
