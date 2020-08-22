<template>
  <div class="project">
    <div class="card shadow-sm">
      <div class="card-header d-flex align-items-center">
        <h6 class="font-weight-bold text-primary mb-0">Projetos</h6>

        <div class="ml-auto d-flex align-items-center">
          <input type="text" class="form-control form-control-sm" placeholder="Buscar projetos" value="">
          <router-link to="/employee/create" class="btn btn-primary btn-sm flex-shrink-0 ml-3">Adicionar Colaborador</router-link>
        </div>
      </div>

      <div class="ui-crud card-body p-0">
        <div class="ui-crud__body row">
          <div class="ui-crud__list col-md-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item py-3" v-for="item in projects" :key="item.id">
                <router-link :to="{ name: 'ProjectShowSkill', params: { id: item.id }}">
                  <h6 class="font-weight-bold mb-0">{{item.title}}</h6>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="ui-crud__view col-md-8">
            <div class="ui-crud__scroll">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  created () {
    this.$store.dispatch('project/find');
  },

  computed: {
    projects() {
      return this.$store.getters['project/getAll'];
    }
  }
}
</script>
