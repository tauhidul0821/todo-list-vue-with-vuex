<template>
  <div id="app">
    <div id="nav">
      <h3>Todo List</h3>
      <router-link :to="{ name: 'Todo' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'DynamicField' }">DynamicField</router-link>
      <h3 class="bottom"></h3>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bottom{
  margin-bottom: 61px;
}
</style>
