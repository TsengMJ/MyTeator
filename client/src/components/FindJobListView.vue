<template>
  <v-container flat class="job_list_container">
    <v-card-title class="pb-0">語文案件 > 平日全時段 （帶改）！！</v-card-title>
    <v-divider style="background-color: #1e6cae; padding: 2px"></v-divider>

    <v-list>
      <v-list-item-group
          v-model="selected_case"
          active-class="orange--text"
      >
        <template v-for="(case_info, index) in case_infos">
          <v-list-item :key="index" style="text-align: left">
            <v-col>
              <v-list-item-title v-text="case_info.title"></v-list-item-title>

              <div style="display: flex; flex-direction: row">
                <v-list-item-title>預算 ${{case_info.budget}}</v-list-item-title>
                <v-list-item-title>應徵數 ${{case_info.application_number}}</v-list-item-title>
              </div>


              <v-divider
                  v-if="index < case_infos.length - 1"
                  :key="index"
              ></v-divider>
            </v-col>
          </v-list-item>
        </template>

      </v-list-item-group>
    </v-list>

    <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
        class="job_list_pagination"
    ></v-pagination>

  </v-container>
</template>

<script>
export default {
  name: "FindJobListView",
  data() {
    return {
      page: 1,
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
.job_list_container {
  .job_list_pagination {
    display: flex;
    position: relative;
    background-color: white;
    //bottom: 0px;
  }
}
</style>
