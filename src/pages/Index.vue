<template>
  <q-page class="py-10 text-gray-900">
    <q-scroll-observer axis="verical" @scroll="onScroll" />

    <q-toolbar
      dark
      class="sticky top-0"
      :class="{ 'bg-[#001123ad] z-500': stickyNav }"
      style="backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px)"
    >
      <div class="container mx-auto flex items-end text-white h-24 py-5">
        <q-toolbar-title
          class="my-font font-semibold text-4xl flex items-end text-bigText"
        >
          <a href="/home#hero">MORRIS<span class="text-brand">.</span></a>
        </q-toolbar-title>

        <div
          v-if="$q.screen.gt.sm"
          class="space-x-5 flex items-start text-base font-semibold text-gray-600"
        >
          <a
            v-for="link in navLinks"
            :key="link.label"
            :href="link.href"
            :class="{ active_link: $route.hash == link.hash }"
          >
            <span>{{ link.label }}</span>
          </a>
        </div>

        <div v-else>
          <q-btn
            @click="rightDrawerOpen = !rightDrawerOpen"
            flat
            rounded
            icon="menu"
            dense
          >
          </q-btn>
        </div>
      </div>
    </q-toolbar>

    <q-drawer
      v-model="rightDrawerOpen"
      dark
      overlay
      side="right"
      bordered
      class="h-screen"
    >
      <!-- drawer content -->

      <div class="flex flex-center p-10">
        <q-icon
          name="close"
          size="sm"
          class="absolute-top-right m-5 cursor-pointer"
          @click="rightDrawerOpen = false"
        />
        <div class="space-y-8 text-lg absolute-center">
          <div
            v-for="link in navLinks"
            :key="link.label"
            class="flex items-center justify-center"
          >
            <a
              :href="link.href"
              :class="{ active_link: $route.hash == link.hash }"
            >
              <span>{{ link.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </q-drawer>

    <section
      id="hero"
      class="flex flex-center text-center p-10 pb-28 container"
      style="margin-top: -136px; padding-top: 250px"
    >
      <div style="max-width: 700px">
        <div class="italic mb-8 text-brand">Masters of English</div>
        <div class="text-6xl font-thin text-bigText">
          <span>MORRIS</span> ANGLO-INDIAN ENGLISH ACADEMY
        </div>
        <div class="font-thin text-sectionSubTitle mt-12">
          POWER <i>&nbsp; YOUR &nbsp;</i> ENGLISH
        </div>
        <div class="flex flex-center">
          <div class="space-y-5 mt-40 md:mt-30 lg:mt-20">
            <div class="text-xs italic text-gray-500">Explore more</div>
            <q-icon
              class="animate-bounce"
              name="south"
              color="brand"
              size="xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- specialised programmes -->
    <section id="courses" class="tobottomtransparent-bg pt-28">
      <div class="py-10 pt-20 container space-y-10">
        <div class="space-y-10 mx-auto" style="max-width: 800px">
          <div class="text-4xl text-center text-bigText">
            Our English Learning Products
          </div>
          <div class="text-center text-body">
            Our specialised programmes in ENGLISH ensure that the student has
            full confidence in facing any situation where knowledge of the
            English language is paramount. <br /><br />

            <span class="font-bold">Morris Anglo–Indian English Academy</span>
            is proud to announce that it has a bouquet of Programmes and Modules
            that caters to every student’s English language requirement, in all
            areas conceivable.<br />

            <br />Our professional Anglo-Indian Trainers create an environment
            that helps the student acquire grammar ,vocabulary ,reading ,writing
            and speaking skills in ENGLISH in whichever specific area the
            student chooses
          </div>

          <div class="flex flex-center">
            <router-link to="/courses">
              <button
                class="rounded-full bg-brand py-3 px-5 text-dark font-semibold"
                :class="{ 'w-full': $q.screen.lt.sm }"
              >
                View Courses
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!--About Us -->
    <section id="about_us">
      <AboutUs />
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="pb-10 pt-28 totoptransparent-bg">
      <div class="space-y-10 container">
        <div class="text-4xl text-center text-sectionTitle">Testimonials</div>
        <div class="flex flex-wrap justify-center">
          <div
            v-for="(testimonial, i) in testimonials"
            :key="`testimonial${i}`"
            class="rounded-xl shadow-3 m-3 md:m-5 p-10 space-y-5 bg-dark"
            style="
              max-width: 300px;
              min-width: 100px;
              max-height: 600px;
              min-height: 200px;
            "
          >
            <div class="text-sm text-gray-500 text-ellipsis">
              <q-icon name="format_quote" color="brand" size="xl" />
              <div class="font-bold text-sectionSubTitle text-sm mt-2">
                {{ testimonial.title }}
              </div>
              <div class="text-justify mt-1">{{ testimonial.content }}</div>
              <!-- <q-icon name="format_quote" color="brand" size="xl" /> -->
            </div>

            <div class="italic space-y-1 text-right">
              <div class="font-bold text-sectionSubTitle">
                {{ testimonial.by_name }}
              </div>
              <div class="text-xs text-sectionSubTitle">
                {{ testimonial.by_place }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Articles -->
    <section id="articles" class="pb-10 pt-28 mt-20 container space-y-10">
      <div class="flex flex-wrap md:flex-nowrap w-full space-y-10 md:space-y-0">
        <div class="text-4xl flex flex-center text-sectionTitle w-full">
          <span class="cursor-pointer" @click="$router.push({ path: '/blog' })"
            >Articles</span
          >
        </div>
        <div class="w-full space-y-10">
          <div class="text-body text-center md:text-left w-full">
            It is the love for English that creates the bond between everyone
            who was/is a part of Morris English Academy. We find ourselves
            fortunate to have talented language experts and curious and
            consistent learners who creates amazing articles. We feel immense
            proud to present those contributions together as the proud pillars
            of Morris English Academy. Check out the curated list of articles by
            teachers and students of Morris English Academy.
          </div>
          <div :class="{ 'flex flex-center': $q.screen.lt.md }">
            <router-link to="/blog">
              <button
                class="rounded-full bg-brand py-3 px-5 text-dark font-semibold"
                :class="{ 'w-full': $q.screen.lt.sm }"
              >
                View Articles
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!--Videos -->
    <section id="videos" class="pb-10 pt-28 mt-20 container space-y-10">
      <div class="flex flex-wrap-reverse md:flex-nowrap w-full">
        <div class="w-full space-y-10 mt-10 md:mt-0">
          <div class="text-body text-center md:text-right w-full">
            It is the love for English that creates the bond between everyone
            who was/is a part of Morris English Academy. We find ourselves
            fortunate to have talented language experts and curious and
            consistent learners who creates amazing articles. We feel immense
            proud to present those contributions together as the proud pillars
            of Morris English Academy. Check out the curated list of videos by
            the language experts in Morris English Academy.
          </div>
          <div
            :class="$q.screen.lt.md ? 'flex flex-center' : 'flex justify-end'"
          >
            <router-link to="/videos">
              <button
                class="rounded-full bg-brand py-3 px-5 text-dark font-semibold"
                :class="{ 'w-full': $q.screen.lt.sm }"
              >
                View Videos
              </button>
            </router-link>
          </div>
        </div>
        <div class="text-4xl flex flex-center text-sectionTitle w-full">
          <span
            class="cursor-pointer"
            @click="$router.push({ path: '/videos' })"
            >Videos</span
          >
        </div>
      </div>
    </section>

    <!--Contact Us -->
    <section id="contact_us">
      <ContactUs class="mt-20" />
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { api } from "boot/axios";
import { ref } from "vue";
import { useQuasar } from "quasar";

import ContactUs from "../components/Contact.vue";
import AboutUs from "../components/About_us.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    ContactUs,
    AboutUs,
  },

  setup() {
    const $q = useQuasar();
    const testimonials = ref(null);

    function loadData() {
      api
        .get("/testimonials/")

        .then((response) => {
          testimonials.value = response.data;
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

    return { testimonials, loadData };
  },

  data() {
    return {
      scrollYPosition: 100,
      elHeroTop: 0,
      elCoursesTop: 0,
      elTestimonialsTop: 0,
      elAboutUsTop: 0,
      elArticlesTop: 0,
      elVideosTop: 0,
      elContactUsTop: 0,
      rightDrawerOpen: false,
      navLinks: [
        {
          hash: "#hero",
          label: "Home",
          href: "home#hero",
        },
        {
          hash: "#courses",
          label: "Courses",
          href: "home#courses",
        },
        {
          hash: "#about_us",
          label: "About Us",
          href: "home#about_us",
        },
        {
          hash: "#testimonials",
          label: "Testimonials",
          href: "home#testimonials",
        },
        {
          hash: "#articles",
          label: "Articles",
          href: "home#articles",
        },
        {
          hash: "#videos",
          label: "Videos",
          href: "home#videos",
        },
        {
          hash: "#contact_us",
          label: "Contact Us",
          href: "home#contact_us",
        },
      ],
    };
  },

  computed: {
    stickyNav() {
      return this.scrollYPosition >= 100;
    },
  },

  mounted() {
    this.loadData();
    this.elHeroTop = document.getElementById("hero").offsetTop;
    this.elCoursesTop = document.getElementById("courses").offsetTop;
    this.elTestimonialsTop = document.getElementById("testimonials").offsetTop;
    this.elAboutUsTop = document.getElementById("about_us").offsetTop;
    this.elArticlesTop = document.getElementById("articles").offsetTop;
    this.elVideosTop = document.getElementById("videos").offsetTop;
    this.elContactUsTop = document.getElementById("contact_us").offsetTop;
  },

  methods: {
    goToProduct(productId) {
      this.$router.push({
        path: `/products/${productId}`,
      });
    },

    selectHashValue(verticalScrollPosition) {
      if (verticalScrollPosition + 200 < this.elCoursesTop) return "#hero";
      if (
        verticalScrollPosition + 200 >= this.elCoursesTop &&
        verticalScrollPosition + 200 < this.elAboutUsTop
      )
        return "#courses";
      if (
        verticalScrollPosition + 200 >= this.elAboutUsTop &&
        verticalScrollPosition + 200 < this.elTestimonialsTop
      )
        return "#about_us";
      if (
        verticalScrollPosition + 200 >= this.elTestimonialsTop &&
        verticalScrollPosition + 200 < this.elArticlesTop
      )
        return "#testimonials";
      if (
        verticalScrollPosition + 200 >= this.elArticlesTop &&
        verticalScrollPosition + 200 < this.elVideosTop
      )
        return "#articles";
      if (
        verticalScrollPosition + 200 >= this.elVideosTop &&
        verticalScrollPosition + 200 < this.elContactUsTop
      )
        return "#videos";
      if (
        verticalScrollPosition &&
        verticalScrollPosition + 200 >= this.elContactUsTop
      )
        return "#contact_us";
      return "#hero";
    },

    onScroll(scrollDetails) {
      this.scrollYPosition = scrollDetails?.position?.top ?? 100;
      let hashValue = this.selectHashValue(this.scrollYPosition);
      this.$route.hash = hashValue;
      let historyObj = {
        Title: document.title,
        Url: window.location.href.split("#")[0] + hashValue,
      };
      history.pushState(historyObj, historyObj.Title, historyObj.Url);
    },
  },
});
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

.tobottomtransparent-bg {
  background-image: linear-gradient(to bottom, #000c19, rgba(245, 245, 248, 0));
}
.totoptransparent-bg {
  background-image: linear-gradient(to bottom, rgba(245, 245, 248, 0), #000c19);
}
.active_link {
  @apply border-b-2 border-brand text-gray-400 pb-1;
}
</style>
