<template>
  <v-container grid-list-xl>
    <v-layout row justify-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mt-2">
          <span>GetIn</span>
          <span style="color: #1E90FF;">Touch</span>
        </h2>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="#1E90FF" left>mdi-email</v-icon>
          <a class="hoverAnimation text-decoration-none" href="mailto:davidwu92802@gmail.com">
            <span class="black--text">davidwu98202@</span>
            <span style="color: #1E90FF;">gmail.com</span>
          </a>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="#1E90FF" left>mdi-linkedin</v-icon>
          <a class="hoverAnimation text-decoration-none" href="https://www.linkedin.com/in/aaron-wu-05582415a/" target="_blank">
            <span class="black--text">aaronwu&nbsp;</span>
            <span style="color: #1E90FF;">linkedin</span>
          </a>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="#1E90FF" left>mdi-facebook</v-icon>
          <a class="text-decoration-none" href="https://facebook.com/wuyunlun" target="_blank">
            <span class="black--text">aaronwu&nbsp;</span>
            <span style="color: #1E90FF;">facebook</span>
          </a>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mb-4">
          <span>Contact</span>
          <span style="color: #1E90FF;">Form</span>
        </h2>
        <form ref="form" @submit.prevent="sendEmail">
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  type="text"
                  v-model="user_name"
                  :rules="nameRules"
                  :counter="20"
                  label="Name"
                  name="user_name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  type="email"
                  v-model="user_email"
                  :rules="emailRules"
                  label="E-mail"
                  name="user_email"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
              >
                <v-textarea
                  v-model="message"
                  :rules="bodyErrors"
                  label="Message"
                  name="message"
                  required
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
              >
                <v-btn
                  type="submit"
                  class="mr-4"
                  value="Send"
                >
                  submit
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
         </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import emailjs from '@emailjs/browser';
export default {
  data() {
    return {
     valid: false,
      user_name: '',
      user_email: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      message: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      bodyErrors: [
        v => !!v || 'Messager is required'
      ]
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_33hsze8', 'template_1nv0nva', this.$refs.form, 'user_XxFSwk0iQhZYqps7CzOxA')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.reset()
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    },
    reset () {
      this.$refs.form.reset()
    },
  }
}
</script>

<style lang="scss" scoped>
.hoverAnimation{
  -o-transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
    &:hover{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
}
</style>