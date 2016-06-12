export default {
  ADD_TODO(state, text) {
    state.todos.push({
      text,
      done: false
    });
  }
};
