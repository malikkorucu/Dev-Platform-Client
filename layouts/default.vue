<template>
  <div>
    <transition
      enter-active-class="animate__bounceInLeft"
      leave-active-class="animate__bounceOutRight"
    >
      <Nuxt class="animate__animated router" />
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("auth/initAuth");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Source+Sans+Pro:wght@200;300;400&display=swap");

* {
  font-family: "Baloo Tammudu 2", cursive;
  font-family: "Source Sans Pro", sans-serif;
}
html {
  scroll-behavior: smooth;
}
.animate__slideInLeft,
.animate__slideOutRight {
  animation-duration: 0.2s;
}
:root {
  --main-bg-color: #fafcff;
  --main-blue: #069ede;
  --main-orange: #f08b31;
  --dark-blue: #528ca4;
  --middle-blue: #e2edfc;
  --secondary-blue: #cdecf8;
  --light-blue: #f4f9ff;
  --lighter-blue: #addfe5;
  --light-blue-secondary: #d1deef;
  --success-bg: #dbf4e3;
  --success-color: #076224;
  --success-color-secondary: #4bc972;
  --base-grey: #464646;
  --secondary-grey: #d6d6d6;
  --light-grey: #fbfbfb;
  --border-grey: #cfcfcf;
  --base-text-grey: #818181;
}

.custom-container {
  width: 80%;
  margin: 0 auto;
}
@media (max-width: 1150px) {
  .custom-container {
    width: 98%;
  }
}

@media (max-width: 720px) {
  html ,body{
    overflow-x: hidden;
  }
}

.slide-enter-active {
  animation: slide-in 0.5s ease forwards;
}

.slide-leave-active {
  animation: slide-out 0.5s ease forwards;
}

.slide-move {
  transition: transform 0.5s;
}
</style>
