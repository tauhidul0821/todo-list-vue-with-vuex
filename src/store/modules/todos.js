import axios from "axios";
const state = {
    todos: []
}
const getters = {
    allTodos: (state) => {
        return state.todos
    }
}
const actions = {
    testAction() {
        console.log('this is vuex');
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id)
    },
    async addTodos({ commit }, title) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            { title, completed: false }
        );

        commit('newTodo', response.data)
    },
    async updatedTodo({ commit }, updTodo) {
        console.log('this is updatedTodo vuex', updTodo);
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
            updTodo)

        commit('updateTodo', response.data);
    },
    async fetchTodos({ commit }) {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        )
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