import Immutable from 'immutable'
import * as ActionType from 'actions/bySource'

export const initialState = Immutable.fromJS({
  isLoading: false,
  country: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_BY_SOURCE:
      return state.set('isLoading', true)

    case ActionType.GET_BY_SOURCE_SUCCESS:
      return state.merge(
        Object.assign({}, action.payload, {
          isLoading: false,
          source: action.source
        })
      )

    default:
      return state
  }
}
