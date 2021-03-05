<template>
  <div class="find-teacher_background">
    <div id="main-user">
      <div class="teacher-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">找老師</h1>
      </div>
    </div>

    <v-card
        class="find-teacher_container"
    >
      <v-container class="teacher-list_card">
        <v-card-title class="teacher-list_card_title">
          <div>
            首頁
            <v-icon>mdi-chevron-right</v-icon>
            找老師
          </div>

          <SearchBar />

        </v-card-title>

        <v-card flat class="teacher-list-body">
          <CaseFilter />

          <FindTeacherListView />

        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import CaseFilter from "@/components/CaseFilter";
import FindTeacherListView from "@/components/FindTeacherListView";


export default {
  name: "FindTeacher",
  components: {
    SearchBar,
    CaseFilter,
    FindTeacherListView
  },
  data() {
    return {
      page: 1,
    }
  }
}
</script>

<style lang="scss" scoped>
.find-teacher_background {
  width: 100%;

  .find-teacher_container {

    .teacher-list_card {
      display: flex;
      flex-direction: column;

      .teacher-list_card_title {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }

      .teacher-list-body {
        display: flex;
        flex-direction: row;

      }
    }
  }
}
</style>
