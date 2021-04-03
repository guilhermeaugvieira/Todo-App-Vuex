<template>
  <div class="app-container">
    <AddTodo/>
    <FilterTodos/>
    <Todos/>
  </div>
</template>

<script>
import Todos from '../components/Todos.vue';
import AddTodo from '../components/AddTodo.vue';
import FilterTodos from '../components/FilterTodos.vue';

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>
