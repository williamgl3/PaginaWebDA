<template>
  <div class="agenda">
    <h2>Agenda de citas</h2>

    <form @submit.prevent="agendarCitas" class="form">
      <input :type="date" v-model="nuevaCita.fecha" required />
      <input :type="time" v-model="nuevaCita.hora" required />
      <input type="text" v-model="nuevaCita.paciente" placeholder="Nombre del paciente" required />
      <textarea v-model="nuevaCita.motivo" placeholder="Motivo de la cita"></textarea>

      <button type="submit">Agendar cita</button>
    </form>

    <h3>Citas agendadas</h3>
    <p v-if="citas.length === 0">No hay citas agendadas.</p>

    <ul>
      <li v-for="(cita, index) in citas" :key="index">
        <strong>{{ cita.fecha }} {{ cita.hora }}</strong
        ><br />
        Paciente: {{ cita.paciente }}<br />
        Motivo: {{ cita.motivo || 'No especificado' }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AgendaCitas',
  data() {
    return {
      nuevaCita: {
        fecha: '',
        hora: '',
        paciente: '',
        motivo: '',
      },
      citas: [],
    }
  },
  methods: {
    agendarCitas() {
      this.citas.push({ ...this.nuevaCita })
      this.nuevaCita = {
        fecha: '',
        hora: '',
        paciente: '',
        motivo: '',
      }
    },
  },
}
</script>

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
