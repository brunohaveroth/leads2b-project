<template>
  <div class="project-show-add-employee border-top">
    <ul class="list-group list-group-flush border-top">
      <h6 class="mb-0 bg-white font-weight-bold text-success py-3 border-bottom px-3">Melhores</h6>

      <EmployeeItem v-for="item in suggestions.bests" :key="item.id" v-bind:item="item" />
    </ul>

    <ul class="list-group list-group-flush border-top">
      <h6 class="mb-0 bg-white font-weight-bold text-info py-3 border-bottom px-3">Competêcia mínima</h6>

      <EmployeeItem v-for="item in suggestions.others" :key="item.id" v-bind:item="item" />
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
