<template>
  <div class="edit-profile_background">
    <div id="main-user">
      <div class="teacher-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">會員中心</h1>
      </div>
    </div>

    <v-card flat>
      <v-container class="content_container">
        <v-card flat>
          <v-card-title class="edit-profile_card_title">
            <div>
              首頁
              <v-icon>mdi-chevron-right</v-icon>
              會員中心
            </div>
            <SearchBar />
          </v-card-title>

          <div class="profile-table_panel">
            <EditProfileCategoryList />

            <EditProfileTable />
          </div>

        </v-card>

      </v-container>
    </v-card>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import EditProfileCategoryList from "@/components/EditProfileCategoryList";
import EditProfileTable from "@/components/EditProfileTable";

export default {
  name: "EditProfile",
  components: {
    SearchBar,
    EditProfileCategoryList,
    EditProfileTable
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-profile_background {
  width: 100%;
  height: 100%;

  .content_container {
    width: 100%;
    max-width: 1200px;

    .edit-profile_card_title {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }

    .profile-table_panel {
      display: flex;
      flex-direction: row;

      width: 100%;
    }
  }
}

</style>
