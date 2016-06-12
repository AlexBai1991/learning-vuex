<template>
  <ul v-for="todo of todos">
    <li>{{ $index + 1 }}. {{ todo.text }}</li>
  </ul>
</template>

<script>
  import { getTodos } from './store/getters';

  export default {
    vuex: {
      getters: {
        todos: getTodos
      },
      actions: {

      }
    }
  };  
</script>
