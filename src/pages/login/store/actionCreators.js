import * as types from './actionTypes'

export const setClickStatus = (data) => {
  return {
    type: types.CLICK_STATUS,
    data
  }
}
