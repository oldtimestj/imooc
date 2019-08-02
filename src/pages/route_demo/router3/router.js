import React from 'react'
import {HashRouter as Router,Route, Switch} from 'react-router-dom'
import Main from './Main'
import Info from './info'
import Topic from '../router1/topic'
import About from '../router1/about'
import Home from './Home'
import NotMatch from './NotMatch'
class IRoute extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Switch>
            <Route path="/main" render={()=>
              <Main>
                <Route path="/main/:mainId" component={Info}></Route>
              </Main>
            }></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topic" component={Topic}></Route>
            <Route  component={NotMatch}></Route>
          </Switch>
        </Home>
      </Router>
    )
  }

}
export default IRoute