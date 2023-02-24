<template>
<Navbar />
<router-view />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>


<style scoped>

</style>
