import * as actionType from "../action/action";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case actionType.DECREMENNT:
      return {
        ...state,
        counter: state.counter - 1
      };
      break;
    case actionType.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
      break;
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
      break;
    case actionType.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
      break;
  }
  return state;
};

export default reducer;
