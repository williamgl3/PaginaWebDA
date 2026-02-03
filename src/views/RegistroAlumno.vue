<template>
  <div>
    <h2>Registro de Alumno</h2>
    <input v-model="alumno.nombre" placeholder="Nombre" />
    <input v-model="alumno.apellidoPaterno" placeholder="Apellido Paterno" />
    <input v-model="alumno.apellidoMaterno" placeholder="Apellido Materno" />
    <input v-model="alumno.numeroControl" placeholder="Número de Control" />
    <input v-model="alumno.carrera" placeholder="Carrera" />
    <input v-model="alumno.correo" placeholder="Correo Electrónico" />
    <button @click="registrarAlumno">Registrar</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alumno: {}
    }
  },
  async methods: {
     async registrar() {
      await fetch("http://localhost:3000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.alumno)
      })
      alert("Alumno registrado exitosamente")

    }
  }
}
</script>
