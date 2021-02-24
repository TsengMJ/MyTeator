<template>
  <v-container class="register_container">
    <v-card width="400px" class="mt-10">
      <v-card-title style="justify-content: center">登入</v-card-title>
      <v-card-subtitle>請輸入您的個人資料</v-card-subtitle>
      <v-card-actions>
        <v-col>
          <v-row>
            <v-text-field
                class="col-5 ml-3"
                placeholder="姓"
                prepend-inner-icon="mdi-alpha-l-circle"
                solo
                flat
                filled
                outlined
            ></v-text-field>
            <v-text-field
                class="col-6 ml-2"
                placeholder="名"
                prepend-inner-icon="mdi-alpha-f-circle"
                solo
                flat
                filled
                outlined
            ></v-text-field>
          </v-row>
          <v-text-field
              placeholder="電子郵件"
              prepend-inner-icon="mdi-email"
              solo
              flat
              filled
              outlined
          ></v-text-field>
          <v-text-field
              placeholder="輸入密碼"
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
          >
            註冊
          </v-btn>

          <v-row class="mt-16 justify-center">
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
name: "Register"
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
}

</style>
