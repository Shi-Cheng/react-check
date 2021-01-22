import {combineReducers} from 'redux-immutable'
import {reducer as loginReducer } from '../pages/login/store'
import { reducer as layoutReducer } from '../component/layout/store'
import { reducer as securityReducer } from '../pages/security/store'
import { reducer as systemReducer } from '../pages/system/store'

const reducer = combineReducers({
  login: loginReducer,
  layout: layoutReducer,
  security: securityReducer,
  system: systemReducer
})

export default reducer