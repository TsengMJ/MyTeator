<template>
  <section id="sec-product" class="font-b">
    <div class="container-14 pd-80">
      <div class="title-all">
        <h1>MyTeator shop</h1>
        <h2>熱門商品</h2>
      </div>
      <div class="content">

        <div v-for="(product, index) in products" :key="index">
          <figure class="img-box">
            <img :src="product.image">
            <figcaption class="figcaption-text">
              <div class="figcaption-box">
                <p> {{product.description}} </p>
                <div class="sup-box">
                  <div class="sup-left">${{ product.price }}</div>
                  <div class="sup-right">{{product.discount * 10}}折</div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
      <div class="product-btn">
        <a href="#">查看更多</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePageProductPanel",
  data() {
    return {
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
#sec-product {
  width: 60%;

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    margin-bottom: 40px;
    .img-box {
      position: relative;
      display: grid;
      grid-template-columns: auto 1fr;
      cursor: pointer;
      transition: all 0.2s;
      &:hover img {
        filter: grayscale(100%);
      }
      &:hover .figcaption-text {
        opacity: 1;
      }
      img {
        position: relative;
        width: 100%;
      }
      .figcaption-text {
        position: absolute;
        bottom: 0;
        opacity: 0;
        padding: 20px;
        background-color: #cccccc7e;
        p {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 5px;
          line-height: 25px;
          margin-bottom: 10px;
        }
        .sup-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .sup-left {
            margin-left: 20px;
            font-size: 26px;
            color: #f39800;
          }
          .sup-right {
            margin-right: 20px;
            padding: 10px;
            background-color: #f39800;
            color: #fff;
          }
        }
      }
    }
  }
  .product-btn {
    text-align: center;
    a {
      font-size: 20px;
      letter-spacing: 2px;
      padding: 12px 35px;
      border-radius: 50px;
      color: #fff;
      background-color: #f39800;
    }
  }
}
</style>
