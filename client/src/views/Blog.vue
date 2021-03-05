<template>
  <div>
    <div id="main-user">
      <div class="blog-bg"></div>
      <div class="page-title">
        <h1 class="ber-text">找工作</h1>
      </div>
    </div>

    <v-card>
      <v-container class="blog_body_panel">
          <BlogPageContent />
          <BlogPageOtherResource />

      </v-container>
    </v-card>
  </div>
</template>

<script>
import BlogPageContent from "@/components/BlogPageContent";
import BlogPageOtherResource from "@/components/BlogPageOtherResource";

export default {
  name: "Blog",
  components: {
    BlogPageContent,
    BlogPageOtherResource
  },
  data() {
    return {
      blog: {
        title: 'Blog title',
        subtitle: 'Blog sub title',
        content: '10 Weirdest Taiwanese Food that You Must Try September 12th, 2020\n' +
            '\n' +
            'post image cover Here is some weird food I believe you should try in Taiwan.\n' +
            '10 Weirdest Taiwanese Food that You Must Try\n' +
            '\n' +
            'Before you scroll down and get stunned by the food I’m about to list out, let me point out that Taiwan is a must-visit when you go to Asia. Taiwan is famous for its variety of great food, amazing people, breathtaking nature, and again, food. Part of the Taiwanese night life is the so-called “night market” (夜市) that opens from 6pm to 1am. Make sure you add night market into your schedule, stop by any of them and go on a crazy gourmet experience. Without further ado, let’s jump in.\n' +
            '\n' +
            'Buckle up, ready, get set. Go!\n' +
            '\n' +
            '1. Stingy Tofu 臭豆腐 If you engage in a conversation with Taiwanese, I bet the first question you will get is “Have you tried Chou Dou Fu?”, the Chinese spelling for stinky tofu. Local people are always excited to hear your response and see your reaction as if it’s a prank. Nothing to be scared of, it is a real food.\n' +
            '\n' +
            'Are you curious about what’s going on with this stinky tofu and what makes it (in)famous? I sure was when I first came to Taiwan and had to blindly experience it myself. Fortunately for you, my friend, I will spare you the trouble and tell you what the fuss is about.\n' +
            '\n' +
            'Stinky tofu is fermented tofu that has a very strong odor. Hold up, let me rephrase that: STRONNNNNNNNNNGG odor. Some competitors that share the same trait in the world include surstromming, Swedish fermented fish, or old French cheese. Yeah, now you get the idea. Stinky tofu is mostly served at nigh market stands or roadside canteens where it’s breezier, and sometimes in restaurants.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog_body_panel {
  display: flex;
  flex-direction: row;
}
</style>
