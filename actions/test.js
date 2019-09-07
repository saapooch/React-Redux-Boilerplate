import * as ActionTypes from './actionTypes'

const TestActions = {

    load(data){
        return async function(dispatch) {
            dispatch(TestActions.receive(data))
        }
    },


    receive(data) {
      return {type: ActionTypes.TEST_CASE, data}
    }

}

export default TestActions
