<template>
  <v-card flat>
    <v-card-actions>
      <SearchBar />
    </v-card-actions>
    <div class="scope_background">近期文章</div>
    <v-list>
      <v-list-item
          v-for="(blog_link, index) in blog_links"
          :key="index"
          class="blog_link"
      >
        <v-col>
          <router-link
              :to="blog_link.router_link"
              v-text="blog_link.title"
          ></router-link>
          <v-divider></v-divider>
        </v-col>
      </v-list-item>
    </v-list>

    <div class="scope_background">彙整</div>
    <v-list>
      <v-list-item
          v-for="(blog_filter, index) in blog_filters"
          :key="index"
          class="blog_link"
      >
        <v-col>
          <router-link
              :to="blog_filter.router_link"
              v-text="blog_filter.title"
          ></router-link>
          <v-divider></v-divider>
        </v-col>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import SearchBar from "@/components/SearchBar";
export default {
  name: "BlogPageOtherResource",
  components: {
    SearchBar
  },
  data() {
    return {
      blog_links: [
        {
          title: '家教老師面試要注意什麼呢?',
          router_link: '#'
        },
        {
          title: '找家教老師，面試該注意什麼呢?\n?',
          router_link: '#'
        },
        {
          title: '如何刊登家教案件，才能找到好老師?\n?',
          router_link: '#'
        }
      ],
      blog_filters: [
        {
          title: '2020年 12月',
          router_link: '#'
        },
        {
          title: '2020年 11月',
          router_link: '#'
        },
        {
          title: '2020年 10月',
          router_link: '#'
        },
        {
          title: '2020年 9月',
          router_link: '#'
        },
        {
          title: '2020年 8月',
          router_link: '#'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.scope_background {
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  color: white;
  background-color: #636463;
}
.blog_link {
  font-size: 15px;
  text-align: left;
}
</style>
