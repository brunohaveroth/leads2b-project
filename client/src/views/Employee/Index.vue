<template>
  <div class="employee">
    <div class="card shadow-sm">
      <div class="card-header d-flex align-items-center">
        <h6 class="font-weight-bold text-primary mb-0">Colaboradores</h6>

        <div class="ml-auto d-flex align-items-center">
          <input type="text" class="form-control form-control-sm" placeholder="Buscar colaboradores" value="">
          <router-link to="/employee/create" class="btn btn-primary btn-sm flex-shrink-0 ml-3">Adicionar Colaborador</router-link>
        </div>
      </div>

      <div class="ui-crud card-body p-0">
        <div class="ui-crud__body row">
          <div class="ui-crud__list col-md-4">
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="item in employees" :key="item.id">
                <router-link :to="{ name: 'EmployeeShow', params: { id: item.id }}" class="d-flex align-items-center">
                  <img class="avatar-5" src="https://talentrh-prod.s3.amazonaws.com/profile-images/51cd0824-1f14-43c1-9da2-6cc0097a60bc.jpg" alt="User Avatar">
                  <div class="ml-3">
                    <h6 class="font-weight-bold">{{item.firstName}} {{item.lastName}}</h6>
                    <h6 class="mb-0">{{item.email}}</h6>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <div class="ui-crud__view col-md-8">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  created () {
    this.$store.dispatch('employee/find');
  },

  computed: {
    employees() {
      return this.$store.getters['employee/getAll'];
    }
  }
}
</script>
