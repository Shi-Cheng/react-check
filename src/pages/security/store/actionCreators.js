import * as types from './actionTypes'

export const setHash = (data) => {
  return {
    type: types.SET_HASH,
    data
  }
}

export const setSM4 = (data) => {
  return {
    type: types.SET_SM4_RESULT,
    data
  }
}

export const setCertVisiable = (status) => {
  return {
    type: types.SET_CERT_VISIABLE,
    status: !status
  }
}