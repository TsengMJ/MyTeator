<template>
  <section id="sec-findaJob" class="font-b">
    <div class="container-14 pd-80">
      <div class="title-all">
        <h1>Find a Job</h1>
        <h2>找工作</h2>
      </div>
      <div class="findaJob-box">
        <div class="findaJob-img">
          <img src="../assets/img/index/findaJob01@2400x.png">
        </div>
        <div class="findaJob-form">
          <form class="findaJob-form-form">
            <div class="findaJob-input-row">
              <input id="findaJob-radio01" type="radio" name="findaJob-radio">
              <label for="findaJob-radio01">drawing/sketchartist</label>
            </div>
            <div class="findaJob-input-row">
              <input id="findaJob-radio02"  type="radio" name="findaJob-radio">
              <label for="findaJob-radio02">SubTeacher</label>
            </div>
            <div class="findaJob-input-row">
              <input id="findaJob-radio03" type="radio" name="findaJob-radio">
              <label for="findaJob-radio03">YoutubeVideoEditing</label>
            </div>
            <div class="findaJob-btn">
              <a href="#">Apply to this Job</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "HomePageJobPanel"
}
</script>

<style lang="scss" scoped>
#sec-findaJob {
  width: 100%;
  height: 100%;
  background: url('../assets/img/field-bg.svg') no-repeat;
  background-size: cover;
  .findaJob-box {
    display: flex;
    .findaJob-img {
      flex: 2;
      img {
        width: 100%;
      }
    }
    .findaJob-form {
      flex: 1;
      display: grid;
      place-items: center;
      font-size: 20px;
      letter-spacing: 3px;

      .findaJob-form-form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .findaJob-input-row {
          color: #fff;
          padding: 0 20px;
          margin-bottom: 30px;
        }
        .findaJob-btn {
          width: 100%;
          padding: 10px 20px;
          text-align: center;
          background-color: #f39800;
          a {
            color: #fff;
          }
        }
      }
    }
  }
}

</style>
