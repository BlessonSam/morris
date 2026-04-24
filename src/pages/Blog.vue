<template>
  <q-page dark class="py-10">
    <div dark class="container text-center pb-10 pt-20 space-y-3">
      <div class="text-semibold text-4xl text-sectionSubTitle">Blog</div>
      <div class="text-sm text-sectionSubTitle">
        Articles by our team and students
      </div>
    </div>

    <div class="container pb-10">
      <div class="rounded-2xl bg-dark border border-gray-800 overflow-hidden shadow-lg">
        <div class="p-6 md:p-8 lg:p-10 space-y-5">
          <div class="space-y-2">
            <div class="text-xs uppercase tracking-[0.3em] text-brand">
              Featured Article
            </div>
            <div class="text-3xl md:text-4xl font-semibold text-bigText">
              From Courses to Confidence: Building Real English Fluency
            </div>
            <div class="text-sm text-sectionSubTitle">
              A practical look at how our English learning programmes turn
              classroom effort into speaking confidence.
            </div>
          </div>

          <div class="grid gap-5 md:grid-cols-[1.2fr_0.8fr] items-start">
            <div class="space-y-4 text-body text-base leading-7">
              <p>
                Strong English is not built by memorising a few rules. It grows
                through repeated speaking, careful correction, and steady
                exposure to grammar, vocabulary, reading, and writing.
              </p>
              <p>
                That is why our courses are designed to help learners move from
                hesitation to fluency. Each session focuses on practical usage:
                how to express ideas clearly, how to listen with attention, and
                how to respond naturally in real conversations.
              </p>
              <p>
                The result is not just better marks or better test performance.
                It is confidence. Learners begin to speak with more accuracy,
                more rhythm, and more control, which is the real foundation of
                strong communication.
              </p>
            </div>

            <div class="rounded-xl bg-[#09111f] p-5 space-y-4 border border-gray-800">
              <div class="text-lg font-semibold text-sectionTitle">
                What the course develops
              </div>
              <ul class="space-y-3 text-sm text-body leading-6">
                <li>Fluency through guided speaking practice</li>
                <li>Accent improvement with focused repetition</li>
                <li>Grammar clarity through structured correction</li>
                <li>Vocabulary growth through contextual learning</li>
                <li>Reading and writing skills for complete communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!articles?.length" class="container pt-10 text-sectionSubTitle">
      No Articles Found!
    </div>
    <div
      v-if="articles?.length"
      class="container pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
    >
      <!-- <div class="text-white">{{ articles }}</div> -->
      <div
        v-for="article in articles"
        :key="article.id"
        @click="goToArticle(article.id)"
        class="bg-primary rounded-xl overflow-hidden hover:shadow-2xl cursor-pointer"
      >
        <!-- <div class="w-full overflow-hidden  ">
                    <q-img :ratio="4/3" class="object-cover w-full h-52" :src="article.image" />

                </div> -->
        <div class="p-5 lg:p-7 space-y-7 h-1/2">
          <div class="font-semibold text-bigText text-2xl">
            {{ article.title }}
          </div>
          <div class="text-base text-sectionTitle">{{ article.subtitle }}</div>
          <div class="font-thin text-xs text-sectionSubTitle">
            {{ article.written_on }}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const articles = ref([
      {
        id: "courses-to-confidence",
        title: "From Courses to Confidence",
        subtitle:
          "How structured English training turns practice into real fluency.",
        written_on: "24 April 2026",
      },
      {
        id: "grammar-and-communication",
        title: "Grammar and Communication",
        subtitle:
          "Why grammar works best when it is taught through speaking and writing.",
        written_on: "24 April 2026",
      },
      {
        id: "fluency-through-repetition",
        title: "Fluency Through Repetition",
        subtitle:
          "Simple routines that help learners speak with more control and rhythm.",
        written_on: "24 April 2026",
      },
    ]);

    return { articles };
  },
  methods: {
    goToArticle(articleId) {
      this.$router.push({
        path: `/blog/${articleId}`,
      });
    },
  },
};
</script>
