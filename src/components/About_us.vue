<template>
  <div class="py-10 text-gray-900">
    <div
      class="pt-20 pb-10 space-y-10 text-center flex flex-col justify-center container"
    >
      <div class="space-y-4">
        <div class="text-sm uppercase tracking-[0.35em] text-sectionSubTitle">
          Masters of English
        </div>
        <div class="text-4xl text-bigText">M O R R I S</div>
        <div class="text-xl font-semibold text-brand">
          Anglo-Indian English Academy
        </div>
        <div class="text-lg tracking-[0.3em] text-sectionSubTitle">
          POWER YOUR ENGLISH
        </div>
      </div>
      <div
        class="text-base text-body mx-auto space-y-5"
        style="max-width: 800px"
      >
        <p>
          An introduction to the
        </p>

        <p class="text-2xl font-semibold tracking-[0.2em] text-bigText">
          M O R R I S Anglo-Indian English Academy
        </p>

        <p class="text-brand font-semibold">Established in 2015</p>

        <p>
          with over 30,000 hours of teaching experience in individually coaching
          over 2000 students across all categories
        </p>

        <p>
          the M O R R I S Anglo-Indian English Academy will power you into that
          elite class of English speakers and practitioners by teaching you the
          English Language quickly, easily and effectively.
        </p>

        <p>
          By creating an environment that helps you internalise speaking skills
          with absolute focus on Fluency and Accent
        </p>

        <p>
          M O R R I S Anglo-Indian English Academy will also train you for
          Grammar and Vocabulary as well as help you enhance your reading and
          writing skills.
        </p>

        <p>
          All of this with the objective of providing you with a well rounded
          knowledge of the English Language and in the process readying you to
          face any situation where knowledge of the English Language is
          essential.
        </p>
      </div>

      <!-- <div class="text-base text-body mx-auto space-y-1" style="max-width: 800px">
        <p class="font-semibold">M O R R I S Anglo-Indian English Academy</p>
        <p>TC 13/175/1, ARCANGELS,</p>
        <p>NALUMUKKU JUNCTION, Pattoor - Airport Road,</p>
        <p>opposite HDFC / AXIS Bank, Near H P Petrol Pump,</p>
        <p>PETTAH, TRIVANDRUM-24</p>
        <p>PH: 9745251362 9349366924</p>
      </div> -->
    </div>

    <div class="py-10 container space-y-10">
      <div class="text-center space-y-3">
        <div class="text-2xl text-bigText">MEET OUR TRAINERS</div>
        <div class="text-base text-sectionSubTitle">
          Experienced mentors in communication, grammar, and voice training
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
            v-if="member.pic"
            :src="member.pic"
            class="rounded-full overflow-hidden w-36 h-36 mx-auto"
          />
          <div class="text-sectionTitle text-lg font-semibold w-full">
            {{ member.name }}
          </div>
          <div class="font-bold text-sectionSubTitle">{{ member.title }}</div>
          <div v-if="member.description" class="text-body">
            {{ member.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "About_Us",
  data() {
    return {
      members: [
        {
          name: "SHANE WILFRED MORRIS",
          title:
            "Advocate, former Banking professional and Master teacher in English Communication",
          description: "",
          pic: "",
        },
        {
          name: "SHANE ABLETT",
          title:
            "Master Grammar Teacher with over twenty years of experience in teaching GRAMMAR",
          description: "",
          pic: "",
        },
        {
          name: "ALAN MORAIS",
          title:
            "Voice and English Communication Coach, Singer and musician",
          description: "",
          pic: "",
        },
      ],
    };
  },
});
</script>

<style></style>
