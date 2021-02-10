<template>
<span class="badge-c px-2 py-1">
    <span class="text align-items-center">
        {{title}}
    </span>
</span>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>
.badge-c {
    font-size: 15px;
    font-weight: bold;
    background: var(--secondary-blue);
    color: var(--base-grey)
}
</style>
