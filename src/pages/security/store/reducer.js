import * as types from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  hashResult: '',
  baseRes: '',
  hexRes: '',
  binaryRes: '',
  certDetailVisible: false,
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SET_HASH:
      return state.set('hashResult', actions.data)
    case types.SET_SM4_RESULT:
      return state.merge({
        baseRes: actions.data.base,
        hexRes: actions.data.hex,
        binaryRes: actions.data.binary
      })
    case types.SET_CERT_VISIABLE:
      return state.set('certDetailVisible', actions.status)
    default:
      return state
  }
}