<template>
  <div
    ref="btn"
    @mouseleave="hideOverview"
    @mouseenter="showOverview"
    class="button d-flex align-items-center justify-content-center"
    :class="type"
  >
    <i v-if="icon" :class="icon" style="font-size: 1.1rem" class="p-2"></i
    ><span v-if="title" class="d-inline-flex" :class="{ 'px-2': icon }">{{
      title
    }}</span>
    <span v-if="divider">| 3</span>

    <transition
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <span
        v-if="overviewShow && overview"
        class="overview animate__animated"
        >{{ overview }}</span
      >
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overviewShow: false,
    };
  },
  methods: {
    showOverview() {
      this.overviewShow = true;
    },
    hideOverview() {
      this.overviewShow = false;
    },
  },
  props: {
    title: {
      required: false,
    },
    icon: {
      required: false,
    },
    type: {
      required: true,
    },
    divider: {
      required: false,
    },
    overview: {
      required: false,
    },
    block: {
      required: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.animate__animated {
  animation-duration: 0.5s;
}

.button {
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  position: relative;
  transition: 0.3s;
}

.block {
  width: 100% !important;
}

.overview {
  color: black;
  position: absolute;
  top: -10px;
  left: 0;
  min-width: 20px;
  display: flex;
  transform: translateY(-100%);
  background: var(--light-blue);
  padding: 5px;
  border-radius: 10px;
}

.primary {
  color: var(--main-bg-color);
  background: var(--main-blue);
  text-align: center !important;
}

.primary:hover {
  background: #0b7fb1;
}
.secondary{
  background:rgb(179, 169, 169);
  color:white;
}
.secondary-ghost {
  color: var(--border-grey);
}
.secondary-ghost:hover {
  color: var(--light-grey);
}

.ghost {
  background: var(--base-bg-color);
  color: var(--base-grey);
  border: 1px solid var(--border-grey);
}

.ghost:hover {
  background: rgb(240, 240, 240);
}

.big {
  width: 10rem;
  padding: 5px 7px;
  font-size: 22px;
}

.small {
  font-size: 20px;
}

.medium {
  padding: 3px 5px;
  font-size: 18px;
  font-weight: bold;
}
</style>
