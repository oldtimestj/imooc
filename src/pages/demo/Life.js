import React from 'react'
import Child from './Child'
import { Button } from "antd";

import './index.less'

export default class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    // this.handleBtnClick = this.handleBtnClick.bind(this)
  }


  render() {
    return (
      <div className='content'>
        <p>React 生命周期</p>
        <Button type="primary" onClick={this.handleBtnClick.bind(this)}>AnrdClick</Button>
        <Button onClick={this.handleAdd}>AntdClick</Button>
        {/*<button onClick={this.handleBtnClick.bind(this)}>click</button>*/}
        {/*<button onClick={this.handleAdd}>click</button>*/}
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    )
  }
  handleBtnClick() {

  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}