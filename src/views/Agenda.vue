<template>
  <div>
    <h2>Agenda de citas</h2>
    <input v-model="cita.fecha" type="date" />
    <input v-model="cita.hora" type="time" />
    <button @click="crear">Agendar</button>

    <ul>
      <li v-for="c in citas" :key="c_id">{{ c.fecha }} {{ c.hora }}</li>
    </ul>
  </div>
</template>
<> export default { data() { return { cita: {}, citas: [] } }, async mounted() { const res = await
fetch("http://localhost:3000/api/appointments", { headers: { Authorization:
localStorage.getItem("token")} }) this.citas = await res.json() },
<style scoped>
.agenda {
  max-width: 600px;
  margin: auto;
}

.form {
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
}

input,
textarea,
button {
  padding: 10px;
}

button {
  background-color: #2563eb;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
