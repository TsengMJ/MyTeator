<template>
  <v-card>
    <div class="title font-b">商品分類</div>
    <v-treeview
        v-model="selection"
        :items="types"
        item-disabled="locked"
        selectable
    ></v-treeview>

    <v-btn @click="showSelection">Press me</v-btn>
  </v-card>
</template>

<script>
export default {
  name: "ProductCategory",
  methods: {
    showSelection() {
      console.log(this.selection)
    }
  },
  data() {
    return {
      selection: [],
      types: [
        {
          id: 'date',
          name:'新商品',
          children: [
            {
              id: 'date_no_limit',
              name: '不限制'
            },
            {
              id: 'date_one_week',
              name: '一個禮拜以內',
            },
            {
              id: 'date_one_month',
              name: '一個月以內',
            },
            {
              id: 'date_one_season',
              name: '三個月以內',
            },
            {
              id: 'date_half_year',
              name: '半年以內',
            },
            {
              id: 'date_year',
              name: '一年以內',
            },
          ]
        },
        {
          id: 'price',
          name:'價格',
          children: [
            {
              id: 'price_no_limit',
              name: '不限制'
            },
            {
              id: 'price_200',
              name: '0 ~ 200',
            },
            {
              id: 'price_500',
              name: '200 ~ 500',
            },
            {
              id: 'price_1000',
              name: '500 ~ 1000',
            },
          ]
        },
        {
          id: 'age',
          name:'年齡',
          children: [
            {
              id: 'age_1-2',
              name: '1-2',
            },
            {
              id: 'age_3-5',
              name: '3-5',
            },
            {
              id: 'age_6-8',
              name: '6-8',
            },
            {
              id: 'age_9-10',
              name: '9-10',
            },
            {
              id: 'age_12',
              name: '12+',
            },
          ]
        },
        {
          id: 'category',
          name:'課程分類',
          children: [
            {
              id: 'category_language',
              name: '語言'
            },
            {
              id: 'category_math',
              name: '數理'
            },
          ]
        },

      ],
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
