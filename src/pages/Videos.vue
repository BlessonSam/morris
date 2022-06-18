<template>
  <q-page dark class="py-10">
    <div class="container text-center pb-10 pt-20 space-y-3">
      <div class="text-semibold text-4xl text-bigText">Videos</div>
      <div class="text-sm text-sectionSubTitle">Our curated list of videos</div>
    </div>

    <div v-if="!videoData?.length" class="container pt-10 text-sectionSubTitle">
      No Videos Found!
    </div>

    <div
      class="container pt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12"
      v-if="videoData?.length"
    >
      <div
        v-for="video in videoData"
        :key="video.url"
        class="space-y-3"
        style="max-width: 300px"
      >
        <div
          @click="selectVideo(video)"
          class="rounded-xl overflow-hidden relative flex flex-center h-40 cursor-pointer"
        >
          <q-img
            :ratio="4 / 3"
            class="absolute top-0 left-0 h-40"
            :src="video.thumbnail"
          />
          <q-icon class="text-gray-200" size="md" name="play_circle_filled" />
        </div>
        <div class="font-semibold px-2 text-sectionSubTitle">
          {{ video.title }}
        </div>
      </div>
    </div>

    <q-dialog v-model="showVideo">
      <q-card class="w-11/12 md:w-4/6">
        <q-video class="w-full" :ratio="16 / 9" :src="selectedVideo.url" />
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const videoData = ref(null);

    function loadData() {
      api
        .get("/videos/")

        .then((response) => {
          videoData.value = response.data;
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

    return { videoData, loadData };
  },
  data() {
    return {
      showVideo: false,
      selectedVideo: null,
    };
  },
  methods: {
    selectVideo(video) {
      this.selectedVideo = video;
      this.showVideo = true;
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>
