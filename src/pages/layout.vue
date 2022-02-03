<template>
<div>
  <div class="fixed">
    <my-header></my-header>
  </div>
  <div class="main">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
  <my-footer></my-footer>
</div>
</template>

<script>
import myHeader from '@/components/myHeader.vue'
import myFooter from '@/components/myFooter.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="scss">
.center-aligned {
  text-align: center;
}
.center-margin {
  margin: 0 auto;
}
.inline-block {
  display: inline-block;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fixed {
  position: fixed;
  width: 100%;
  height: 70px;
  top: 0px;
  left: 0px;
  z-index: 1900;
  padding: 0;
}
.main {
  position: relative;
  overflow: hidden;
}
</style>
