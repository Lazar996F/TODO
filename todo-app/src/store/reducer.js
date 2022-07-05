import { actionType } from "../utils/constants";

function reducer(state, action) {
  switch (action.type) {
    case actionType.ADD_NEW:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case actionType.MARK_DONE:
      return {
        ...state,
        todos: action.payload,
      };
    case actionType.DELETE_TASK:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
