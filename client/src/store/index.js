import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js';
import employee from './modules/employee.js';
import skill from './modules/skill.js';
import employeeSkill from './modules/employeeSkill.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    employee,
    employeeSkill,
    skill
  }
})
