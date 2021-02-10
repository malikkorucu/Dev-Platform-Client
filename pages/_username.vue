<template>
  <div>
      <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import userHeader from '../components/user/userHeader'

export default {
    layout:"sideTableLayout",
    components:{
      appUserHeader:userHeader
    }
};
</script>

<style lang="scss" scoped>
</style>