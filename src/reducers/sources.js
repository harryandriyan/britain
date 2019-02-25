import Immutable from 'immutable'
import * as ActionType from 'actions/sources'

export const initialState = Immutable.fromJS({
  isLoading: false,
  country: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_SOURCES:
      return state.set('isLoading', true)

    case ActionType.GET_SOURCES_SUCCESS:
      return state.merge(
        Object.assign({}, action.payload, {
          isLoading: false,
          country: action.country
        })
      )

    default:
      return state
  }
}
