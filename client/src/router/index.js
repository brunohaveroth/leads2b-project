import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import EmployeeIndex from '../views/Employee/Index.vue'
import EmployeeShow from '../views/Employee/Show.vue'
import EmployeeEdit from '../views/Employee/Edit.vue'
import EmployeeCreate from '../views/Employee/Create.vue'
import EmployeeShowSkill from '../views/Employee/Show/Skill.vue'
import ProjectIndex from '../views/Project/Index.vue'
import ProjectShow from '../views/Project/Show.vue'
import ProjectShowSkill from '../views/Project/Show/Skill.vue'

Vue.use(VueRouter)

const authenticatedRoute = (to, from, next)=> {
  return store.getters.isAuthenticated ? next() : next('/signin');
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authenticatedRoute
  },
  {
    path: '/employee',
    name: 'Employee',
    component: EmployeeIndex,
    beforeEnter: authenticatedRoute,
    children: [
      {
        path: 'show/:id',
        name: 'EmployeeShow',
        component: EmployeeShow,
        children: [
          {
            path: '',
            name: 'EmployeeShowSkill',
            component: EmployeeShowSkill
          }
        ]
      },
      {
        path: 'create',
        name: 'EmployeeCreate',
        component: EmployeeCreate
      },
      {
        path: 'edit/:id',
        name: 'EmployeeEdit',
        component: EmployeeEdit
      }
    ]
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectIndex,
    beforeEnter: authenticatedRoute,
    children: [
      {
        path: 'show/:id',
        name: 'ProjectShow',
        component: ProjectShow,
        children: [
          {
            path: '',
            name: 'ProjectShowSkill',
            component: ProjectShowSkill
          }
        ]
      }
    ]
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
