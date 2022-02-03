<template>
  <v-app id="app">
    <router-view></router-view>
    <!-- <div class="topUp" v-if="show" @click="toTop">
      <div
        style="{
          height: 100%;
          width: 100%;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
        }"
      >
        <img src="/static/img/common/top.png" alt="" style="width: 100%;display:block;">
      </div>
    </div> -->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  },
  metaInfo: {
    title: "Home",
    titleTemplate: "AaronWu space",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Aaronwu's Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "AaronWu space" },
      { property: "og:site_name", content: "AaronWu space" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://yunlunwu.portfolio" },
      {
        property: "og:image",
        content: ""
      },
      { property: "og:description", content: "yunlunwu's portfolio" }
    ]
  },
}
</script>
<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #fff;
}
</style>
