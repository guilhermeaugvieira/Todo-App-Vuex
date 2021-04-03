<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent="addTodo(title)">
        <input type="text" v-model="title" placeholder="Add Todo...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Add Todo',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    ...mapActions(['addTodo']),
  },
};
</script>

<style lang="scss" scoped>
div{
  display: block;
  padding: 0 15px;

  form{
    display: flex;

    input[type="text"] {
      flex: 10;
      padding: 10px;
      border: 1px solid #41b883;
      outline: none;
    }
    input[type="submit"] {
      flex: 2;
      background: #41b883;
      color: #fff;
      border: 1px #41b883 solid;
      cursor: pointer;
    }
  }
}
</style>
