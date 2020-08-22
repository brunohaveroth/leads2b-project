<template>
  <div class="project-show-employee">
    <ul class="list-group list-group-flush">
      <li class="list-group-item d-flex align-items-center" v-for="item in participants" :key="item.id">
        <Avatar class="avatar-5" :item="item.Employee"/>

        <div class="ml-3">
          <h6 class="font-weight-bold">{{item.Employee.firstName}} {{item.Employee.lastName}}</h6>
          <h6 class="mb-0">{{item.Employee.email || "Email não informado"}}</h6>
        </div>
      </li>
    </ul>
    <!-- <ul class="list-group list-group-flush border-top">
      <SkillItem v-for="item in skills" :key="item.id" v-bind:item="item" modelName="employeeSkill" />
      <SkillAssociationForm v-if="isCreateNew" :toggleForm="toggleForm" modelName="employeeSkill" parentName="employee" />

      <button class="w-100 btn btn-link" @click="toggleForm" v-if="!isCreateNew">
        <font-awesome-icon icon="plus" class="text-muted" /> Adicionar Competência
      </button>
    </ul> -->
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Avatar
  },
  
  created () {
    this.fetchData();
  },

  data() {
    return {
      isCreateNew: null
    };
  },

  computed: {
    participants () {
      return this.$store.getters['project/getParticipants'];
    }
  },

  methods: {
    toggleForm () {
      this.isCreateNew = !this.isCreateNew;
    },

    fetchData () {
      this.$store.dispatch('project/findParticipants', this.$route.params.id);
    }
  },

  watch: {
    '$route': 'fetchData'
  }
}
</script>
