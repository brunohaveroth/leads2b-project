<template>
  <div class="employee-edit" v-if="employee">
    <div class="card border-0">
      <div class="card-header">
        <h6 class="mb-0 font-weight-bold">Editar Colaborador</h6>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-6 d-flex align-items-center">
              <img class="avatar-7 flex-shrink-0" src="https://talentrh-prod.s3.amazonaws.com/profile-images/51cd0824-1f14-43c1-9da2-6cc0097a60bc.jpg" alt="User Avatar">

              <div class="ml-3">
                <div class="form-group mb-3">
                  <label>Nome</label>
                  <input class="form-control" type="text" placeholder="Nome" v-model="employee.firstName">
                </div>

                <div class="form-group">
                  <label>Sobrenome</label>
                  <input class="form-control" type="text" placeholder="Sobrenome" v-model="employee.lastName">
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="list-group-item text-right">
          <router-link :to="{ name: 'EmployeeShow', params: { id: employee.id }}" class="btn btn-outline-primary ml-3">
            Voltar
          </router-link>

          <button type="button" class="btn btn-primary ml-3" @click="save">Salvar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.fetchData();
  },

  computed: {
    employee() {
      return this.$store.getters['employee/getById'](this.$route.params.id);
    }
  },

  methods: {
    fetchData() {
      this.$store.dispatch('employee/findOne', this.$route.params.id);
    },

    save() {
      this.$store.dispatch('employee/update', this.employee);
    }
  },

  watch: {
    '$route': 'fetchData'
  }
}
</script>
