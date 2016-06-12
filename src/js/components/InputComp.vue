<template>
  <input type="text" v-model="inputValue" />
  <input type="button" value="添加" @click="addTodo" />
</template>

<script>
  import { addTodoAction } from '../storage/actions';

  export default {
    data() {
      return {
        inputValue: ''
      };
    },
    vuex: {
      getters: {

      },
      actions: {
        addTodoAction
      }
    },
    methods: {
      addTodo() {
        const inputVal = this.inputValue.trim();
        this.addTodoAction(inputVal);
      }
    }
  };
</script>
