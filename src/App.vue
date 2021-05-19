<template>
  <div id="app">
    <div id="nav">
      <h3>Todo List</h3>
      <router-link :to="{ name: 'Todo' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
// import Todo from "./components/Todo.vue";
// import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    // Todo,
    // AddTodo,
  },
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
</style>
