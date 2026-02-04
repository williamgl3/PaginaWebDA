<template>
  <div>
    <h2>Panel Psicologo</h2>
    <ul>
      <li v-for="a in alumnos" :key="a._id">{{ a.nombre }} - {{ a.numeroControl }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { alumnos: [] }
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/api/admin/alumnos', {
      headers: { Authorization: localStorage.getItem('token') },
    })
    this.alumnos = await res.json()
  },
}
</script>
