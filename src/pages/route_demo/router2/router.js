import React from 'react'
import {HashRouter as Router,Route} from 'react-router-dom'
import Main from './Main'
import About from '../router1/about'
import Topic from '../router1/topic'
import Home from './Home'
class IRoute extends React.Component {
  render() {
    return (
      <Router>
        <Home>
          <Route path="/main" render={()=>
            <Main>
              <Route path="/main/a" component={About}></Route>
            </Main>
          }></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topic" component={Topic}></Route>
        </Home>
      </Router>
    )
  }

}
export default IRoute