<template>
  <div>
    <section id="sec-field">
      <div class="container-14 pd-80">
        <div class="field-box">
          <div class="title-all">
            <h1>來自各領域的專業師資</h1>
          </div>
          <div class="field-menu">
            <div class="item">
              <div class="item-title">學科教學</div>
              <v-chip
                  v-for="(subject, index) in subjects" :key="index"
                  large
                  class="ma-1"
              >{{subject}}</v-chip>
            </div>
            <div class="item item-row">
              <div class="item-title">休閒才藝</div>
              <v-chip
                  v-for="(talent, index) in talents" :key="index"
                  large
                  class="ma-1"
              >{{talent}}</v-chip>

            </div>
            <div class="item">
              <div class="item-title">語文教學</div>
              <v-chip
                  v-for="(language, index) in languages" :key="index"
                  large
                  class="ma-1"
              >{{language}}</v-chip>
            </div>
          </div>
          <div class="field-btn">
            <router-link to="/find_teacher">查看更多</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script>
export default {
  name: "HomePageTeacherPanel",
  data () {
    return {
      subjects: [
          '伴讀', '數學', '物理', '化學', '國文', '英文', '歷史', '地理'
      ],
      talents: [
        '繪畫', '舞蹈', '鋼琴', '大/小提琴', '薩克斯風'
      ],
      languages: [
          '英文', '日語', '韓文', '中文', '英文作文', '法文', '泰文'
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
#sec-field {
  width: 100%;
  height: 100%;
  background: url('../assets/img/field-bg.svg') no-repeat;
  background-size: cover;

  .container-14 {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .pd-80 {
    padding: 80px 0;
  }
}
.field-box {
  letter-spacing: 3px;

  .title-all {
    color: #fff;
  }
  .field-menu {
    margin-bottom: 40px;
  }
  .field-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .item {
      flex: 1;
      padding: 0 30px;
      .item-title {
        color: #fff;
        font-size: 22px;
        margin-bottom: 10px;
      }
      .flex {
        display: flex;
        li {
          padding: 8px 15px;
          border-radius: 50px;
          background-color: #fff;
          margin: 7px 10px 7px 0;
          font-weight: 900;
          font-size: 18px;
        }
      }
    }
    .item-row {
      border-left: 2px solid #fff;
      border-right: 2px solid #fff;
    }
  }
  .field-btn {
    text-align: center;
    a {
      font-size: 22px;
      font-weight: 900;
      padding: 10px 25px;
      border-radius: 50px;
      color: #fff;
      background-color: #f39800;
    }
  }
}
</style>
