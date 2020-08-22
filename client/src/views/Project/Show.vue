<template>
  <div class="project-show" v-if="project">
    <div class="card border-0">
      <div class="card-header d-flex align-items-center">
        <h6 class="mb-0 font-weight-bold">Dados Gerais</h6>

        <div class="ml-auto">
          <router-link :to="{ name: 'EmployeeEdit', params: { id: project.id }}" class="btn btn-link py-0">
            <font-awesome-icon icon="edit" />
          </router-link>

          <button type="button" class="btn btn-link py-0 text-danger" @click="removeEmployee">
            <font-awesome-icon icon="trash" />
          </button>
        </div>
      </div>

      <ul class="list-group list-group-flush py-3">
        <li class="list-group-item">
          <h6 class="font-weight-bold">{{project.title}}</h6>
        </li>
      </ul>
    </div>

    <div class="card border-0 border-top">
      <div class="card-header d-flex align-items-center border-0 py-3">
        <router-link class="mb-0 font-weight-bold mr-4" :to="{ name: 'ProjectShowSkill', params: { id: project.id }}">
          Competências necessárias
        </router-link>

        <router-link class="mb-0 font-weight-bold mx-4" :to="{ name: 'ProjectShowEmployee', params: { id: project.id }}">
          Participantes
        </router-link>
      </div>

      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.fetchData();
  },

  computed: {
    project() {
      return this.$store.getters['project/getById'](this.$route.params.id);
    }
  },

  methods: {
    fetchData() {
      this.$store.dispatch('project/findOne', this.$route.params.id);
    },

    async removeEmployee() {
      try {
        await this.$store.dispatch('project/destroy', this.$route.params.id);
        this.$router.push(`/project`);
      } catch (e) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Falha ao remover projeto'
        });
      }
    }
  },

  watch: {
    '$route': 'fetchData'
  }
}
</script>
