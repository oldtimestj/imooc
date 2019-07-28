import React from 'react'

class Child extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1
    }
  }
  //生命周期
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps', nextProps, nextContext)
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('componentWillUpdate')
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }


  render() {
    return (
      <div>
        <p>子组件生命周期</p>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default Child