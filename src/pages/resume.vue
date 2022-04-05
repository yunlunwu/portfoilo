<template>
  <v-layout row wrap class="layout mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline>
          <v-timeline-item
            v-for="(edu, i) in educations"
            :key="i"
            :color="edu.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${edu.color}--text`"
                v-text="edu.year"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${edu.color}--text`">
                {{ edu.title }}
              </h2>
              <div v-html="edu.description">
                <!-- {{ edu.description }} -->
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Expeirence</h2>
      <v-card-text class="py-0">
        <v-timeline >
          <v-timeline-item
            v-for="(exp, i) in experience"
            :key="i"
            :color="exp.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${exp.color}--text`"
                v-text="exp.year"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${exp.color}--text`">
                {{exp.title}}
              </h2>
              <div>
                {{exp.description}}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center  align-content-start wrap class="layout mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Front-end Coding</span>

          <span style="color: #1E90FF;">Skills</span>
        </h2>
        <br>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="blue"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
          <strong style="line-height:36px;">Javascript, HTML & CSS</strong>
        </div>
       <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="blue"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">Vue, Vuetify framework</strong>
        </div>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">PWA(progress web app)</strong>
        </div>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">React</strong>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Back-end Coding</span>
          <span style="color: #1E90FF;">Skills</span>
        </h2>
        <br>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="blue"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
          <strong style="line-height:36px;">PHP programe language</strong>
        </div>
       <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="blue"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">Python</strong>
        </div>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">Java</strong>
        </div>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">C language</strong>
        </div>
        <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">linux, docker, nignx</strong>
        </div>
         <div class="section">
          <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            
          </svg>
          <strong style="line-height:36px;">Matlab with mechine learning</strong>
        </div>
      </v-flex>
      <div class="my-6 pt-2">
        <a  
          href="/static/img/resume/AaronWu_Resume.PDF"
          download="aaronwu_resume"
        >
          <v-btn
            href=""
            target="_blank"
            color="#1E90FF"
            dark
            large
          >
            Download Resume
            <v-icon right dark>mdi-file-download</v-icon>
          </v-btn>
        </a>
      </div>
    </v-layout>
  </v-layout>
    
</template>
<script>
export default {
  data() {
    return {
      educations: [
        // {
        //   color: 'cyan',
        //   year: '2013',
        //   title: 'High School (Taiwan)',
        //   description: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,' +
        //   'sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus,' + 
        //   'vix an salutandi sententiae.'
        // },
        {
          color: 'green',
          year: '2015',
          title: 'IES Fundation (Brisbane, AU)',
          description: 'Laid the information technology fundation before entering University.'
        },
        {
          color: 'pink',
          year: '2020',
          title: 'The Univisity of Queensland, Bachelor Honour degree (Brisbane, AU)',
          description: 'Studied with hornour degress software engineering. <br>' +
          '• Member of student council.<br>' + '• Member of UQ TASIA team.<br>'+
          '• Member of BSA (Brisbane student association)<br>' +
          '• Engineering Undergraduate society (EUS) member' 
        }
      ],
      experience: [
        {
          color: 'cyan',
          year: '2016',
          title: 'Australia post office (Alexandra hills & Mansfield QLD, AU )',
          description: 'Counter staff'
        },
        {
          color: 'green',
          year: '2019',
          title: 'Front-end developer (SPACE Platform company, AU)',
          description: 'Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.'
        },
        {
          color: 'pink',
          year: '2020',
          title: 'web developer(Rainbow tech company, Taiwan)',
          description: 'Undertake company website.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.layout{
  max-width: 1200px;
  margin: 0 auto;
  .section{
    display: flex;
    margin: 30px 0;
  }
  @media only screen and (max-width: 450px) {
    margin: 20px;
  } 
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #1E90FF;
  fill: #1E90FF;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 50px;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  // margin: 10% auto;
  box-shadow: inset 0px 0px 0px #1E90FF;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>