<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  },
  created() {
    this.$store.dispatch('restoreSession');
  }
}
</script>

<style lang="scss">
@import './assets/styles/template';
</style>
