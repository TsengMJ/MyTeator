<template>
  <v-card flat>
    <v-card-actions>
      <v-list>
        <v-card-title>設定分類</v-card-title>
        <v-list-item
            v-for="(link, index) in links"
            :key="index"
            class="category_list_item"
        >
          <a
              v-text="link"
              class="category_list_item_text"
          >
          </a>
        </v-list-item>
      </v-list>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "EditProfileCategoryList",
  data() {
    return {
      links: [
        '自我介紹',
        '過去經歷',
        '專業學科',
        '語文能力',
        '相關證照',
        '作品/檔案上傳',
        '修改密碼'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.category_list_item {
  width: 100%;
  text-align: left;
  color: black;

  :hover {
    background-color: lightgray;
  }

  .category_list_item_text {
    color: black;
    display: flex;
    width: 100%;
    min-width: 120px;
    max-width: 150px;
    height: 100%;
  }
}
</style>
