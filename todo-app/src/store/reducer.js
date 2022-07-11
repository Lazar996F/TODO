import { ADD_NEW, MARK_DONE, DELETE_TASK, EDIT_TASK } from "./actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case ADD_NEW:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case MARK_DONE:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TASK:
      return {
        ...state,
        todos: action.payload,
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
