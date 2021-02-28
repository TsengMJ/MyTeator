<template>
  <v-card>
    <v-row class="ma-0">
      <v-col class="col-4">
        <img src="../assets/img/user/avatar.png" class="snapshot">
      </v-col>

      <v-col>
        <v-row class="ma-0 pa-0" >
          <v-text-field
              placeholder="姓"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
          <v-text-field
              placeholder="名"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
        </v-row>

        <v-row class="ma-0 pa-0" >
          <v-text-field
              placeholder="手機號碼"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
          <v-text-field
              placeholder="市內電話"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
        </v-row>

        <v-row class="ma-0 pa-0" >
          <v-text-field
              placeholder="地址"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
        </v-row>

        <v-row class="ma-0 pa-0" >
          <v-text-field
              placeholder="信箱"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
        </v-row>

        <v-row class="ma-0 pa-0" >
          <v-text-field
              placeholder="信箱"
              solo
              filled
              flat
              dense
              hide-details
              background-color="#e4e4e3"
              class="ma-1"
          ></v-text-field>
        </v-row>

      </v-col>
    </v-row>

    <v-col>
      <v-textarea
          placeholder="自我介紹"
          solo
          filled
          flat
          dense
          hide-details
          background-color="#e4e4e3"
      >
      </v-textarea>
    </v-col>
  </v-card>
</template>

<script>
export default {
  name: "EditProfileTableBasicInformation"
}
</script>

<style lang="scss" scoped>
.snapshot {
  display: flex;
  height: 100%;
  align-self: flex-start;
}
</style>
