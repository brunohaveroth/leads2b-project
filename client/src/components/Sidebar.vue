<template>
  <nav class="sidebar border-right" v-if="isAuthenticated">
    <div class="container-fluid">
      <ul class="list-unstyled">
        <li class="p-3 text-left">
          <router-link to="/">
            Início
          </router-link>
        </li>

        <li class="p-3 text-left">
          <router-link to="/employee">
            Empregados
          </router-link>
        </li>

        <li class="p-3 text-left">
          <router-link to="/project">
            Projetos
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
}
</script>
