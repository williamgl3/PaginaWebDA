<template>
  <div id="app">
    <header class="header">
      <h1>Agenda Psicologia</h1>

      <nav>
        <router-link to="/">Login</router-link>
        <router-link to="/agenda">Agenda</router-link>
      </nav>
    </header>

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f2f4f8;
}

.header {
  background-color: #1f2937;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
  font-weight: bold;
}

.header a.router-link-active {
  text-decoration: underline;
}

.main {
  padding: 20px;
}
</style>
