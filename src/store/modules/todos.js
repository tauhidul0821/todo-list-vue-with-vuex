const state = {
    todos: [
        {
            id: 1,
            title: 'Sumon',
        },
        {
            id: 3,
            title: 'Tauhidul',
        },
        {
            id: 2,
            title: 'khadija',
        },
        {
            id: 6,
            title: 'Ahmed',
        }
    ]
}


const getters = {
    allTodos: (state) => {
        return state.todos
    }
}
const actions = {
    testAction: () => {
        console.log('this is action test from vuex');
    },
    deleteTodo: ({commit},id)=>{
        console.log('this is deleteTodo form vueX',id);
        commit('testMutation')
    }
}
const mutations = {
    testMutation: () => {
        console.log('this is test Mutation');
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}