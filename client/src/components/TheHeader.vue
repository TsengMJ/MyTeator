<template>
  <div class="header_container">
    <div class="header_panel">
      <div>
        <img src="../assets/icon/logo.svg" class="header_logo">
      </div>

      <div class="header_link_area">
        <a href="">熱門商品</a>
        <a href="">找工作</a>
        <a href="">找教師</a>
        <a href="">部落格</a>
        <a herf="">資源下載</a>
        <a herf="">註冊/登入</a>
        <img src="../assets/icon/shop-cart.svg" alt="shopping-list" class="shop-cart">
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "TheHeader"
}
</script>

<style lang="scss" scoped>
.header_container {
  display: flex;
  height: 70px;
  justify-content: center;
  background-color: #1e6cae;

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
