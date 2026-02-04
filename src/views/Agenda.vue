<template>
  <div>
    <h2>Agenda de citas</h2>
    <input v-model="cita.fecha" type="date" />
    <input v-model="cita.hora" type="time" />
    <button @click="crear">Agendar</button>

    <ul>
      <li v-for="c in citas" :key="c._id">{{ c.fecha }} - {{ c.hora }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AgendaCitas',
  data() {
    return { cita: {}, citas: [] }
  },
  async mounted() {
    const res = await fetch('http://localhost:3000/api/appointments', {
      headers: { Authorization: localStorage.getItem('token') },
    })
    this.citas = await res.json()
  },
  methods: {
    async crear() {
      await fetch('http://localhost:3000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(this.cita),
      })
      alert('Cita agendada exitosamente')
      location.reload()
    },
  },
}
</script>
