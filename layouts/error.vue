<template>
    <div class="error-page">
        <h1>Aradığınız sayfa bulunamadı  :/</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .error-page{
        background: url('../assets/error.png') center center no-repeat;
        min-height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
    }
    h1{
        font-weight: bold;
        position: absolute;
        bottom:18%
    }
</style>