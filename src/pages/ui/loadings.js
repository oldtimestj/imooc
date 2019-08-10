import React from "react"
import {Card, Button, Spin, Icon, Alert} from "antd"
import './ui.less'
class Loadings extends React.Component {
  render() {
    const icon = <Icon type="plus"></Icon>
    return (
      <div>
        <Card title="Spin用法" className="card-warp">
          <Spin size="small"></Spin>
          <Spin style={{margin:'0 10px'}}></Spin>
          <Spin size="large" ></Spin>
          <Spin size="large" indicator={icon} style={{marginLeft:10}}></Spin>
        </Card>
        <Card title="内容遮罩" className="card-warp">
          <Alert
          message="React"
          description="欢迎来到React高级课程"
          type="info"
          ></Alert>
          <Spin>
            <Alert
            message="React"
            description="欢迎来到React高级课程"
            type="warning"
            ></Alert>
          </Spin>
          <Spin tip='加载中...'>
            <Alert
            message="React"
            description="欢迎来到React高级课程"
            type="warning"
            ></Alert>
          </Spin>
        </Card>
      </div>
    )
  }
}

export default Loadings