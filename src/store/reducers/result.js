import * as actionType from "../action/action";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.result, id: new Date() })
      };
      break;
    case actionType.DELETE_RESULT:
      const updatedResult = state.results.filter(
        result => result.id !== action.deleteResultIndex
      );
      return {
        ...state,
        results: updatedResult
      };
      break;
  }
  return state;
};

export default reducer;
