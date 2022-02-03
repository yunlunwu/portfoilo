<template>
  <div class="header">
    <v-app-bar
      color="transparent"
      height="80"
      dark
      class="text-center"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div align-self="center" class="reverse justify-center d-flex bp400">
              <v-app-bar-title class="headline">
                  <span class="black--text">Aaron</span>
                  <span class="blue--text">WU</span>
                  <span class="black--text">Space</span>
              </v-app-bar-title>
            </div>
            <div align-self="center" class="lang">
              <v-list-item>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >home</a>
                </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >resume</a>
                </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >portfolio</a>
                </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >contact</a>
                </v-list-item-title>
              </v-list-item>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      dialog: false,
      languages: [
        { title: 'English', content: 'en' },
        { title: 'PORTUGUÊS', content: 'pt' },
        { title: 'ESPAÑOL', content: 'es' }
      ]
    }
  },
  computed: {
    // language () {
    //   return this.$i18n.locale
    // },
    // current_lang() {
    //   const current = this.languages.find((x) => {
    //     if(this.$i18n.locale === x.content) {
    //       return {
    //         title: x.title
    //       }
    //     }
    //   })
    //   return current.title
    // }
  },
  methods: {
    // handleSetLanguage (lang) {
    //   Cookies.set('language', lang, { expires: 1000 })
    //   location.reload()
    // }
  }
}
</script>
<style lang="scss" scoped>
.container{
  padding: 0;
}
.bp400 {
  float: left;
  max-width: 200px;
  .logo {
    padding-top: 15px;
    width: 100%;
    @media only screen and (max-width: 450px) {
      max-width:90px;
    }
  }
}
.lang{
  // float: right;
  margin: 0 auto;
  text-align: center;
  .hightlight {
    color: #cd8b09;
  }
}
.headerUnderline{
  background-color: #359ffd;
  width: 100%;
  height: 5px;
}
@media only screen and (max-width: 1150px) {
  .bp400 {
    min-width: 120px;
  }
}
@media only screen and (max-width: 500px) {
  .bp400 {
    padding-left: 0px!important;
    padding-right: 0px!important;
    min-width: 120px;
    .logo {
      width: 100%;
    }
  }

}
</style>
<style lang="scss">
.v-icon.v-icon {
  align-items: normal !important;
}
.v-toolbar{
  box-shadow: none !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  .hightlight {
    color: #cd8b09;
  }
  &:hover {
    background-color: #b5b5b5;
  }
}
</style>

