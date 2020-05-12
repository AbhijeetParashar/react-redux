import * as actionType from './action/action'

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
    console.log(action)
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
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: state.counter, id: new Date() })
      };
      break;
    case actionType.DELETE_RESULT:
        const updatedResult = state.results.filter(result => result.id !== action.deleteResultIndex)
      return {
        ...state,
        results: updatedResult
      };
      break;
  }
  return state;
};

export default reducer;
