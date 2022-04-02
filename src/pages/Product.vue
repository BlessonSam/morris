<template>
  <q-page v-if="course" dark class="pb-10 pt-20 container space-y-5">
    <div class="text-3xl font-semibold text-bigText">{{ course.title }}</div>
    <div v-if="course.subtitle" class="font-semibold text-brand text-lg">
      {{ course.subtitle }}
    </div>
    <div v-if="course.intro" class="text-body">{{ course.intro }}</div>

    <div v-if="course.rhythm_of_english" class="text-body">
      <div class="text-lg text-sectionSubTitle mb-1">The RHYTHM of ENGLISH</div>
      <div>{{ course.rhythm_of_english }}</div>
    </div>
    <div v-if="course.ideal_for">
      <div class="text-lg text-sectionSubTitle mb-1">Ideal for</div>
      <div class="text-body text-sm">{{ course.ideal_for }}</div>
    </div>
    <div v-if="course._objectives" class="">
      <div class="text-lg text-sectionSubTitle mb-2">Course Objectives</div>
      <div
        class="text-body text-sm"
        v-for="obj in course._objectives"
        :key="obj"
      >
        > {{ obj }}
      </div>
    </div>
    <div v-if="course.topics" class="">
      <div class="text-lg text-sectionSubTitle mb-2">Topics</div>
      <div
        class="text-body text-sm"
        v-for="topic in course.topics.split('\r\n').filter((x) => x)"
        :key="topic"
      >
        * {{ topic }}
      </div>
    </div>
    <div v-if="course.methodology">
      <div class="text-lg text-sectionSubTitle">Methodology</div>
      <div class="text-body text-sm">{{ course.methodology }}</div>
    </div>
    <div v-if="course._details" class="">
      <div class="text-lg text-sectionSubTitle mb-2">Course Details</div>
      <div class="text-body text-sm" v-for="det in course._details" :key="det">
        > {{ det }}
      </div>
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
