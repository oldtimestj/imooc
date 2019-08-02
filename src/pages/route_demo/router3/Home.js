import React from 'react'
import {Link} from "react-router-dom";



class Home extends React.Component {
  render() {
    return(

        <div>
          <ul>
            <li>
              <Link to="/main" replace>Home1</Link>
            </li>
            <li>
              <Link to="/about" replace>About1</Link>
            </li>
            <li>
              <Link to="/topic" replace>Topic1</Link>
            </li>
            <li>
              <Link to="/imooc" replace>Imooc</Link>
            </li>
          </ul>
          <hr/>
          {this.props.children}
        </div>
    )
  }

}

export default Home