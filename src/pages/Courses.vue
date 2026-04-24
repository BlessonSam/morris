<template>
  <q-page dark class="py-10">
    <div class="container text-center pb-10 pt-20 space-y-3">
      <div class="text-semibold text-4xl text-bigText">
        Our English Learning Products
      </div>
      <div class="text-sm text-sectionSubTitle">
        Our specialised programmes in ENGLISH
      </div>
    </div>
    <div class="container pt-10 grid grid-cols-1 gap-8">
      <div
        v-for="course in courses"
        :key="course.name"
        dark
        class="m-3 md:m-5 lg:m-7 p-10 rounded-2xl bg-dark hover:shadow-2xl space-y-8"
        style="
          max-width: 900px;
          min-width: 200px;
        "
      >
        <div class="space-y-2">
          <div class="text-3xl font-semibold text-sectionTitle">
            {{ course.name }}
          </div>
          <div class="text-sm text-sectionSubTitle">{{ course.tagline }}</div>
        </div>

        <div class="space-y-4 text-sm text-sectionSubTitle leading-7">
          <p v-if="course.note"><strong>Note:</strong> {{ course.note }}</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Ideal for:</strong>
              <div>{{ course.idealFor }}</div>
            </div>
            <div>
              <strong>Teaching Platform:</strong>
              <div>{{ course.teachingPlatform }}</div>
            </div>
            <div>
              <strong>Nature of Course:</strong>
              <div>{{ course.nature }}</div>
            </div>
            <div v-if="course.classes">
              <strong>No. of Classes:</strong>
              <div>{{ course.classes }}</div>
            </div>
            <div v-if="course.duration">
              <strong>Duration:</strong>
              <div>{{ course.duration }}</div>
            </div>
            <div v-if="course.trainingMethod">
              <strong>Method of Training:</strong>
              <div>{{ course.trainingMethod }}</div>
            </div>
          </div>

          <div v-if="course.aim && course.aim.length">
            <strong>Aim of the Course:</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li v-for="point in course.aim" :key="point">{{ point }}</li>
            </ul>
          </div>

          <div v-if="course.topics && course.topics.length">
            <strong>Topics:</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li v-for="topic in course.topics" :key="topic">{{ topic }}</li>
            </ul>
          </div>

          <div v-if="course.objectives && course.objectives.length">
            <strong>Objectives of the Course:</strong>
            <ul class="list-disc pl-5 mt-1 space-y-1">
              <li v-for="objective in course.objectives" :key="objective">
                {{ objective }}
              </li>
            </ul>
          </div>

          <div v-if="course.methodology">
            <strong>Methodology:</strong>
            <p class="mt-1">{{ course.methodology }}</p>
          </div>

          <div v-if="course.description && course.description.length" class="space-y-3">
            <p v-for="paragraph in course.description" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const courses = ref([
      {
        name: "IELTS (Reading, Writing, Speaking and Listening)",
        tagline: "Power your English with focused IELTS preparation.",
        note:
          "Students can choose one or more modules as per individual requirement.",
        idealFor: "Students wishing to attend the IELTS exams.",
        teachingPlatform: "Online",
        nature: "Workshop with intensive exercise-based tutoring.",
        classes: "A total of 40 classes",
        duration: "Five days a week, spread across eight weeks.",
        trainingMethod: "Individual training - one to one.",
        aim: [
          "Skilling and vigorous training for getting the ideal IELTS score the student desires.",
        ],
        description: [
          "Our IELTS program is designed to help students preparing for their IELTS exams.",
          "Many students are not ready for these tests, and to prepare properly one has to build fundamental English skills first. These include speaking, writing, reading and listening.",
          "In addition, students may need to build IELTS vocabulary and pronunciation. Morris Anglo-Indian English Academy helps in all these areas.",
          "The academy builds your skills and gives vigorous training in all modules: speaking, writing, reading and listening.",
          "Along with training, the program equips you with IELTS strategies to help you achieve your desired score.",
        ],
      },
      {
        name: "Grammar - Functional Foundation Course",
        tagline: "Power your English through strong grammar foundations.",
        idealFor:
          "High school, higher secondary, college students, IELTS students, corporate executives and professionals.",
        teachingPlatform: "Online",
        nature: "Workshop with intensive exercise-based tutoring.",
        aim: [
          "Ample guidance and practice in English structure and usage, sentence building, correct usage and grammar rules.",
          "At every stage the student is asked to use the grammar learned.",
          "The learning of grammar is made as enjoyable as possible.",
        ],
        description: [
          "We believe that grammar learning should be as enjoyable as possible.",
          "In this functional foundation course, grammar moves from simple to more complex patterns, helping students use grammar functionally rather than only memorizing rules.",
          "This course is a synthesis of traditional and modern grammar, based on sound principles of teaching English.",
        ],
      },
      {
        name: "Business Writing, Correspondence and Communication",
        tagline: "Write with clarity, impact and professional confidence.",
        idealFor:
          "Executives, lawyers, doctors, business heads, business owners, CEOs, CFOs and professionals.",
        teachingPlatform: "Online",
        nature: "Workshop with live writing sessions.",
        aim: [
          "Teaches good writing.",
          "Teaches the basic principles of good business writing.",
          "Use the power of expression and learn how to write and what to write in business writing.",
          "Build confidence by writing with imaginative and assimilative thinking.",
          "Learn how to feel, think and articulate in the most effective manner.",
        ],
        description: [
          "Writing is essential to many business tasks: letters, reports, minutes of meetings, presentations and other forms of business writing.",
          "A well-constructed letter or report can help win new business or clients and build good relationships with employees, co-workers and clients.",
          "This program teaches practical business written communication across letters, reports, minutes, presentations and estimates.",
        ],
      },
      {
        name: "Creative Writing",
        tagline: "Develop spontaneous and expressive writing skills.",
        idealFor:
          "Doctors, journalists, content writers, executives, lawyers, business heads, business owners, CEOs, CFOs and professionals.",
        teachingPlatform: "Online",
        nature: "Workshop with live writing sessions.",
        classes: "A total of 25 classes",
        aim: [
          "To write creatively with spontaneity.",
          "Teaches the basic principles of good writing.",
          "Use the power of expression and learn how to write and what to write.",
          "Build confidence in writing using imaginative and assimilative thinking.",
          "Learn how to feel, think and articulate in the most effective manner.",
        ],
        description: [
          "Writing is essential for modern content needs including blogs, websites, fliers, reports, letters, presentations and social media.",
          "This program trains learners in creative writing so the final output is both elegant and practical.",
        ],
      },
      {
        name: "English Communication - Special Program for Students",
        tagline: "Build fluency, pronunciation and confidence in spoken English.",
        idealFor: "Students who want stronger spoken English communication.",
        teachingPlatform: "Online",
        nature: "One-to-one guided communication and fluency training.",
        classes: "Twelve one-to-one training sessions",
        trainingMethod:
          "One-to-one training on Google Meet with daily WhatsApp exercises monitored by a mentor.",
        aim: [
          "To help the student achieve a higher degree of fluency in English.",
          "To speak with proper enunciation and pronunciation.",
          "To speak without a regional accent.",
          "To employ the right stress and de-stress while speaking.",
          "To use the right intonation and focus words while communicating in English.",
          "To speak with confidence, style and clarity.",
        ],
        topics: [
          "Stress and de-stress",
          "Timing",
          "Focus words",
          "Intonation",
          "Sounds of the alphabets",
          "Contractions",
          "Accent correction",
          "Linking sounds",
          "Fluency",
          "Spontaneity in speaking",
        ],
        methodology:
          "Interspersed with conversation and fluency practice, the program includes one-to-one trainer sessions on Google Meet. The trainer teaches, guides, corrects and monitors. Daily exercises and assignments on WhatsApp are monitored by a mentor.",
        description: [
          "When learning English, learners often carry the rhythm of their native language, which can make English sound awkward.",
          "English is stress-timed, and correct stress, de-stress, timing, focus words and intonation are crucial components of spoken communication.",
        ],
      },
      {
        name: "English Communication Programs (Basic, Intermediate, Advanced)",
        tagline: "Progressive communication training from foundation to advanced speaking.",
        idealFor: "Learners at basic, intermediate and advanced speaking levels.",
        teachingPlatform: "Online",
        nature: "Workshop based, live and interactive.",
        trainingMethod:
          "One-to-one trainer-led Google Meet classes with daily WhatsApp exercises monitored by a mentor.",
        topics: [
          "Stress and de-stress",
          "Timing",
          "Focus words",
          "Intonation",
          "Sounds of the alphabets",
          "Contractions",
          "Accent correction",
          "Linking sounds",
          "Fluency",
          "Spontaneity in speaking",
          "Fluency exercises",
          "Accent enhancement",
          "Presentation skills",
          "Public speaking",
          "Q and A",
        ],
        objectives: [
          "To help the student achieve a higher degree of fluency in English.",
          "To speak with proper enunciation and pronunciation.",
          "To speak without a regional accent.",
          "To employ the right stress and de-stress while speaking.",
          "To use the right intonation and focus words while communicating in English.",
          "To speak with confidence, style and clarity.",
        ],
        methodology:
          "Workshop based and interactive, with conversation and fluency practice. The trainer teaches, guides, corrects and monitors during class, with additional daily assignments monitored by a mentor.",
      },
    ]);

    return { courses };
  },
};
</script>

<style>
.totoptransparent-bg {
  background-image: linear-gradient(to bottom, rgba(245, 245, 248, 0), #000c19);
}
</style>
