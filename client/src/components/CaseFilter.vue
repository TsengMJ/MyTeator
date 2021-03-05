<template>
  <v-card flat class="case-filter_card">
    <v-card-title>服務分類</v-card-title>
    <v-treeview
        selectable
        :items="categories"
    ></v-treeview>

    <v-list class="case-filter_list">
      <v-list-group
          :value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>進階篩選</v-list-item-title>
        </template>

        <v-list-item  class="row mb-6 mt-0">
          <v-list-item-title>服務金額</v-list-item-title>
          <v-row>
            <div>
              <v-text-field
                  dense
                  outlined
                  prepend-inner-icon="mdi-currency-usd"
                  class="money_input_field"
              ></v-text-field>
            </div>
            <v-icon class="ml-3">mdi-tilde</v-icon>
            <div>
              <v-text-field
                  dense
                  outlined
                  prepend-inner-icon="mdi-currency-usd"
                  class="money_input_field"
              >
              </v-text-field>
            </div>
          </v-row>
        </v-list-item>

        <v-list-item  class="row">
          <v-list-item-title>服務經驗</v-list-item-title>
          <v-select
              :items="experiences"
              dense
              outlined
              placeholder="不拘"
          ></v-select>
        </v-list-item>

        <v-list-item  class="row">
          <v-list-item-title>服務地區</v-list-item-title>
          <v-select
              :items="areas"
              dense
              outlined
              placeholder="不拘"
          ></v-select>
        </v-list-item>

        <v-list-item  class="row">
          <v-list-item-title>服務方式</v-list-item-title>
          <v-select
              :items="service_method"
              dense
              outlined
              placeholder="不拘"
          ></v-select>
        </v-list-item>

        <v-list-item  class="row">
          <v-list-item-title>服務對象</v-list-item-title>
          <v-select
              :items="student_age"
              dense
              outlined
              placeholder="不拘"
          ></v-select>
        </v-list-item>

      </v-list-group>
    </v-list>


    <v-list-item class="row">
      <v-list-item-title>服務時段</v-list-item-title>
      <v-radio-group
          v-model="select_time"
          class="mt-0"
      >
        <v-radio
            v-for="(service_time, index) in service_time"
            :key="index"
            :label="service_time"
            :value="service_time"
        >
        </v-radio>
      </v-radio-group>
    </v-list-item>

  </v-card>
</template>

<script>
export default {
  name: "CaseFilter",
  methods: {
    showSelectTime() {
      console.log(this.select_time)
    }
  },
  data() {
    return {
      select_time: '',
      categories: [
        {
          name: '伴讀/保母',
          children: [
            { name: '伴讀'},
            { name: '保母'},
            { name: '邏輯創造力訓練'},
            { name: '美勞/勞作'},
          ]
        },
        {
          name: '學科',
          children: [
            {name: '國文(語)'},
            {name: '數學'},
            {name: '理化'},
            {name: '物理'},
            {name: '化學'},
            {name: '歷史'},
            {name: '地理'},
            {name: '公民'},
            {name: '自然科學'},
            {name: '生物'},
            {name: '地球科學'},
            {name: '科展指導'},
          ]
        },
        {
          name: '語文',
          children: [
            { name: '英文'},
            { name: '英文寫作'},
            { name: '日文'},
            { name: '韓文'},
            { name: '德文'},
            { name: '法文'},
            { name: '西班牙文'},
            { name: '俄文'},
            { name: '粵語'},
            { name: '泰語'},
            { name: '越語'},
            { name: '中文(華語)'},
            { name: '其他語言'},
          ]
        },
        {
          name: '音樂',
          children: [
            { name: '鋼琴/電子琴'},
            { name: '大/小提琴'},
            { name: '吉他'},
            { name: '烏克麗麗'},
            { name: '樂理/創作'},
            { name: '打擊樂器'},
            { name: '管樂器'},
            { name: '國樂'},
            { name: '歌唱'},
            { name: '鋼琴/電子琴'},
            { name: '其他樂器'},
          ]
        },
        {
          name: '休閒才藝',
          children: [
            { name: '書法'},
            { name: '繪畫'},
            { name: '棋藝'},
            { name: '珠心算'},
            { name: '手作'},
            { name: '攝影'},
            { name: '其他才藝'},
          ]
        },
        {
          name: '術科/職場技能',
          children: [
            {name: '文書處理'},
            {name: '財會/金融類'},
            {name: '行銷廣告類'},
            {name: '資訊軟體系統類'},
            {name: '設計類'},
            {name: '電子/機械類'},
            {name: '專案管理類'},
            {name: 'EMBA/MBA'},
            {name: '美妝技巧'},
            {name: '檢定考試'},
            {name: '其它技能'},
          ]
        },
        {
          name: '體育/舞蹈',
          children: [
            {name: '游泳'},
            {name: '球類運動'},
            {name: '武術'},
            {name: '幼兒律動'},
            {name: '溜冰'},
            {name: '滑板'},
            {name: '直排輪'},
            {name: '競技體操'},
            {name: '舞蹈'},
            {name: '其他運動'},
          ]
        },
      ],
      experiences: [
        '無經驗',
        '1年以下',
        '2年(含)以上',
        '3年(含)以上',
        '4年(含)以上',
        '5年(含)以上',
        '6年(含)以上',
        '7年(含)以上',
        '8年(含)以上',
        '9年(含)以上',
        '10年(含)以上',
      ],
      areas: [
        '台灣地區', '其他亞洲', '大洋洲', '美加地區', '中南美洲', '歐洲', '非洲'
      ],
      service_method: [
        '客戶指定地點',
        '老師指定地點',
        '遠端教學'
      ],
      student_age: [
        '學齡前兒童',
        '小學生',
        '國中生',
        '高中生',
        '大專生以上',
        '社會人士'
      ],
      service_time: [
          '平日全時段',
          '平日上午',
          '平日下午',
          '平日晚上',
          '假日全時段',
          '假日上午',
          '假日下午',
          '假日晚上',
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.case-filter_card {
  width: 240px;
  text-align: left;

  .case-filter_list {


    .money_input_field {
      width: 80px;
      height: 40px;
      margin-left: 12px;
    }
  }
}

</style>
