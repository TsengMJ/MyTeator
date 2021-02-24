<template>
  <v-container flat class="teacher_list_container">
    <v-card-title class="pb-0">語文案件 > 平日全時段 （帶改）！！</v-card-title>
    <v-divider style="background-color: #1e6cae; padding: 2px"></v-divider>

    <v-list>
      <v-list-item-group
          v-model="selected_teacher"
          active-class="orange--text"
      >
        <template v-for="(teacher, index) in teachers">
          <v-list-item :key="index" style="text-align: left">
            <div>
              <img :src="teacher.image" style="height: 64px">
            </div>
            <v-col>
              <v-list-item-title v-text="teacher.title"></v-list-item-title>
              <v-list-item-subtitle v-text="teacher.subtitle"></v-list-item-subtitle>
              <v-list-item-content v-text="teacher.description"></v-list-item-content>

              <v-divider
                  v-if="index < teachers.length - 1"
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
        class="teacher_list_pagination"
    ></v-pagination>

  </v-container>
</template>

<script>
export default {
  name: "FindJobListView",
  data() {
    return {
      page: 1,
      selected_teacher: '',
      teachers: [
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          subtitle: '10年教學經驗｜多益820',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.teacher_list_container {
  .teacher_list_pagination {
    display: flex;
    position: relative;
    background-color: white;
    //bottom: 0px;
  }
}
</style>
