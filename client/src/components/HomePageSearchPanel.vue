<template>
  <v-card class="search-area_container" color="transparent">
    <div class="search-area_panel" >
      <v-card-title class="title pb-0">
        從 MYTeachtor認識世界各地的人與文化 <br>
        已累計125874名家教...
      </v-card-title>

      <v-row align="baseline" class="ma-0 pa-0" >
        <v-text-field
            placeholder="輸入英文會話、日文會話"
            background-color="white"
            class="search_input"
            solo
            dense
            rounded
            height="40"
        >
          <template slot="append">
            <img src="../assets/icon/search.svg" alt="search-icon" class="search_icon">
          </template>
        </v-text-field>


        <div>
          <v-btn
              rounded
              solo
              height="40"
              color="white"
              class="search-btn mb-1 ml-2"
          >
            <img src="../assets/icon/btn.svg" class="filter_icon">
          </v-btn>
        </div>

      </v-row>

      <div class="shop-btn mt-10">
        <router-link to="/shop">購物去！</router-link>
      </div>
    </div>
  </v-card>

</template>

<script>
export default {
name: "HomePageSearchPanel"
}
</script>

<style lang="scss" scoped>
.search-area_container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #163d68;
  text-align: left;

  .search-area_panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;


    .title {
      font-weight: bold;
      color: #2c3e50;
    }

    .search-input {
      width: 800px;
    }

    .shop-btn {
      text-align: center;

      a {
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 2px;
        padding: 12px 35px;
        border-radius: 50px;
        color: #fff;
        background-color: #f39800;
      }
    }
  }
}
</style>
