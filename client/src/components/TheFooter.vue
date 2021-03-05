<template>
  <v-footer
      class="footer-container"
      color="#15335b"
  >
    <div class="footer-text">
      <h3>© MYTeachor, Inc.</h3>
    </div>

    <div class="footer-text">
      <h3>FAQ</h3>
      <h3 class="ml-3 mr-3">聯絡我們</h3>
      <router-link to="/paid" class="white--text">付費方案</router-link>
    </div>


    <div class="footer-text">
      <h3>網站地圖・服務條款隱私聲明</h3>
    </div>

  </v-footer>
<!--<footer class="font-b">-->
<!--</footer>-->
</template>

<script>
export default {
name: "TheFooter"
}
</script>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;

  .footer-text {
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
  }
}

</style>
