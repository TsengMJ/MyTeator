<template>
  <div class="edit-profile_background">
    <div id="main-user">
      <div class="teacher-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">會員中心</h1>
      </div>
    </div>

    <v-container>
      <v-card>
        <v-card-title class="edit-profile_card_title">
          <div>
            首頁
            <v-icon>mdi-chevron-right</v-icon>
            會員中心
          </div>

          <SearchBar />

        </v-card-title>

        <v-row>

        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "EditProfile",
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
.edit-profile_background {
  .edit-profile_card_title {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
}

</style>
