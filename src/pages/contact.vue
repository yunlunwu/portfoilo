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
          <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
     valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push("Text must be at least 20 characters long");
      !this.$v.body.required && errors.push("Text is required");
      return errors;
    }
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
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
  }
}
</style>