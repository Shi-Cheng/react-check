import {combineReducers} from 'redux-immutable'
import {reducer as loginReducer } from '../pages/login/store'
import { reducer as layoutReducer } from '../component/layout/store'
import { reducer as securityReducer } from '../pages/security/store'

const reducer = combineReducers({
  login: loginReducer,
  layout: layoutReducer,
  security: securityReducer
})

export default reducer