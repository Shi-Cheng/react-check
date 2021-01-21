import * as types from './actionTypes'

export const setHash = (data) => {
  return {
    type: types.SET_HASH,
    data
  }
}
