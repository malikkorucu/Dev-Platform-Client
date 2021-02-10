<template>
  <div>
    <Header></Header>
    <div class="custom-container py-3">
      <div class="banner py-2 px-4">Öne Çıkanlar</div>
      <div class="content d-flex">
        <div class="main">
          <transition
            enter-active-class="animate__bounceInLeft"
            leave-active-class="animate__bounceOutRight"
            mode="in-out"
          >
            <Nuxt class="animate__animated router" />
          </transition>
        </div>
        <div class="right-side my-3 pl-4">
          <app-side-table></app-side-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/common/header";
import sideTable from "../components/common/sideTable";

export default {
  components: {
    Header,
    appSideTable: sideTable,
  },
  mounted() {
    this.$store.dispatch("auth/initAuth");
  },
};
</script>

<style scoped>
.banner {
  background: var(--middle-blue);
  color: var(--dark-blue);
  font-size: 30px;
  font-weight: bold;
  border-radius: 5px;
}

.main {
  width: 75%;
}

.right-side {
  width: 25%;
}

@media (max-width: 960px) {
  .right-side {
    display: none;
  }

  .main {
    width: 100%;
  }
}


@media (max-width: 720px) {
  html {
    overflow-x: hidden;
  }
}

</style>