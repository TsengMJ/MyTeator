<template>

  <div class="shop_container">
    <div id="main-user">
      <div class="cm-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">Course materials</h1>
      </div>
    </div>

    <div class="shop_panel mt-12">
      <v-card flat class="shop_card">
        <div class="shop_card-title mb-8">
          <div class="list-item list-item-user">
            <h1 class="text">首頁
              <v-icon>mdi-chevron-right</v-icon>
              商品列表
            </h1>
          </div>

          <SearchBar />

        </div>

        <div class="shop_card-content">
          <div class="shop_card_left">
            <ProductCategory />
          </div>

          <div class="shop_card_right">
            <div class="set-form">
              <div v-if="products" class="commodity-img-box">
                <div v-for="(value, key) in products" :key="key">
                  <router-link :to="productPageUrl(value[1]._id)" class="img-boz">
                    <img :src="productImageUrl(value[1]._id)" >
                  </router-link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </v-card>
    </div>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProductCategory from "@/components/ProductCategory";
import { mapState} from "vuex";

export default {
  name: "Shop",
  components: {
    SearchBar,
    ProductCategory
  },
  methods: {
    addProducts() {
      this.$store.dispatch('fetchAllProductsID')
      console.log(this.products)
    },
    productPageUrl(id) {
      return `/product/${id}`
    },
    productImageUrl(id) {
      return `http://localhost:3000/api/product/image/${id}`
    },
  },
  computed: mapState({
    products: state => state.product.products,
    products_id: state => state.product.products_id
  }),

  data () {
    return {
      numberOfProductsPerPage: 15,
      currentPage: 1,
    }
  }
}
</script>

<style lang="scss" scoped>
.shop_container {
  width: 100%;

  .shop_panel {
    display: flex;
    flex-direction: column;

    .shop_card {
      display: flex;
      flex-direction: column;
      align-items: center;

      .shop_card-title {
        display: flex;
        width: 80%;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-around;


        .shop_input-field {
          width: 300px;
        }
      }

      .shop_card-content {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;


        .shop_card_right {
          width: 70%;
        }
      }
    }
  }

}
</style>


// computed: {
//   ...mapState(["products", "products_id"]),
//   displayNumber: () => {
//     return (this.currentPage * 15 < this.products.size)
//         ? this.currentPage * 15
//         : this.products.size
//   },
//
//   startProductIndex: () => this.currentPage * this.numberOfProductsPerPage,
//   endProductIndex: () => {
//     return (this.startProductIndex + this.numberOfProductsPerPage < this.products.size)
//         ? this.startProductIndex + this.numberOfProductsPerPage - 1
//         : this.products.size - 1
//   },
//   displayProductsID: () => {
//     console.log(this.products_id.slice(this.startProductIndex, this.endProductIndex))
//     return this.products_id.slice(this.startProductIndex, this.endProductIndex);
//   }
//
// },
