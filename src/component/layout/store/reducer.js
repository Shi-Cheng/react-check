import * as types from './actionTypes'
import { fromJS } from 'immutable'
import { getPath } from '../../utils/auth'

const defaultState = fromJS({
  panes: [],
  selectedKeys:  getPath('path')? getPath('path') : 'hash'
})

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case types.SET_LAYOUT_PANES:
      return state.merge({
        panes: actions.data.pane,
        selectedKeys: actions.data.key
      })
    default:
      return state
  }
}