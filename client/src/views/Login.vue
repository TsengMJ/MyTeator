<template>
  <v-container class="login_container">
    <v-card width="400px" class="mt-10">
      <v-card-title style="justify-content: center">登入</v-card-title>
      <v-card-actions>
        <v-col>
          <v-text-field
              v-model="account_email"
              placeholder="註冊信箱"
              :rules="[input_rules.required, input_rules.email]"
              prepend-inner-icon="mdi-account-circle"
              solo
              flat
              filled
              outlined
          ></v-text-field>
          <v-text-field
              type="password"
              v-model="password"
              placeholder="帳號密碼"
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
              @click="login"
          >
            登入
          </v-btn>
          <v-alert
              class="alert mt-2"
              v-text="alert.text"
              :type="alert.type"
              :style="isAlertVisible? visible: invisible"
              dense
          ></v-alert>
<!--          <div class="mt-4 mb-16">-->
<!--            <router-link to="#" class="origin_text">忘記帳號或密碼</router-link>-->
<!--          </div>-->
          <div class="mt-16">
            <router-link to="/register" class="grey--text">註冊新帳號</router-link>
          </div>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  methods: {
    login() {
      if (this.input_rules.email(this.account_email) != true
          || this.input_rules.password_length(this.password) != true
      ){
        this.showWrongFormatAlert()
      } else {
        console.log("Account:", this.account_email)
        console.log("Password:", this.password)
        let account_email = this.account_email
        let password = this.password
        
        this.$store.dispatch('login', {account_email:account_email, password: password})
          .then((success) => {
            if (success) {
              this.$router.push({ path: '/' })
            } else {
              this.showInvalidLoginAlert()
            }
          })
        this.clearPassword()
      }
    },

    clearPassword() {
      this.password =''
    }
  },
  data() {
    return {
      account_email: '',
      password: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .origin_text {
    color: #f39800;
    margin: 20px;
  }
}
</style>
