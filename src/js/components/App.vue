<template>
  <div id="app">
    <Child />
    <InputComp />
    <TodoComp />
  </div>
</template>

<script>
  import store from './store';
  import Child from './Child.vue';
  import InputComp from './InputComp.vue';
  import TodoComp from './TodoComp.vue';

  export default {
    store,
    components: {
      Child,
      InputComp,
      TodoComp
    }
  };
</script>
