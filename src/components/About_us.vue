<template>
  <div class="py-10 text-gray-900">
    <div
      class="pt-20 pb-10 space-y-10 text-center flex flex-col justify-center container"
    >
      <div class="text-4xl text-bigText">About Us</div>
      <div class="text-sm text-body mx-auto space-y-5" style="max-width: 800px">
        <p>
          <span class="text-italic font-semibold"
            >The ARCANGELS Anglo–Indian Pre-School</span
          >,established some 17 years ago in the year 2004, by lady edu-
          entrepreneur Yasmin Ann Morris, pioneered the concept of providing
          Pre-schoolers and Kindergartners with high quality education and care
          ,all within the framework of English as an additional first language.
        </p>

        <p class="text-brand">
          As a natural corollary
          <span class="font-bold">Morris Anglo–Indian English Academy</span>
          was born with the laudable objective of teaching English as a Second
          Language to aspiring English Speakers and Practitioners .
        </p>

        <p>
          <span class="font-bold">Morris Anglo–Indian English Academy</span>
          will take you into the fascinating world of English by creating an
          environment that effortlessly internalise grammar ,vocabulary ,reading
          ,writing and speaking skills, all with the objective of providing you
          with a well rounded knowledge of the English Language and readying you
          to face any situation where knowledge of the English Language is
          essential.
        </p>
      </div>
    </div>

    <div class="py-10 container space-y-10">
      <div class="text-center space-y-3">
        <div class="text-2xl text-bigText">Our Team</div>
        <div class="text-sm text-sectionSubTitle">
          Meet our exceptionally talented and experienced team
        </div>
      </div>

      <div class="flex flex-wrap justify-center">
        <div
          v-for="(member, i) in members"
          :key="`member${i}`"
          class="mx-10 space-y-4 p-5 flex-col text-center flex justify-center"
          style="max-width: 300px"
        >
          <img
            :src="member.pic"
            class="rounded-full overflow-hidden w-36 h-36 mx-auto"
          />
          <div class="text-sectionTitle text-lg font-semibold w-full">
            {{ member.name }}
          </div>
          <div class="font-bold text-sectionSubTitle">{{ member.title }}</div>
          <div class="text-body">{{ member.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "About_Us",
  setup() {
    const $q = useQuasar();
    const members = ref(null);

    function loadTeamData() {
      api
        .get("/teams/")

        .then((response) => {
          members.value = response.data;
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

    return { members, loadTeamData };
  },

  mounted() {
    this.loadTeamData();
  },
});
</script>

<style></style>
