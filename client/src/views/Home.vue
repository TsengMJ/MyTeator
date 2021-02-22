<template>
  <div class="homepage_container">
    <div class="homepage_search_card">
      <HomePageSearchPanel />
    </div>


    <HomePageFiledPanel class="full-width"/>

    <HomePageTeacherPanel />

    <section class="Separate"></section>

    <HomePageProductPanel />

    <HomePageJobPanel />

    <HomePageBlogPanel />
  </div>
</template>

<script>
import HomePageSearchPanel from "@/components/HomePageSearchPanel";
import HomePageFiledPanel from "@/components/HomePageFiledPanel";
import HomePageTeacherPanel from "@/components/HomePageTeacherPanel";
import HomePageProductPanel from "@/components/HomePageProductPanel";
import HomePageJobPanel from "@/components/HomePageJobPanel";
import HomePageBlogPanel from "@/components/HomePageBlogPanel";

export default {
  name: "Home",
  components: {
    HomePageSearchPanel,
    HomePageFiledPanel,
    HomePageTeacherPanel,
    HomePageProductPanel,
    HomePageJobPanel,
    HomePageBlogPanel
  }

}
</script>

<style lang="scss" scoped>
.homepage_container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: none;

  .full-width {
    width: 100%;
  }

  .homepage_search_card {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;

    background-image: url("../assets/background.webp");
    background-position: center center;
    background-size: cover;

  }

  .Separate {
    width: 100%;
    height: 50px;
    background-color: #16355e;
  }


}
</style>
