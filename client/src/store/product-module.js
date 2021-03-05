import {
  apiProductFetchAllIDs,
  apiProductFetchWithIDs,
  // apiProductSearch,
} from "@/apis";

const productModule = {
  state: {
    products_id: new Array(),
    products: new Map(),
    // products: {123: {text: 'asdads'} },
    number_per_fetch: 30

  },
  mutations: {
    async UPDATE_PRODUCTS_ID(state, products_id){
      products_id.forEach(product_id => {
        state.products_id.push(product_id._id);
      })
    },

    async UPDATE_PRODUCTS(state, products) {
      products.forEach(product => {
        state.products.set(product._id, product)
      })
    }
  },
  actions: {
    async fetchAllProductsID ({dispatch, commit}) {
      apiProductFetchAllIDs()
        .then( async (res) => {
          await commit('UPDATE_PRODUCTS_ID', res.data)
          await dispatch('fetchProductWithIDs')
        })
    },

    async fetchProductWithIDs ({state, commit}) {
      const start_index = state.products.size;
      const end_index = start_index + state.number_per_fetch;
      const subIDArray = state.products_id.slice(start_index, end_index);

      console.log(subIDArray)
      apiProductFetchWithIDs(subIDArray)
        .then(res => {
          commit('UPDATE_PRODUCTS', res.data)
          console.log(res.data)
        })
    }
  },

  getters: {
    getProducts: state => state.products
  }
}

export default productModule
