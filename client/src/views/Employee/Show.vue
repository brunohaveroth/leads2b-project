<template>
  <div class="employee-show" v-if="employee">
    <div class="card border-0">
      <div class="card-header d-flex align-items-center">
        <h6 class="mb-0 font-weight-bold">Dados Gerais</h6>

        <div class="ml-auto">
          <router-link :to="{ name: 'EmployeeEdit', params: { id: employee.id }}" class="btn btn-link py-0">
            <font-awesome-icon icon="edit" />
          </router-link>

          <button type="button" class="btn btn-link py-0 text-danger" @click="removeEmployee">
            <font-awesome-icon icon="trash" />
          </button>
        </div>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-4 d-flex align-items-center">
              <img class="avatar-7" src="https://talentrh-prod.s3.amazonaws.com/profile-images/51cd0824-1f14-43c1-9da2-6cc0097a60bc.jpg" alt="User Avatar">

              <div class="ml-3">
                <h6 class="font-weight-bold">{{employee.firstName}} {{employee.lastName}}</h6>
                <h6 class="mb-0">{{employee.email}}</h6>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card border-0 border-top">
      <div class="card-header d-flex align-items-center border-0">
        <h6 class="mb-0 font-weight-bold">Competências</h6>
      </div>

      <ul class="list-group list-group-flush border-top">
        <li class="list-group-item d-flex align-items-center">
          <div class="">
            <h6 class="font-weight-bold">Node.js</h6>
            <div>
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-warning" />
              <font-awesome-icon icon="star" class="text-muted" />
              <font-awesome-icon icon="star" class="text-muted" />
              <font-awesome-icon icon="star" class="text-muted" />
            </div>
          </div>
          <div class="ml-auto">
            <button type="button" class="btn btn-link py-0 text-primary">
              <font-awesome-icon icon="edit" />
            </button>

            <button type="button" class="btn btn-link py-0 text-danger">
              <font-awesome-icon icon="trash" />
            </button>
          </div>
        </li>

        <button class="w-100 btn btn-link">
          <font-awesome-icon icon="plus" class="text-muted" /> Adicionar Competência
        </button>
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

    async removeEmployee() {
      try {
        await this.$store.dispatch('employee/destroy', this.$route.params.id);
        this.$router.push(`/employee`);
      } catch (e) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Falha ao remover colaborador'
        });
      }
    }
  },

  watch: {
    '$route': 'fetchData'
  }
}
</script>
