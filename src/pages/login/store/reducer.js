import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  clickStatus: false
})


export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.CLICK_STATUS:
      return state.set('clickStatus', !actions.data)
    default:
      return state
  }
}