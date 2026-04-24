<template>
  <q-page dark class="container pb-10 pt-20">
    <!-- <div v-if="article.image" class="rounded-3xl overflow-hidden" style="max-height:500px;">
        <q-img :src="article.image" :ratio=4/3 class="object-cover" />
        </div> -->

    <div v-if="article" class="p-5 space-y-3">
      <div class="font-semibold text-3xl text-bigText">{{ article.title }}</div>
      <div class="space-x-2 italic text-sectionSubTitle">
        <span>{{ article.written_by }}&nbsp;</span>
        |
        <span class="font-thin">{{ article.written_on }}</span>
      </div>
      <div v-if="article.subtitle" class="font-semibold text-sectionTitle">
        {{ article.subtitle }}
      </div>
      <div
        v-for="(section, i) in article.section"
        :key="`section-${i}`"
        class="text-body text-base"
      >
        {{ section }}
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const articleId = route.params.articleId;
    const articleMap = {
      "courses-to-confidence": {
        title: "From Courses to Confidence",
        written_by: "Morris Anglo-Indian English Academy",
        written_on: "24 April 2026",
        subtitle: "How structured English training turns practice into real fluency.",
        section: [
          "Strong English is built through practice, correction, and repetition. A good course creates that environment in a way learners can trust.",
          "When a student works on speaking, grammar, vocabulary, reading, and writing together, confidence grows naturally. The aim is not to memorize English, but to use it clearly and comfortably in real life.",
          "Our courses are designed around that principle. They help learners move from hesitation to control, and from control to fluency.",
        ],
      },
      "grammar-and-communication": {
        title: "Grammar and Communication",
        written_by: "Morris Anglo-Indian English Academy",
        written_on: "24 April 2026",
        subtitle: "Why grammar works best when it is taught through speaking and writing.",
        section: [
          "Grammar becomes easier when it is connected to communication rather than isolated rules.",
          "Students learn faster when they see grammar in action: in sentences, conversations, short answers, paragraphs, and everyday usage.",
        ],
      },
      "fluency-through-repetition": {
        title: "Fluency Through Repetition",
        written_by: "Morris Anglo-Indian English Academy",
        written_on: "24 April 2026",
        subtitle: "Simple routines that help learners speak with more control and rhythm.",
        section: [
          "Fluency grows from repeated, meaningful practice.",
          "A learner who speaks regularly, listens carefully, and receives correction builds stronger rhythm, better pronunciation, and greater confidence.",
        ],
      },
    };
    const article = ref(articleMap[articleId] || articleMap["courses-to-confidence"]);

    return { article };
  },
};
</script>
