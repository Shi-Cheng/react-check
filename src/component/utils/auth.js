
export const setPath = (keys, value) => {
  return sessionStorage.setItem(keys, value)
}

export const getPath = (keys) => {
  return sessionStorage.getItem(keys)
}

export const removePath = (keys) => {
  return sessionStorage.removeItem(keys)
}