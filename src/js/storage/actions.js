export const addTodoAction = ({ dispatch, state }, text) => {
  dispatch('ADD_TODO', text);
};
