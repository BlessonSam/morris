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
        v-for="(section, i) in article.section[0].split('\r\n\r\n')"
        :key="`section-${i}`"
        class="text-body"
      >
        {{ section }}
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar, date } from "quasar";
import { useRoute } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const article = ref(null);
    const { articleId } = route.params;
    function loadData() {
      api
        .get(`/articles/${articleId}`)

        .then((response) => {
          article.value = response.data;
          article.value = {
            ...article.value,
            written_on: date.formatDate(
              article.value.written_on,
              "D MMMM YYYY"
            ),
          };
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    }

    return { article, loadData };
  },

  mounted() {
    this.loadData();
  },
};
</script>
