<template>
  <div>
    <h4></h4>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = complete </span>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in allTodos"
        :key="todo.id"
        @dblclick="onSumonClick(todo)"
      >
        {{ todo.title }}

        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
    <button @click="testMutation">MutationCheck</button>
    <button @click="testAction">ActionCheck</button>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Todo",
  methods: {
    ...mapMutations(["testMutation"]),
    ...mapActions(["testAction", "fetchTodos", "updatedTodo", "deleteTodo"]),
    onSumonClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.updatedTodo(updTodo);
    },
    check() {
      console.log("this is action check from component");
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.testAction();
    this.fetchTodos();
    console.log("when load finish then call ");
  },
};

// console.log(allTodos);
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
