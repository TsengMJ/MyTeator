<template>
  <div class="find-job_background">
    <div id="main-user">
      <div class="teacher-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">找工作</h1>
      </div>
    </div>

    <v-card
        class="find-job_container"
    >
      <v-container class="job-list_card">
        <v-card-title class="job-list_card_title">
          <div>
              首頁
            <v-icon>mdi-chevron-right</v-icon>
              找工作
          </div>

          <SearchBar />

        </v-card-title>

        <v-card flat class="job-list-body">
          <CaseFilter />

          <FindJobListView />

        </v-card>
      </v-container>
    </v-card>
  </div>

</template>

<script>
import SearchBar from "@/components/SearchBar";
import CaseFilter from "@/components/CaseFilter";
import FindJobListView from "@/components/FindJobListView";


export default {
  name: "FindJob",
  components: {
    SearchBar,
    CaseFilter,
    FindJobListView
  },
  data() {
    return {
      selected_case: '',
      case_infos: [
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        },
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        },
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        },
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        },
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        },
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        },
        {
          title: '國小一年級雙語伴讀/家教',
          budget: 600,
          application_number: 20
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.find-job_background {
  width: 100%;

  .find-job_container {

    .job-list_card {
      display: flex;
      flex-direction: column;

      .job-list_card_title {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }

      .job-list-body {
        display: flex;
        flex-direction: row;

      }
    }
  }
}

</style>
