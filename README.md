
# Todo List Vue with Vuex
### project view 
<img width="742" alt="Screenshot 2021-05-25 at 12 15 56 PM" src="https://user-images.githubusercontent.com/10520882/119448424-24119780-bd53-11eb-95fd-270e52d40a98.png">


## vueX everything in 3 photo 

<img width="877" alt="Screenshot 2021-05-13 at 12 20 40 AM" src="https://user-images.githubusercontent.com/10520882/118024945-15a1a400-b381-11eb-825d-fc774e42d79a.png">
<img width="1091" alt="Screenshot 2021-05-13 at 12 20 31 AM" src="https://user-images.githubusercontent.com/10520882/118024975-1f2b0c00-b381-11eb-9675-1e3d0e9b399e.png">
<img width="1005" alt="Screenshot 2021-05-13 at 12 20 21 AM" src="https://user-images.githubusercontent.com/10520882/118024993-26521a00-b381-11eb-9e2b-741c1f6bc80b.png">
<img width="1138" alt="Screenshot 2021-05-17 at 12 27 17 PM" src="https://user-images.githubusercontent.com/10520882/118441650-4d0aaa80-b70b-11eb-9edc-7731fc2e6b7d.png">


### another way to call getters & action , without mapAction,mapGetter,mapMutation

![Screenshot 2021-05-25 at 2 28 34 PM](https://user-images.githubusercontent.com/10520882/119465747-c8043e80-bd65-11eb-9d54-d2c9f9e512fa.png)
![Screenshot 2021-05-25 at 2 29 03 PM](https://user-images.githubusercontent.com/10520882/119465769-ccc8f280-bd65-11eb-87d2-66d3e7a87c18.png)



```js
      this.$store.dispatch('updatedTodo',updTodo)
      
      deleteTodo(id){
        this.$store.dispatch('deleteTodo',id)
      }
    
     getAllTodos(){
        return this.$store.getters['allTodos']
     }
    
    this.$store.dispatch('fetchTodos');
```
#### here is full file for call vuex without map function
```js
<template>
  <div>
    <h4></h4>
    <AddTodo />
    <FilterTodos />

    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = complete </span>
    </div>
    <div class="todos">
      <div
        class="todo"
        v-for="todo in getAllTodos"
        :key="todo.id"
        @dblclick="onDblClick(todo)"
        :class="{'is-complete': todo.completed}"
      >
        {{ todo.title }}

        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from "./AddTodo";
import FilterTodos from "./FilterTodos";
export default {
  name: "Todo",
  components:{
    AddTodo,
    FilterTodos

  },
  methods: {
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };

      this.$store.dispatch('updatedTodo',updTodo)
    },
    check() {
      console.log("this is action check from component");
    },
    deleteTodo(id){
      this.$store.dispatch('deleteTodo',id)
    }

  },
  computed: {
    getAllTodos(){
      return this.$store.getters['allTodos']
    }

  },//mapGetters(["allTodos"]),//this.$store.getters['allTodos'],//
  created() {
    // this.testAction();
    // this.fetchTodos();
    this.$store.dispatch('fetchTodos');
    console.log("when load finish then call ");
  },
};
</script>
```


## vue-router
<img width="953" alt="Screenshot 2021-05-18 at 10 57 32 AM" src="https://user-images.githubusercontent.com/10520882/118592736-42fab180-b7c8-11eb-807a-8469a53eb0a8.png">
<img width="1016" alt="Screenshot 2021-05-18 at 10 58 57 AM" src="https://user-images.githubusercontent.com/10520882/118592760-4f7f0a00-b7c8-11eb-91d2-7a7d96133971.png">





