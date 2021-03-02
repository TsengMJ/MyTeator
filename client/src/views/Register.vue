<template>
  <v-container class="register_container">
    <v-card width="400px" class="mt-10">
      <v-card-title style="justify-content: center">註冊</v-card-title>
      <v-card-subtitle>請輸入您的個人資料</v-card-subtitle>
      <v-card-actions>
        <v-col>
          <v-row>
            <v-text-field
                v-model="first_name"
                class="col-5 ml-3"
                :rules="[input_rules.required]"
                placeholder="姓"
                prepend-inner-icon="mdi-alpha-l-circle"
                solo
                flat
                filled
                outlined
            ></v-text-field>
            <v-text-field
                v-model="last_name"
                class="col-6 ml-2"
                placeholder="名"
                :rules="[input_rules.required]"
                prepend-inner-icon="mdi-alpha-f-circle"
                solo
                flat
                filled
                outlined
            ></v-text-field>
          </v-row>
          <v-text-field
              v-model="account_email"
              placeholder="電子郵件"
              :rules="[input_rules.required, input_rules.email]"
              prepend-inner-icon="mdi-email"
              solo
              flat
              filled
              outlined
          ></v-text-field>
          <v-text-field
              type="password"
              v-model="password"
              placeholder="輸入密碼"
              :rules="[input_rules.required, input_rules.password_length]"
              prepend-inner-icon="mdi-key"
              solo
              flat
              filled
              outlined
          >
          </v-text-field>
          <v-btn
              width="100%"
              color="#f39800"
              @click="register"
          >
            註冊
          </v-btn>
          <v-alert
              :type="alert.type"
              v-text="alert.text"
              dense
              class="alert mt-2"
          ></v-alert>

          <v-row class="mt-10 justify-center">
            <p class="grey--text">已有 MyTeator 帳號？</p>
            <router-link to="/login" class="blue--text">登入</router-link>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  methods: {
    register() {
      let first_name = this.first_name
      let last_name = this.last_name
      let account_email = this.account_email
      let password = this.password

      if(this.input_rules.required(first_name)!=true
          || this.input_rules.required(last_name) != true
          || this.input_rules.required(account_email) != true
          || this.input_rules.required(password) != true
          || this.input_rules.email(account_email) != true
          || this.input_rules.password_length(password) != true
      ) {
        console.log("Failed")
        // Show alert
      } else {
        // Redirect to another page
        this.$store.dispatch('register', {first_name, last_name, account_email, password})
        this.clearPassword()
      }

    },

    clearPassword() {
      this.password = '';
    }
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      account_email: '',
      password: '',
      alert: {
        type: 'error',
        text: '輸入錯誤'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register_container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .origin_text {
    color: #f39800;
    margin: 20px;
  }

  .alert {
    visibility: hidden;
  }
}

</style>
