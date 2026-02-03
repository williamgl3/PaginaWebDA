import { createRouter, createWebHistory } from 'vue-router'
import Agenda from '/views/agenda.vue'
import LoginAlumno from '/views/loginAlumno.vue'
import RegistroAlumno from '/views/registroAlumno.vue'
import AdminPanel from '/views/adminPanel.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Agenda },
    { path: '/login', component: LoginAlumno },
    { path: '/registro', component: RegistroAlumno },
    { path: '/admin', component: AdminPanel },
  ],
})
