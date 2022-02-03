<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <div class="circles">
      <p>
        404
        <br>
        <small>PAGE NOT FOUND</small>
      </p>
      <span class="circle big"></span>
      <span class="circle med"></span>
      <span class="circle small"></span>
      <br>
      <br>
      <v-btn large to="/" class="mt-10 flash animated infinite">
        <v-icon>mdi-arrow_back</v-icon>GO HOME
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.circles:after {
  content: "";
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: -50px;
  left: 0;
  transform: skewY(-10deg);
  -webkit-transform: skewY(-4deg);
}
.circles {
  text-align: center;
  position: relative;
}
.circles p {
  font-size: 200px;
  color: #1E90FF;
  position: relative;
  z-index: 9;
  line-height: 100%;
}
.circles p small {
  font-size: 40px;
  line-height: 100%;
  vertical-align: top;
}
.circles .circle.small {
  width: 400px;
  height: 400px;
  background-image: url('/static/img/common/images.png');
  position: absolute;
  z-index: 1;
  top: 80px;
  left: 50%;
  animation: 7s smallmove infinite cubic-bezier(1, 0.22, 0.71, 0.98);
  -webkit-animation: 7s smallmove infinite cubic-bezier(1, 0.22, 0.71, 0.98);
  animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
}
.circles .circle.med {
  width: 400px;
  height: 400px;
  background-image: url('/static/img/common/images-2.png');
  position: absolute;
  z-index: 1;
  top: 0;
  left: 10%;
  animation: 7s medmove infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);
  -webkit-animation: 7s medmove infinite cubic-bezier(0.32, 0.04, 0.15, 0.75);
  animation-delay: 0.4s;
  -webkit-animation-delay: 0.4s;
}
.circles .circle.big {
  width: 400px;
  height: 400px;
  background-image: url('/static/img/common/images-3.png');
  position: absolute;
  z-index: 1;
  top: 200px;
  right: 0;
  animation: 8s bigmove infinite;
  -webkit-animation: 8s bigmove infinite;
  animation-delay: 3s;
  -webkit-animation-delay: 1s;
}
.circles .animated {
  color: #1E90FF;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both
}

.circles .animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite
}

.circles .flash {
  -webkit-animation-name: flash;
  animation-name: flash
}

@-webkit-keyframes flash {

  0%,
  100%,
  50% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0.4
  }
}

@keyframes flash {

  0%,
  100%,
  50% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0.4;
  }
}
@-webkit-keyframes smallmove {
  0% {
    top: 10px;
    left: 45%;
    opacity: 0.3;
  }
  25% {
    top: 300px;
    left: 40%;
    opacity: 0.3;
  }
  50% {
    top: 240px;
    left: 55%;
    opacity: 0.3;
  }
  75% {
    top: 100px;
    left: 40%;
    opacity: 0.3;
  }
  100% {
    top: 10px;
    left: 45%;
    opacity: 0,35;
  }
}
@keyframes smallmove {
  0% {
    top: 10px;
    left: 45%;
    opacity: 0.3;
  }
  25% {
    top: 300px;
    left: 40%;
    opacity: 0.3;
  }
  50% {
    top: 240px;
    left: 55%;
    opacity: 0.3;
  }
  75% {
    top: 100px;
    left: 40%;
    opacity: 0.3;
  }
  100% {
    top: 10px;
    left: 45%;
    opacity: 0.3;
  }
}
@-webkit-keyframes medmove {
  0% {
    top: 0px;
    left: 20%;
    opacity: 0.3;
  }
  25% {
    top: 300px;
    left: 80%;
    opacity: 0.3;
  }
  50% {
    top: 240px;
    left: 55%;
    opacity: 0.3;
  }
  75% {
    top: 100px;
    left: 40%;
    opacity: 0.3;
  }
  100% {
    top: 0px;
    left: 20%;
    opacity: 0.3;
  }
}
@keyframes medmove {
  0% {
    top: 0px;
    left: 20%;
    opacity: 0.3  
  }
  25% {
    top: 300px;
    left: 80%;
    opacity: 0.3;
  }
  50% {
    top: 240px;
    left: 55%;
    opacity: 0.3;
  }
  75% {
    top: 100px;
    left: 40%;
    opacity: 0.3;
  }
  100% {
    top: 0px;
    left: 20%;
    opacity: 0.3;
  }
}
@-webkit-keyframes bigmove {
  0% {
    top: 0px;
    right: 4%;
    opacity: 0.3;
  }
  25% {
    top: 100px;
    right: 40%;
    opacity: 0.3;
  }
  50% {
    top: 240px;
    right: 45%;
    opacity: 0.3;
  }
  75% {
    top: 100px;
    right: 35%;
    opacity: 0.3;
  }
  100% {
    top: 0px;
    right: 4%;
    opacity: 0.3;
  }
}
@keyframes bigmove {
  0% {
    top: 0px;
    right: 4%;
    opacity: 0.3;
  }
  25% {
    top: 100px;
    right: 40%;
    opacity: 0.3;
  }
  50% {
    top: 240px;
    right: 45%;
    opacity: 0.3;
  }
  75% {
    top: 100px;
    right: 35%;
    opacity: 0.3;
  }
  100% {
    top: 0px;
    right: 4%;
    opacity: 0.3;
  }
}
</style>