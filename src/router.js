import React from 'react'
import {HashRouter as Router, Route,Switch } from "react-router-dom";
import App from './App'
import Login from './pages/login'
import Admin from './Admin'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import NotMatch from './pages/notmatch'
import Buttons from './pages/ui/buttons'
import Notice from './pages/ui/notice'
import Tabs from './pages/ui/tabs'

class IRouter extends React.Component {
  render() {
    return(
      <Router>
        <App>
          <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" render={()=>
            <Admin>
              <Switch>
               <Route path="/admin/ui/buttons" component={Buttons}></Route>
               <Route path="/admin/ui/modals" component={Modals}></Route>
               <Route path="/admin/ui/loadings" component={Loadings}></Route>
               <Route path="/admin/ui/notification" component={Notice}></Route>
               <Route path="/admin/ui/tabs" component={Tabs}></Route>
               <Route component={ NotMatch }></Route>
              </Switch>
            </Admin>
          }></Route>
          <Route path="/order/detail" component={Login}></Route>
          </Switch>
         </App>
      </Router>
    )
  }
}

export default IRouter