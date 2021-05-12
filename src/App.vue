<template>
  <div id="app">
    <AddTodo />
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Todo,
    AddTodo,
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
