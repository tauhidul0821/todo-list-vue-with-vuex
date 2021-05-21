import axios from "axios";
const state = {
    todos: []
}
const getters = {
    allTodos: (state) => (state.todos)
}
const actions = {

    testAction() {
        console.log('this is vuex');
    },

    deleteTodo: async ({ commit }, id) => {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        console.log('vuex: actions deleteTodo');
        commit('removeTodo', id)
    },

    filterTodos: async ({ commit }, e) => {
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        )

        const response = await axios.get(`http://localhost:3000/todos?_limit=${limit}`)

        console.log(response)

        commit('setTodos', response.data)


    },

    addTodos: async ({ commit }, title) => {
        const response = await axios.post(
            'http://localhost:3000/todos',
            { title, completed: false }
        );
        console.log('vuex: actions addTodos');

        commit('newTodo', response.data)
    },
    updatedTodo: async ({ commit }, updTodo) => {
        console.log('this is updatedTodo vuex', updTodo);
        const response = await axios.put(`http://localhost:3000/todos/${updTodo.id}`,
            updTodo)

        console.log('vuex: actions updatedTodo');

        commit('updateTodo', response.data);
    },
    fetchTodos: async ({ commit }) => {
        const response = await axios.get(
            'http://localhost:3000/todos'
        )
        console.log('vuex: actions fetchTodos');

        commit('setTodos', response.data)
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    },
    testMutation: () => {
        console.log('this is vuex');
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}