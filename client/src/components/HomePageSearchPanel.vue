<template>
  <div class="search-area_container">
    <div class="search-area_panel">
      <div>
        <h1>從 MYTeachtor認識世界各地的人與文化</h1>
        <h2>已累計125874名家教...</h2>
      </div>

      <div class="search_area">
        <v-text-field
            single-line
            rounded
            height="40"
            placeholder="輸入英文會話、日文會話"
            background-color="white"
            class="search_input ma-0"
        >
          <template slot="append">
            <img src="../assets/icon/search.svg" alt="search-icon" class="search_icon">
          </template>

        </v-text-field>


        <v-btn
          rounded
          solo
          height="40"
          color="white"
          class="search-btn"
        >
          <img src="../assets/icon/btn.svg" class="filter_icon">
        </v-btn>

      </div>


    </div>

    <div class="shop-btn">
      <a href="/">購物去！</a>
    </div>

  </div>
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
    position: relative;
    bottom: 10%;
    width: 70%;

    .search_area {
      display: flex;
      flex-direction: row;
      align-items: center;

      .search_input {
        width: 800px;

        .search_icon {
          height: 28px;
          position: relative;
          left: 5px;
        }
      }
    }

    .search-btn {
      margin-left: 10px;

      .filter_icon {
        height: 28px;
      }
    }
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
</style>
