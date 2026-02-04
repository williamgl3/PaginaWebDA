import { createRouter, createWebHistory } from 'vue-router'
import Agenda from '/views/Agenda.vue'
import Login from '/views/Login.vue'
import RegistroAlumno from '/views/registroAlumno.vue'
import AdminPanel from '/views/adminPanel.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Agenda },
    { path: '/login', component: Login },
    { path: '/registro', component: RegistroAlumno },
    { path: '/admin', component: AdminPanel },
  ],
})
