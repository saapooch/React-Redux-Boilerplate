import * as ActionTypes from '../actions/actionTypes'

const initialState = {}

const TestReducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.TEST_CASE:
      if (action.data) {
        return wrapData(action.data)
      } else {
        console.warn("No data was passed")
        return initialState
      }

    default:
      return state
  }
};

export function wrapData(data) {
    return {
        name: 'pooch',
        data: data
    }
}


export default TestReducer;
