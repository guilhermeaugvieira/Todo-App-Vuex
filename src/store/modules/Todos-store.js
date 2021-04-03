import axios from 'axios';

export default {
  state: {
    todos: [],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    },
    newTodo: (state, todo) => {
      state.todos.unshift(todo);
    },
    removeTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    changeCompletedStatus: (state, todo) => {
      const index = state.todos.findIndex((todoElement) => todoElement.id === todo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, todo);
      }
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('http://localhost:3001/todos');
      commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
      const response = await axios.post('http://localhost:3001/todos', {
        title, completed: false,
      });
      commit('newTodo', response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      commit('removeTodo', id);
    },
    async limitTodos({ commit }, limit) {
      const response = await axios.get(`http://localhost:3001/todos/?_limit=${limit}`);
      commit('setTodos', response.data);
    },
    async updateTodo({ commit }, todo) {
      const response = await axios.put(`http://localhost:3001/todos/${todo.id}`, todo);
      commit('changeCompletedStatus', response.data);
    },
  },
};
