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
          <v-col class="text-left hidden-md-and-up">
            <span class="black--text">Aaron</span>
            <span class="blue--text">WU</span>
            <span class="black--text">Scope</span>
          </v-col>
          <v-col cols="12" class="hidden-sm-and-down">
            <div align-self="center" class="lang">
              <v-list-item>
                <v-list-item-title class="contact">
                  <span class="black--text">Aaron</span>
                  <span class="blue--text">WU</span>
                  <span class="black--text">Scope</span>
              </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >HOME</a>
                </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >RESUME</a>
                </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >PORTFILIO</a>
                </v-list-item-title>
                <v-list-item-title class="contact">
                  <a
                    href="/aboutUs"
                    class="contact text-decoration-none"
                  >CONTACT</a>
                </v-list-item-title>
              </v-list-item>
            </div>
          </v-col>
          <v-col class="text-right hidden-md-and-up">
            <v-icon large style="color: black;" @click="drawer = true">mdi-menu-open</v-icon>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      right
    >
      <v-list
        nav
      >
        <v-btn
          absolute
          icon
          dark
          right
          @click="showPopup"
        >
          <v-icon style="color: black;">
            mdi-close
          </v-icon>
        </v-btn>
        <v-list-item class="mt-8 mb-0">
          <v-list-item-title style="border-left: 4px solid #219655;">
            <a class="text text-decoration-none" href="/"> &nbsp;  HOME </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="mb-0">
          <v-list-item-title style="border-left: 4px solid #219655;">
            <a class="text text-decoration-none" href="/resume"> &nbsp; RESUME </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="mb-0">
          <v-list-item-title style="border-left: 4px solid #219655;">
            <a class="text text-decoration-none" href="/portfolio"> &nbsp; PORTFOLIO </a>
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="mb-0">
          <v-list-item-title style="border-left: 4px solid #219655;">
            <a class="text text-decoration-none text-uppercase" href="/contact"> &nbsp; CONTACT </a>
          </v-list-item-title>
        </v-list-item>
        <!-- <v-list-item class="mb-0" style="width:100%">
          <v-list-group
            no-action
            class="ml-n2"
            style="width:100%"
          >
            <template #activator>
              <v-list-item-title style="border-left: 4px solid #219655;">
                <a class="text text-uppercase"> &nbsp; {{ $t('home.p5') }}</a>
              </v-list-item-title>
            </template>
            <v-list-item
              v-for="(item,i) in languages"
              :key="i"
              link
              @click="setLanguage(item.content)"
            >
              <v-list-item-title style="cursor:pointer" :class="{ hightlight: language == item.content}" v-text="item.title" />
            </v-list-item>
          </v-list-group>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
export default {
  data () {
    return {
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
    showPopup () {
      this.drawer = false
    },
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

