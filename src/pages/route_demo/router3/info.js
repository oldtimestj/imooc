import React from 'react'



class Info extends React.Component {
  render() {
    return(

      <div>
        这里是动态路由携带的参数值.
        {this.props.match.params.mainId}
      </div>

    )
  }

}

export default Info