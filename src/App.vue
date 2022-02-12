<template>
  <v-app id="app">
    <router-view></router-view>
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
  mounted () {
    window.addEventListener('scroll', () => {
      let scrollt = document.documentElement.scrollTop + document.body.scrollTop
      if (scrollt > 200) {
        this.show = true
      }
      if (scrollt === 0) {
        this.show = false
      }
    })
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
