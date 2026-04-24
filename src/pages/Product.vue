<template>
  <q-page v-if="course" dark class="pb-10 pt-20 container space-y-5">
    <div class="text-3xl font-semibold text-bigText">{{ course.name }}</div>
    <div v-if="course.tagline" class="font-semibold text-brand text-lg">
      {{ course.tagline }}
    </div>
    <div v-if="course.note" class="text-body text-base">
      {{ course.note }}
    </div>

    <div v-if="course.idealFor">
      <div class="text-lg text-sectionSubTitle mb-1">Ideal for</div>
      <div class="text-body text-base">{{ course.idealFor }}</div>
    </div>
    <div v-if="course.aim?.length" class="">
      <div class="text-lg text-sectionSubTitle mb-2">Aim of the Course</div>
      <div
        class="text-body text-base"
        v-for="aim in course.aim"
        :key="aim"
      >
        • {{ aim }}
      </div>
    </div>
    <div v-if="course.objectives?.length" class="">
      <div class="text-lg text-sectionSubTitle mb-2">Course Objectives</div>
      <div
        class="text-body text-base"
        v-for="obj in course.objectives"
        :key="obj"
      >
        • {{ obj }}
      </div>
    </div>
    <div v-if="course.topics?.length" class="">
      <div class="text-lg text-sectionSubTitle mb-2">Topics</div>
      <div
        class="text-body text-base"
        v-for="topic in course.topics"
        :key="topic"
      >
        • {{ topic }}
      </div>
    </div>
    <div v-if="course.methodology">
      <div class="text-lg text-sectionSubTitle">Methodology</div>
      <div class="text-body text-base">{{ course.methodology }}</div>
    </div>
    <div class="">
      <div class="text-lg text-sectionSubTitle mb-2">Course Details</div>
      <div v-if="course.teachingPlatform" class="text-body text-base">
        • Teaching Platform: {{ course.teachingPlatform }}
      </div>
      <div v-if="course.classes" class="text-body text-base">
        • Number of Classes: {{ course.classes }}
      </div>
      <div v-if="course.duration" class="text-body text-base">
        • Duration: {{ course.duration }}
      </div>
      <div v-if="course.trainingMethod" class="text-body text-base">
        • Method of Training: {{ course.trainingMethod }}
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
    const courseMap = {
      ielts: {
        name: "IELTS (Reading, Writing, Speaking and Listening)",
        tagline: "Power your English with focused IELTS preparation.",
        note: "Students can choose one or more modules as per individual requirement.",
        idealFor: "Students wishing to attend the IELTS exams.",
        teachingPlatform: "Online",
        nature: "Workshop with intensive exercise-based tutoring.",
        classes: "A total of 40 classes",
        duration: "Five days a week, spread across eight weeks.",
        trainingMethod: "Individual training - one to one.",
        aim: ["Skilling and vigorous training for getting the ideal IELTS score the student desires."],
        description: [
          "Our IELTS program is designed to help students preparing for their IELTS exams.",
          "Many students are not ready for these tests, and to prepare properly one has to build fundamental English skills first. These include speaking, writing, reading and listening.",
        ],
        objectives: ["To help the student achieve a higher degree of fluency in English."],
        methodology: "Workshop based and interactive, with conversation and fluency practice.",
      },
      grammar: {
        name: "Grammar - Functional Foundation Course",
        tagline: "Power your English through strong grammar foundations.",
        idealFor: "High school, higher secondary, college students, IELTS students, corporate executives and professionals.",
        teachingPlatform: "Online",
        nature: "Workshop with intensive exercise-based tutoring.",
        aim: [
          "Ample guidance and practice in English structure and usage, sentence building, correct usage and grammar rules.",
          "At every stage the student is asked to use the grammar learned.",
        ],
        description: [
          "We believe that grammar learning should be as enjoyable as possible.",
          "In this functional foundation course, grammar moves from simple to more complex patterns.",
        ],
      },
      business_writing: {
        name: "Business Writing, Correspondence and Communication",
        tagline: "Write with clarity, impact and professional confidence.",
        idealFor: "Executives, lawyers, doctors, business heads, business owners, CEOs, CFOs and professionals.",
        teachingPlatform: "Online",
        nature: "Workshop with live writing sessions.",
        aim: [
          "Teaches good writing.",
          "Teaches the basic principles of good business writing.",
          "Use the power of expression and learn how to write and what to write in business writing.",
        ],
        description: [
          "Writing is essential to many business tasks: letters, reports, minutes of meetings, presentations and other forms of business writing.",
        ],
      },
      creative_writing: {
        name: "Creative Writing",
        tagline: "Develop spontaneous and expressive writing skills.",
        idealFor: "Doctors, journalists, content writers, executives, lawyers, business heads, business owners, CEOs, CFOs and professionals.",
        teachingPlatform: "Online",
        nature: "Workshop with live writing sessions.",
        classes: "A total of 25 classes",
        aim: [
          "To write creatively with spontaneity.",
          "Teaches the basic principles of good writing.",
          "Use the power of expression and learn how to write and what to write.",
        ],
        description: [
          "Writing is essential for modern content needs including blogs, websites, fliers, reports, letters, presentations and social media.",
        ],
      },
      communication_students: {
        name: "English Communication - Special Program for Students",
        tagline: "Build fluency, pronunciation and confidence in spoken English.",
        idealFor: "Students who want stronger spoken English communication.",
        teachingPlatform: "Online",
        nature: "One-to-one guided communication and fluency training.",
        classes: "Twelve one-to-one training sessions",
        trainingMethod: "One-to-one training on Google Meet with daily WhatsApp exercises monitored by a mentor.",
        aim: [
          "To help the student achieve a higher degree of fluency in English.",
          "To speak with proper enunciation and pronunciation.",
          "To speak without a regional accent.",
        ],
        topics: ["Stress and de-stress", "Timing", "Focus words", "Intonation", "Fluency"],
        methodology: "Interspersed with conversation and fluency practice.",
      },
      communication_programs: {
        name: "English Communication Programs (Basic, Intermediate, Advanced)",
        tagline: "Progressive communication training from foundation to advanced speaking.",
        idealFor: "Learners at basic, intermediate and advanced speaking levels.",
        teachingPlatform: "Online",
        nature: "Workshop based, live and interactive.",
        trainingMethod: "One-to-one trainer-led Google Meet classes with daily WhatsApp exercises monitored by a mentor.",
        topics: ["Stress and de-stress", "Timing", "Fluency", "Accent enhancement", "Presentation skills"],
        objectives: ["To speak with confidence, style and clarity."],
        methodology: "Workshop based and interactive, with conversation and fluency practice.",
      },
    };

    const productId = route.params.productId;
    const course = ref(courseMap[productId] || courseMap.grammar);

    return { course };
  },
};
</script>
