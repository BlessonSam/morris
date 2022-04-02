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
            ref="nameRef"
            lazy-rules
            dark
            color="sectionSubTitle"
            rounded
            outlined
            v-model="name"
            label="Full Name"
            :rules="[
              (val) =>
                val.length >= 3 || 'Name should contain atleast 3 characters',
            ]"
          />
          <q-input
            ref="emailRef"
            lazy-rules
            dark
            color="sectionSubTitle"
            v-model="email"
            rounded
            outlined
            type="email"
            label="Email"
            :rules="[
              (val) =>
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
                'Enter correct email address. Example: me@example.com',
            ]"
          />
          <q-input
            ref="phnoRef"
            lazy-rules
            dark
            color="sectionSubTitle"
            v-model="phno"
            rounded
            outlined
            type="tel"
            label="Phone Number"
            :rules="[
              (val) =>
                val.length == 10 ||
                'Phone number should have exactly 10 digits.',
            ]"
          />
          <q-input
            ref="messageRef"
            lazy-rules
            dark
            color="sectionSubTitle"
            v-model="message"
            rounded
            outlined
            type="textarea"
            label="Message"
            :rules="[
              (val) =>
                val.length >= 10 ||
                'Message should containe atleast 10 characters.',
            ]"
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
            <div class="font-semibold text-brand">
              Morris Anglo-Indian English Academy
            </div>
            <div>TC 13/175/1, ARCANGELS</div>
            <div>NALUMUKKU JUNCTION ,Pattoor –Airport Road</div>
            <div>opposite HDFC /AXIS Bank ,Near H P Petrol Pump</div>
            <div>PETTAH,TRIVANDRUM-24</div>
          </div>
          <div class="text-body">morrisacademy@morrismorris.in</div>
          <div class="space-y-2 text-body">
            <div class="">9745251362</div>
            <div>9349366924</div>
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
    let name = ref("");
    let email = ref("");
    let message = ref("");
    let phno = ref("");

    const nameRef = ref(null);
    const emailRef = ref(null);
    const messageRef = ref(null);
    const phnoRef = ref(null);

    // const data = ref(null);

    // function loadData() {
    //   api
    //     .get("/aboutus/")

    //     .then((response) => {
    //       let dataObj = response.data[0];
    //       let contactObj = {
    //         ...dataObj,
    //         addressLines: [
    //           dataObj.first_line,
    //           dataObj.second_line,
    //           dataObj.third_line,
    //           dataObj.fourth_line,
    //           dataObj.fifth_line,
    //         ].filter((x) => x),

    //         contactNos: [dataObj.contact1, dataObj.contact2].filter((x) => x),
    //       };

    //       data.value = contactObj;
    //     })
    //     .catch(() => {
    //       $q.notify({
    //         color: "negative",
    //         position: "top",
    //         message: "Loading failed",
    //         icon: "report_problem",
    //       });
    //     });
    // }

    function sendQuery() {
      const $q = useQuasar();
      api
        .post("/add/query/", {
          name: name.value,
          email: email.value,
          message: message.value,
          phno: phno.value,
        })

        .then((response) => {
          name.value = email.value = message.value = phno.value = "";
          nameRef.value.resetValidation();
          emailRef.value.resetValidation();
          messageRef.value.resetValidation();
          phnoRef.value.resetValidation();
        })
        .catch((error) => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Query submission failed",
            icon: "report_problem",
          });
        });
    }

    return {
      name,
      email,
      message,
      phno,
      sendQuery,
      nameRef,
      emailRef,
      messageRef,
      phnoRef,
    };
  },

  methods: {
    submitClicked() {
      this.sendQuery();
    },
  },
};
</script>
