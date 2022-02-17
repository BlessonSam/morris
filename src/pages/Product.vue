<template>
  <q-page v-if="course" dark class="pb-10 pt-20 container space-y-5">
    <div class="text-3xl font-semibold text-bigText">{{ course.title }}</div>
    <div v-if="course.subtitle" class="font-semibold text-sectionSubTitle">
      {{ course.subtitle }}
    </div>
    <div
      v-for="(section, i) in course.section.split('\r\n\r\n')"
      :key="`section-${i}`"
      class="text-body"
    >
      {{ section }}
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRoute } from "vue-router";

export default {
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const course = ref(null);
    const { productId } = route.params;
    function loadData() {
      api
        .get(`/courses/${productId}`)

        .then((response) => {
          course.value = response.data;
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

    return { course, loadData };
  },

  mounted() {
    this.loadData();
  },
};
</script>
