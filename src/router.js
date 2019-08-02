import React from 'react'
import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import App from './App'
import Login from './pages/login'
import Admin from './Admin'


class IRouter extends React.Component {
  render() {
    return(
      <Router>
        <App>
          <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/order/detail" component={Login}></Route>
          </Switch>
         </App>
      </Router>
    )
  }
}

export default IRouter