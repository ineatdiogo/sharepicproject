<template>
    <div class="overlay"></div>
</template>

<script>
export default {
    name: "Overlay",
}
</script>

<style scoped>
/*
    Overlay Style
*/
.overlay {
    position: fixed;
    display: none;
    z-index: 9998;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
}
</style>