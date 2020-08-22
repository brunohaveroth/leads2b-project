<template>
  <div class="skill-association-form">
    <li class="list-group-item py-3 border-0 border-bottom">
      <div class="form-group">
        <label class="font-weight-bold">Selecionar Habilidade</label>
        <v-select label="title" v-model="skill" :options="skills"></v-select>
      </div>

      <div class="form-group mt-3">
        <label class="font-weight-bold">Selecionar o nível da habilidade</label>

        <div class="d-flex mt-2">
          <div class="mx-1 text-center" v-for="star in stars" :key="star" @click="updateStars(star)">
            <font-awesome-icon class="skill-star" icon="star" size="lg" v-bind:class="star <= currentStars ? 'text-warning' : 'text-muted'" />
            <h6 class="small mt-1 mb-0 font-weight-bold">{{star}}</h6>
          </div>
        </div>
      </div>

      <div class="mt-4 text-right">
        <button type="button" class="btn btn-outline-primary mr-3" @click="toggleForm">
          <font-awesome-icon icon="times" /> Cancelar
        </button>

        <button type="button" class="btn btn-primary" @click="save">
          <font-awesome-icon icon="save" /> Salvar
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'SkillAssociationForm',

  created () {
    this.$store.dispatch('skill/find');
  },

  data () {
    return {
      skill: null,
      currentStars: 1,
      stars: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      options: ['Nodejs', 'Java', 'Scrum']
    }
  },

  props: {
    toggleForm: Function
  },

  computed: {
    skills() {
      return this.$store.getters['skill/getAll'];
    }
  },

  methods: {
    updateStars(star) {
      this.currentStars = star;
    },

    async save() {
      try {
        const data = {
          stars: this.currentStars,
          employee: this.$route.params.id,
          skill: this.skill.id
        };

        await this.$store.dispatch('employeeSkill/create', data);
        this.onSave();
      } catch (e) {
        return this.$swal.fire({
          icon: 'error',
          title: 'Falha ao cadastrar skill para o colaborador'
        });
      }
    }
  }
}
</script>
