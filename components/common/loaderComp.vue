<template>
  <div v-if="loading" class="loading-page">
    <Logo/>
    <p>Yükleniyor ...</p>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0.5);
    z-index:100;
    display:flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:35px;
    flex-direction: column;
  }
</style>