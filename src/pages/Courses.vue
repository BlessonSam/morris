<template>
  <q-page dark class="py-10 courses-page-bg">
    <section class="container pt-16 pb-10">
      <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] items-start">
        <div class="space-y-6">
          <div class="inline-flex items-center rounded-full border border-gray-800 bg-[#07111d] px-4 py-2 text-xs uppercase tracking-[0.35em] text-brand">
            English learning programmes
          </div>

          <div class="space-y-4 max-w-3xl">
            <div class="text-4xl md:text-5xl font-semibold text-bigText leading-tight">
              Our English Learning Products
            </div>
            <div class="text-base md:text-lg text-sectionSubTitle leading-8">
              A focused set of online programmes designed to build grammar,
              fluency, writing and communication skills in a way that is easy
              to follow and practical to use.
            </div>
          </div>

          <div class="flex flex-wrap gap-3">
            <span class="rounded-full border border-gray-800 bg-[#07111d] px-4 py-2 text-sm text-body">
              {{ courseCards.length }} programmes
            </span>
            <span class="rounded-full border border-gray-800 bg-[#07111d] px-4 py-2 text-sm text-body">
              Online delivery
            </span>
            <span class="rounded-full border border-gray-800 bg-[#07111d] px-4 py-2 text-sm text-body">
              One-to-one and workshop formats
            </span>
          </div>
        </div>

        <div class="rounded-3xl border border-gray-800 bg-dark shadow-2xl overflow-hidden">
          <div class="bg-[#081426] px-6 py-5 border-b border-gray-800">
            <div class="text-sm uppercase tracking-[0.28em] text-brand">How it works</div>
            <div class="mt-2 text-2xl font-semibold text-sectionTitle">
              Clear structure, simple navigation
            </div>
          </div>
          <div class="p-6 space-y-5 text-sm text-body leading-7">
            <p>
              Each course is presented as a compact learning card with the most
              important details first, followed by aims, topics, objectives and
              supporting notes.
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl bg-[#09111f] p-4 border border-gray-800">
                <div class="text-sectionTitle font-semibold">Quick comparison</div>
                <div class="mt-1 text-sectionSubTitle">
                  See the best fit before reading the full description.
                </div>
              </div>
              <div class="rounded-2xl bg-[#09111f] p-4 border border-gray-800">
                <div class="text-sectionTitle font-semibold">Easy scanning</div>
                <div class="mt-1 text-sectionSubTitle">
                  Use the sidebar links to jump straight to a programme.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container pb-16">
      <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
        <div class="space-y-6">
          <article
            v-for="course in courseCards"
            :key="course.id"
            :id="course.id"
            class="rounded-3xl border border-gray-800 bg-dark overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div class="border-b border-gray-800 bg-[#081426] px-6 py-5 md:px-8 md:py-6">
              <div class="flex flex-wrap items-start justify-between gap-4">
                <div class="space-y-2 max-w-3xl">
                  <div class="text-2xl md:text-3xl font-semibold text-sectionTitle leading-tight">
                    {{ course.name }}
                  </div>
                  <div class="text-sm md:text-base text-sectionSubTitle leading-7">
                    {{ course.tagline }}
                  </div>
                </div>

                <a
                  :href="`#${course.id}`"
                  class="inline-flex items-center rounded-full border border-gray-700 bg-[#07111d] px-4 py-2 text-xs uppercase tracking-[0.24em] text-brand"
                >
                  View details
                </a>
              </div>
            </div>

            <div class="px-6 py-6 md:px-8 md:py-8 space-y-8">
              <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div
                  v-for="fact in course.facts"
                  :key="fact.label"
                  class="rounded-2xl border border-gray-800 bg-[#09111f] p-4"
                >
                  <div class="text-xs uppercase tracking-[0.25em] text-brand">
                    {{ fact.label }}
                  </div>
                  <div class="mt-2 text-sm text-body leading-6">
                    {{ fact.value }}
                  </div>
                </div>
              </div>

              <div v-if="course.note" class="rounded-2xl border border-[#5b3a10] bg-[#221706] p-4 text-sm text-body leading-7">
                <span class="font-semibold text-brand">Note:</span>
                {{ course.note }}
              </div>

              <div class="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
                <div class="space-y-6">
                  <div v-if="course.aim?.length" class="space-y-3">
                    <div class="text-lg font-semibold text-sectionTitle">Aim of the Course</div>
                    <ul class="space-y-2 text-sm text-body leading-7">
                      <li v-for="point in course.aim" :key="point" class="flex gap-3">
                        <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand"></span>
                        <span>{{ point }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="course.objectives?.length" class="space-y-3">
                    <div class="text-lg font-semibold text-sectionTitle">Objectives</div>
                    <ul class="space-y-2 text-sm text-body leading-7">
                      <li v-for="objective in course.objectives" :key="objective" class="flex gap-3">
                        <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand"></span>
                        <span>{{ objective }}</span>
                      </li>
                    </ul>
                  </div>

                  <div v-if="course.description?.length" class="space-y-3 text-sm text-body leading-7">
                    <div class="text-lg font-semibold text-sectionTitle">Overview</div>
                    <p v-for="paragraph in course.description" :key="paragraph">
                      {{ paragraph }}
                    </p>
                  </div>
                </div>

                <div class="space-y-6">
                  <div v-if="course.topics?.length" class="rounded-2xl border border-gray-800 bg-[#09111f] p-5 space-y-4">
                    <div class="text-lg font-semibold text-sectionTitle">Topics</div>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="topic in course.topics"
                        :key="topic"
                        class="rounded-full border border-gray-700 bg-[#07111d] px-3 py-1 text-sm text-body"
                      >
                        {{ topic }}
                      </span>
                    </div>
                  </div>

                  <div v-if="course.methodology" class="rounded-2xl border border-gray-800 bg-[#09111f] p-5 space-y-2">
                    <div class="text-lg font-semibold text-sectionTitle">Methodology</div>
                    <p class="text-sm text-body leading-7">
                      {{ course.methodology }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <aside class="space-y-6 lg:sticky lg:top-10">
          <div class="rounded-3xl border border-gray-800 bg-dark overflow-hidden shadow-lg">
            <div class="px-5 py-4 border-b border-gray-800 bg-[#081426]">
              <div class="text-sm uppercase tracking-[0.28em] text-brand">Quick links</div>
              <div class="mt-2 text-xl font-semibold text-sectionTitle">
                Jump to a programme
              </div>
            </div>
            <div class="p-4 space-y-2">
              <a
                v-for="course in courseCards"
                :key="course.id"
                :href="`#${course.id}`"
                class="block rounded-2xl border border-gray-800 bg-[#09111f] px-4 py-3 text-sm text-body hover:border-brand hover:text-bigText transition-colors"
              >
                {{ course.shortName }}
              </a>
            </div>
          </div>

          <div class="rounded-3xl border border-gray-800 bg-dark p-5 space-y-4 shadow-lg">
            <div class="text-xl font-semibold text-sectionTitle">What learners get</div>
            <div class="space-y-3 text-sm text-body leading-7">
              <div class="rounded-2xl bg-[#09111f] border border-gray-800 p-4">
                Structured teaching that starts from the learner’s current level.
              </div>
              <div class="rounded-2xl bg-[#09111f] border border-gray-800 p-4">
                Practical exercises that focus on speaking, writing and accuracy.
              </div>
              <div class="rounded-2xl bg-[#09111f] border border-gray-800 p-4">
                Clear progression across foundational, professional and advanced needs.
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </q-page>
</template>

<script>
import { computed, ref } from "vue";

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

    const courseCards = computed(() =>
      courses.value.map((course) => ({
        ...course,
        id: course.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, ""),
        shortName: course.name.replace(/\s*\(.*\)\s*/g, "").trim(),
        facts: [
          {
            label: "Ideal for",
            value: course.idealFor,
          },
          {
            label: "Teaching platform",
            value: course.teachingPlatform,
          },
          {
            label: "Nature of course",
            value: course.nature,
          },
          ...(course.classes
            ? [
                {
                  label: "Classes",
                  value: course.classes,
                },
              ]
            : []),
          ...(course.duration
            ? [
                {
                  label: "Duration",
                  value: course.duration,
                },
              ]
            : []),
          ...(course.trainingMethod
            ? [
                {
                  label: "Training method",
                  value: course.trainingMethod,
                },
              ]
            : []),
        ],
      }))
    );

    return { courseCards };
  },
};
</script>

<style scoped>
.courses-page-bg {
  background:
    radial-gradient(circle at bottom left, rgba(251, 133, 0, 0.08), transparent 28%),
    radial-gradient(circle at top right, rgba(251, 133, 0, 0.05), transparent 22%),
    linear-gradient(to bottom, #001123 0%, #000c19 42%, #001123 100%);
}
</style>
