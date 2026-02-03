<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <input v-model="correo" placeholder="Correo Electrónico" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Iniciar Sesión</button>
  </div>
</template>

<script>
export default {
  data() {
    return { correo: "", password: "" }
  },
  async methods: {
    async login() {
        const res = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.$data)
        })
        const data = await res.json()
       localStorage.setItem("token", data.token)
       this.$router.push(data.rol === "admin" ? "/admin" : "/agenda")
      }
    }
  }
</script>
