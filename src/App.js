import React, { PureComponent } from 'react'
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom'
import AuthRouter from './component/AuthRouter'
import SystemLayout from './component/layout'
import Login from './pages/login'

class App extends PureComponent {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' exact component={Login}></Route>
          <AuthRouter path='/' component={SystemLayout}></AuthRouter>
        </Switch>
      </HashRouter>
    )
  }
}

export default withRouter(App);
