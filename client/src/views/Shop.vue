<template>

  <div class="shop_container">
    <div id="main-user">
      <section class="sec-header cm-bg">
      </section>
      <div class="shop_title">
        <h1 class="ber-text">Course materials</h1>
      </div>
    </div>

    <div class="shop_panel mt-12">
      <v-card flat class="shop_card">
        <div class="shop_card-title">
          <div class="list-item list-item-user">
            <h1 class="text">首頁
              <v-icon>mdi-chevron-right</v-icon>
              商品列表
            </h1>
          </div>

          <div>
            <v-text-field
                placeholder="英語教材"
                class="shop_input-field"
            >
              <template slot="append-outer">
                <v-icon large >mdi-magnify</v-icon>
              </template>

            </v-text-field>
          </div>
        </div>

        <div class="shop_card-content">
          <div class="shop_card_left">
            <div class="title font-b">商品分類</div>
            <v-list>
              <div v-for="(type, index) in types" :key="index">
                <v-list-group>
                  <template v-slot:activator>
                    <v-list-item-title>{{ type.name }}</v-list-item-title>
                  </template>

                  <v-radio-group>
                    <v-radio
                        v-for="(subtype, i) in type.subtypes"
                        :key="i"
                        :label="subtype.name"
                        :value="subtype.name"
                        off-icon="mdi-radiobox-blank"
                        on-icon="mdi-radiobox-marked"
                    ></v-radio>
                  </v-radio-group>

                </v-list-group>
              </div>

            </v-list>
          </div>

          <div class="shop_card_right">
            <div class="set-form">
              <div class="commodity-img-box">

                <div v-for="(product ,index) in products" :key="index">
                  <div class="img-boz">
                    <img :src="product.image">
                  </div>
                </div>
              </div>

<!--              <div class="menu-bottom">-->
<!--                <div class="container-12">-->
<!--                  <div class="menu-bottom-cn">-->
<!--                    <a href="#"><i class="fas fa-angle-left"></i></a>-->
<!--                    <a href="#">1</a>-->
<!--                    <a href="#">2</a>-->
<!--                    <a href="#">3</a>-->
<!--                    <a href="#"><i class="fas fa-angle-right"></i></a>-->
<!--                  </div>-->

<!--                </div>-->
<!--              </div>-->
            </div>

          </div>
        </div>
      </v-card>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Shop",
  data () {
    return {
      types: [
        {
          name:'新商品',
          subtypes: []
        },
        {
          name:'價格',
          subtypes: []
        },
        {
          name:'年齡',
          subtypes: [
            {
              name: '1-2',
            },
            {
              name: '3-5',
            },
            {
              name: '6-8',
            },
            {
              name: '9-10',
            },
            {
              name: '12+',
            },
          ]
        },
        {
          name:'課程分類',
          subtypes: []
        },

      ],
      products: [
        {
          id: 'product_01',
          name: 'product_01',
          image: require('../assets/img/index/product-01.jpg'),
          description: '小蜜蜂擴音器教師專用耳麥大功率腰掛講課教學用上課寶喇叭戶外叫賣便攜德勝揚聲器',
          price: 1234,
          discount: 0.5,
        },
        {
          id: 'product_01',
          name: 'product_01',
          image: require('../assets/img/index/product-02.jpg'),
          description: '小蜜蜂擴音器教師專用耳麥大功率腰掛講課教學用上課寶喇叭戶外叫賣便攜德勝揚聲器',
          price: 1234,
          discount: 0.5,
        },
        {
          id: 'product_01',
          name: 'product_01',
          image: require('../assets/img/index/product-03.jpg'),
          description: '小蜜蜂擴音器教師專用耳麥大功率腰掛講課教學用上課寶喇叭戶外叫賣便攜德勝揚聲器',
          price: 1234,
          discount: 0.5,
        },
        {
          id: 'product_01',
          name: 'product_01',
          image: require('../assets/img/index/product-01.jpg'),
          description: '小蜜蜂擴音器教師專用耳麥大功率腰掛講課教學用上課寶喇叭戶外叫賣便攜德勝揚聲器',
          price: 1234,
          discount: 0.5,
        },
        {
          id: 'product_01',
          name: 'product_01',
          image: require('../assets/img/index/product-02.jpg'),
          description: '小蜜蜂擴音器教師專用耳麥大功率腰掛講課教學用上課寶喇叭戶外叫賣便攜德勝揚聲器',
          price: 1234,
          discount: 0.5,
        },
        {
          id: 'product_01',
          name: 'product_01',
          image: require('../assets/img/index/product-03.jpg'),
          description: '小蜜蜂擴音器教師專用耳麥大功率腰掛講課教學用上課寶喇叭戶外叫賣便攜德勝揚聲器',
          price: 1234,
          discount: 0.5,
        }
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.shop_container {
  width: 100%;

  .shop_title {
    font-size: 36px;
    text-align: left;
    padding-left: 10%;
    padding-right: 10%;
    color: white;
    background-color: #16355e;
  }

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
