<template>
  <div class="header_container">
    <div class="header_panel">
      <div>
        <router-link to="/">
          <img src="../assets/icon/logo.svg" class="header_logo">
        </router-link>
      </div>

      <div class="header_link_area">
        <div
            v-for="(navigation, index) in navigations"
            :key="index"
        >
          <router-link
            :to="navigation.url"
            v-text="navigation.title"
          ></router-link>
        </div>
        <img src="../assets/icon/shop-cart.svg" alt="shopping-list" class="shop-cart">
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      navigations: [
        {
          title: '熱門商品',
          url: '/shop'
        },
        {
          title: '找工作',
          url: '/find_job'
        },
        {
          title: '找教師',
          url: '/find_teacher'
        },
        {
          title: '部落格',
          url: '/blog'
        },
        {
          title: '註冊/登入',
          url: '/login'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header_container {
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #1e6cae;
  z-index: 999;


  .header_panel {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    width: 55%;
    padding-bottom: 3px;

    .header_logo {
      height: 30px;
      position: relative;
      left: 10%;
    }

    .header_link_area {
      display: flex;
      flex-direction: row;

      a {
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin-right: 16px;
        text-decoration: none;

        letter-spacing: 2px;

        &:hover {
          color: #f39800;
        }
      }

      .arrow-down {
        width: 12px;
      }

      .shop-cart {
        width: 35px;
      }
    }
  }
}

</style>
