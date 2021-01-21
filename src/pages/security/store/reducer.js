import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  hashResult: '哈希/散列计算结果'
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SET_HASH:
      return state.set('hashResult', actions.data)
    default:
      return state
  }
}