<template>
  <div>
    <div id="main-user">
      <div class="cm-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">Course materials</h1>
      </div>
    </div>

    <v-card class="product-page_container">
      <v-container v-if="product" class="product-page_card">
        <div class="product-page_card_top_area">
          <img :src="productImageUrl()">
          <div>
            <p v-text="product.name" class="text-h6 font-weight-bold"></p>
            <v-row class="ma-0">
              <p class="text-body-1">原價：{{product.price}} 元</p>
            </v-row>
            <v-row class="ma-0">
              <p class="text-body-1 font-weight-medium">優惠價：{{discountInTen()}}折 {{sellingPrice()}}元</p>
            </v-row>
            <v-row class="ma-0">
              <p class="text-body-1 font-weight-medium">庫存： {{product.inventory}}</p>
            </v-row>

            <v-btn color="#1E6CAE">
              <img src="../assets/icon/shop-cart.svg" alt="shopping-list" height="32">
            </v-btn>
            <v-btn color="#1E6CAE" dark class="text-body-1">
              直接結帳
            </v-btn>

          </div>
          <div>
          </div>
        </div>

        <div>
          <v-row class="ma-0 h2-20 font-weight-bold">
            <p class="text-left ml-4 mt-8 mb-0">產品介紹</p>
          </v-row>
          <v-row class="ma-0">
            <p v-text="product.description" class="text-left ma-4"></p>
          </v-row>
        </div>
      </v-container>

    </v-card>
  </div>
</template>

<script>

export default {
  name: "Product",
  methods: {
    productImageUrl() {
      console.log(`http://localhost:3000/api/product/image/${this.id}`)
      return `http://localhost:3000/api/product/image/${this.id}`
    },
    sellingPrice() {
      return Math.round(this.product.price * (1 - this.product.discount))
    },
    discountInTen() {
      return this.product.discount * 10
    }
  },
  computed: {
    id() { return this.$route.params.id },
    product() { return this.$store.state.product.products.get(this.$route.params.id) },
  },

  data() {
    console.log(this.$route.params)
    return {
      // id: this.$route.params.id,
    }
  },
}
</script>

<style lang="scss" scoped>
.product-page_container {
  width: 1200px;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //background-color: #42b983;

  .product-page_card {
    width: 960px;


    .product-page_card_top_area {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
