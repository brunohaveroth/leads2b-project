<template>
  <div class="employee-edit">
    <div class="card border-0">
      <div class="card-header">
        <h6 class="mb-0 font-weight-bold">Criar Colaborador</h6>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-6 d-flex align-items-center">
              <Avatar class="avatar-7 flex-shrink-0" />

              <div class="ml-3">
                <div class="form-group mb-3">
                  <label>Nome</label>
                  <input class="form-control" type="text" placeholder="Nome" v-model="firstName">
                </div>

                <div class="form-group mb-3">
                  <label>Sobrenome</label>
                  <input class="form-control" type="text" placeholder="Sobrenome" v-model="lastName">
                </div>

                <div class="form-group">
                  <label>Email</label>
                  <input class="form-control" type="email" placeholder="Email" v-model="email">
                </div>
              </div>
            </div>
          </div>
        </li>

        <li class="list-group-item text-right">
          <router-link to="/employee" class="btn btn-outline-primary ml-3">
            Voltar
          </router-link>

          <button type="button" class="btn btn-primary ml-3" @click="save">Salvar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Avatar
  },

  data() {
    return {
      email: null,
      firstName: null,
      lastName: null
    }
  },

  methods: {
    async save () {
      try {
        let { data } = await this.$store.dispatch('employee/create', this.$data);
        this.$router.push(`/employee/show/${data.id}`);
      } catch (e) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Falha ao criar colaborador'
        });
      }
    }
  }
}
</script>
