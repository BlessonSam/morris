<template>
  <q-page dark class="container pt-20 pb-10 space-y-20 text-center">
    <div class="text-4xl text-center text-brand">Contact Us</div>

    <div
      class="w-full flex flex-wrap space-y-20 lg:space-y-0 lg:flex-nowrap lg:space-x-5 lg:divide-x divide-gray-700"
    >
      <div class="space-y-10 w-full lg:mr-5">
        <div class="text-xl font-semibold text-sectionSubTitle">
          Drop us a line!
        </div>
        <div class="mx-auto space-y-5" style="max-width: 500px">
          <q-input
            dark
            color="sectionSubTitle"
            rounded
            outlined
            v-model="name"
            label="Full Name"
          />
          <q-input
            dark
            color="sectionSubTitle"
            v-model="email"
            rounded
            outlined
            type="email"
            label="Email"
          />
          <q-input
            dark
            color="sectionSubTitle"
            v-model="phone"
            rounded
            outlined
            type="tel"
            label="Phone Number"
          />
          <q-input
            dark
            color="sectionSubTitle"
            v-model="message"
            rounded
            outlined
            type="textarea"
            label="Message"
          />
          <q-btn
            dark
            @click="submitClicked"
            rounded
            no-caps
            color="sectionSubTitle"
            class="text-black"
            >Send Message</q-btn
          >
        </div>
      </div>

      <div class="space-y-10 w-full">
        <div class="text-xl font-semibold text-sectionSubTitle">
          Better yet, see us in person!
        </div>
        <div class="mx-auto space-y-5" style="max-width: 500px">
          <div class="space-y-2 text-body">
            <div class="font-semibold">{{ address.firstLine }}</div>
            <div v-for="line in address.lines" :key="line">{{ line }}</div>
          </div>
          <div class="text-body">{{ address.email }}</div>
          <div class="space-y-2 text-body">
            <div v-for="number in address.phoneNumbers" :key="number" class="">
              {{ number }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const data = ref(null);

    function loadData() {
      api
        .get("/courses/")
        .then((response) => {
          data.value = response.data;
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

    return { data, loadData };
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      phone: "",
      address: {
        firstLine: "Morris Anglo-Indian English Academy",
        lines: [
          "TC 13/175/1, ARCANGELS",
          "NALUMUKKU JUNCTION ,Pattoor –Airport Road",
          "opposite HDFC /AXIS Bank ,Near H P Petrol Pump",
          "PETTAH,TRIVANDRUM-24",
        ],
        email: "morrisacademy@morrismorris.in",
        phoneNumbers: ["9745251362", "9349366924"],
      },
    };
  },
  methods: {
    submitClicked() {
      this.name = this.email = this.message = this.phone = "";
    },
  },
};
</script>
