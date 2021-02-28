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
              :rules="[input_rules.required]"
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
          <div class="mt-4 mb-16">
            <router-link to="#" class="origin_text">忘記帳號或密碼</router-link>
          </div>
          <div>
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
      console.log("Account:", this.account_email)
      console.log("Password:", this.password)
      this.$store.dispatch('login')
    },
  },
  data() {
    return {
      account_email: null,
      password: null,
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
