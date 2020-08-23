<template>
  <div class="project-show-add-employee border-top">
    <ul class="list-group list-group-flush border-top" v-if="suggestions.bests.length">
      <h6 class="mb-0 bg-white text-success py-3 border-bottom px-3">
        <strong>Indicados</strong>
        (<small>Colaboradores que atendem uma ou mais competências no nível requerido</small>)
      </h6>

      <EmployeeItem v-for="item in suggestions.bests" :key="item.id" v-bind:item="item" />
    </ul>

    <ul class="list-group list-group-flush border-top" v-if="suggestions.others.length">
      <h6 class="mb-0 bg-white text-info py-3 border-bottom px-3">
        <strong>Competêcia mínima</strong>
        (<small>Colaboradores que atendem uma ou mais competências, porém em um nível inferior</small>)
      </h6>

      <EmployeeItem v-for="item in suggestions.others" :key="item.id" v-bind:item="item" />
    </ul>

    <ul class="list-group list-group-flush border-top" v-if="suggestions.all.length">
      <h6 class="mb-0 bg-white text-muted py-3 border-bottom px-3">
        <strong>Outros</strong>
        (<small>Colaboradores que não atendem as competências necessárias</small>)
      </h6>

      <EmployeeItem v-for="item in suggestions.all" :key="item.id" v-bind:item="item" />
    </ul>
  </div>
</template>

<script>
import EmployeeItem from '@/components/EmployeeItem.vue'

export default {
  components: {
    EmployeeItem
  },

  created () {
    this.fetchData();
  },

  computed: {
    suggestions () {
      return this.$store.getters['project/getSuggestions'];
    }
  },

  methods: {
    fetchData () {
      this.$store.dispatch('project/findSuggestions', this.$route.params.id);
    }
  },

  watch: {
    '$route': 'fetchData'
  }
}
</script>
