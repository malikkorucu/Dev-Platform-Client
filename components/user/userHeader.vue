<template>
  <div class="user-navbar mt-3 border">
    <ul class="p-0 m-0 d-flex">
      <li
      :class="{'custom-active' : currentMenuItem == item}"
        @click="currentMenuItem = item"
        class="px-3 py-2 align-self-end text-center"
        v-for="item in menuData"
        :key="item"
      >
        <span class="text-center">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: ["Sorularım", "Soru Ekle", "item-1", "item-4", "item-5"],
      currentMenuItem:'Sorularım'
    };
  },
};
</script>

<style scoped>

ul {
  list-style-type: none;
}
li {
  flex: 1;
  border-right: 1px solid var(--border-grey);
  cursor:pointer

}
.custom-active{
  border-bottom:2px solid var(--main-orange);
}
</style>