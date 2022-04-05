<template>
  <v-layout column justify-center align-center class="mt-5 pt-2">
    <VueCompareImage
      class="hidden-md-and-down text-center"
      hover
      :style="{ minWidth: '1000px', maxHeight: '600px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />
    <br>
    <vue-typer class="headline" :repeat="0" text="Aaron Wu"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div class="intro">
            <h3 class="headline mb-0">
              <span>About</span>
              <span style="color: #1E90FF;">Me</span>
            </h3>
            <div>
              <p>
                I’m Aaron wu . I'm a front-end developer who
                is passionate about
                <span
                  class="font-weight-bold" style="color:#1E90FF; word-break:break-word;"
                >VUE.js</span>, creating great website interface,
                fighting for simplicity over complexity.
                Knowledgeable Front End Developer adept at creating successful websites that
                meet customer needs. Specializing in collaborating with customers to gather
                requirements, produce plans and improve designs for usability and functionality.
                Fully proficient in HTML & CSS and Javascript.
              </p>
            </div>
          </div>
        </v-card-title>

        <div class="hidden-sm-and-down text-center mb-10">
          <v-btn
            class="hoverAnimation ml-5"
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            color="#1E90FF"
            :href="icon.href"
            target="_blank"
          >
            <v-icon>{{icon.icon}}</v-icon>
          </v-btn>
        </div>

        <div class="hidden-md-and-up text-center mb-10">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            color="#1E90FF"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer"
import VueCompareImage from "vue-compare-image"
export default {
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/yunlunwu", icon: "mdi-github" },
        {
          href: "https://www.linkedin.com/in/aaron-wu-05582415a/",
          icon: "mdi-linkedin"
        },
        {
          href: "https://pda.104.com.tw/profile/preview?vno=75s4hecjp",
          icon: "mdi-bank"
        },
        {
          href: "https://facebook.com/wuyunlun",
          icon: "mdi-facebook"
        }
      ],
      text1: ["Front-End Developer", "Game Lover", "Web Developer", "Software Engineer"],
      leftImage: "/static/img/home/image01.JPG?t=20220405",
      rightImage: "/static/img/home/image03.jpg?t=20220405",
      leftImage2: "/static/img/home/image02.JPG",
      rightImage2: "/static/img/home/mobile_image01.JPG?t=20220405",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style lang="scss" scoped>
.hoverAnimation{
  -o-transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
    &:hover{
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }
}
</style>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
}
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #1E90FF;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}
.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #1E90FF;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>
<style lang="scss" scoped>
.intro{
  p{
    word-break: break-word;
  }
}
</style>
<style lang="scss">
.vci-container{
  .left-image{
    // max-width: 1000px;
  }
  .right-image {
    // max-width: 1000px;
  }
}
</style>