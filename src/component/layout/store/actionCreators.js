import * as types from './actionTypes'

export const setContentPanes = (data) => {
  return {
    type: types.SET_LAYOUT_PANES,
    data: {
      pane: data,
      key: data.key,
    }
  }
}
