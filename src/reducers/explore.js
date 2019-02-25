import Immutable from 'immutable'
import * as ActionType from 'actions/explore'

export const initialState = Immutable.fromJS({
  isLoading: false,
  country: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_EXPLORE:
      return state.set('isLoading', true)

    case ActionType.GET_EXPLORE_SUCCESS:
      return state.merge(
        Object.assign({}, action.payload, {
          isLoading: false,
          word: action.word
        })
      )

    default:
      return state
  }
}
