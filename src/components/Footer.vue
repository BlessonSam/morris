<template>
  <div
    dark
    class="h-40 text-gray-400"
    style="
      background-color: #001123ad;
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
    "
  >
    <div class="container mx-auto flex flex-center fit">
      <div class="text-center space-y-5">
        <img src="../assets/morris_logo.jpeg" class="w-10 h-10 mx-auto" />
        <div>
          Copyright Morris English Academy &copy;
          {{ new Date().getFullYear() }}. All Rights Reserved
        </div>
        <div class="mx-auto text-xl">
          <span class="space-x-8 text-center">
            <a
              href="https://www.facebook.com/morrisielts/"
              target="_blank"
              class="hover:text-brand"
              ><span class="fab fa-facebook"></span
            ></a>
            <a
              href="https://instagram.com/morris_anglo_indian_academy?igshid=YmMyMTA2M2Y="
              target="_blank"
              class="hover:text-brand"
              ><span class="fab fa-instagram"></span
            ></a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
