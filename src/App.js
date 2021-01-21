import React, { PureComponent } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import AuthRouter from './component/AuthRouter'
import SystemLayout from './component/layout'
import Login from './pages/login'


class App extends PureComponent{
  render(){
    return (
      <Switch>
        <Route path='/login' exact component={Login}></Route>
        <AuthRouter path='/' component={SystemLayout}></AuthRouter>
      </Switch>
    )
  }
}

export default withRouter(App);
