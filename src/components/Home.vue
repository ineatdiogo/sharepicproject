<template>
    <div id="content">
        <Discovery />
        <Navigation />
        <DiscoveryBody />
    </div>
</template>

<script>

import Discovery from './Discovery.vue'
import Navigation from './TabNavigation.vue'
import DiscoveryBody from './DiscoveryBody.vue'

export default {
    name: 'Home',
    components: {
        Discovery,
        Navigation,
        DiscoveryBody
    }
}
</script>

<style scoped>

</style>