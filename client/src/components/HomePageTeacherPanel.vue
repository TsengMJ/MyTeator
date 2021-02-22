<template>
  <section id="sec-teacher" class="font-b">
    <div class="container-14 pd-80">
      <div class="title-all">
        <h1>Find a Teacher</h1>
        <h2>推薦老師</h2>
      </div>

      <div class="photo">
        <div v-for="(teacher, index) in teachers" :key="index">
          <div class="photo-box">
            <div class="photo-img">
              <img :src="teacher.image">
            </div>
            <div class="name">
              <h3>{{teacher.name}}</h3>
            </div>
          </div>
        </div>

      </div>
      <div class="puteacher-content">
        <div class="left">
          <h4>ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！</h4>
          <h5>
            10年教學經驗｜多益820
            <br>
            <i class="fas fa-star"></i>5.1 個評論
          </h5>
          <p>
            一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好
          </p>
          <span class="span-b">瀏覽更多...</span>
          <div class="put-btn">
            <span class="left">預約體驗</span>
            <span class="right">聯繫老師</span>
          </div>
        </div>
        <div class="right">
          <div class="text">
            <div class="text-box">
              NT$154
              <br>
              <span>25分鐘</span>
            </div>
            <div class="text-box">
              NT$154
              <br>
              <span>25分鐘</span>
            </div>
          </div>
          <div class="video">
            <img src="../assets/img/資產 2.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  name: "HomePageFiledPanel",
  data () {
    return {
      teachers: [
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',
        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',

        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',

        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',

        },
        {
          id: '12345',
          name: 'Angel',
          image: require('../assets/img/phone.png'),
          title: 'ANGEL娜娜 兒少｜成人美語    英聽口說文法難不倒！',
          rate: 5,
          description: '一月課程招生中♀正式課程 新師優惠7折 限前10名♀幫助你解決英文學習的疑難雜症國北課程碩士生｜商學院英語專業 專長為發音入門、生活英文、文法扎根、自主閱讀！ 世界運動賽事英文即時口譯員 ESL全英語教學 讓娜娜成為你最好',

        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

#sec-teacher {
  width: 80%;
  height: 100%;
  letter-spacing: 3px;

  .pd-80 {
    padding: 80px 0;
  }

  .title-all {
    text-align: center;
    color: #000;
    margin-bottom: 40px;
    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 22px;
    }
  }
  .photo {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .photo-box {
      padding: 40px;
      margin: 0 20px;
      cursor: pointer;
      &:hover {
        background-color: #1e6cae;
      }
      .photo-img {
        width: 100px;
        img {
          width: 100%;
        }
      }
      .name {
        text-align: center;
        h3 {
          font-size: 18px;
          color: #000;
        }
      }
    }
  }
}

.puteacher-content {
  display: flex;
  letter-spacing: 3px;
  padding: 20px;
  .left {
    flex: 2;
    padding-right: 60px;
    h4 {
      font-size: 22px;
      color: #1e6cae;
      margin-bottom: 15px;
    }
    h5 {
      font-size: 18px;
      color: #9fa0a0;
      line-height: 25px;
      margin-bottom: 15px;
      .fa-star {
        color: #f39800;
      }
    }
    p {
      font-size: 18px;
      color: #1e6cae;
      margin-bottom: 15px;
    }
    .put-btn {
      text-align: right;
      margin-top: 40px;
      span {
        padding: 10px 35px;
      }
      .left {
        border: 3px solid#1e6cae;
        background-color: #1e6cae;
        color: #fff;
      }
      .right {
        border: 3px solid #16355e;
        color: #16355e;
      }
    }
  }
  .right {
    flex: 1;
    .text {
      display: flex;
      margin-bottom: 40px;
      .text-box {
        flex: 1;
        font-size: 30px;
        span {
          font-size: 20px;
        }
      }
    }
    .video {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}

</style>
