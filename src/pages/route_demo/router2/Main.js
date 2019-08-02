import React from 'react'
import {HashRouter, Route,Link} from "react-router-dom";


class Main extends React.Component {
  render() {
    return(

        <div>
          this is main page.
          <Link to="/main/a">嵌套路由到about</Link>
          <hr/>
          {this.props.children}
        </div>

    )
  }

}

export default Main