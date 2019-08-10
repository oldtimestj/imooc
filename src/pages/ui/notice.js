import React from 'react'
import {Card, Button, Modal, notification} from 'antd'
import './ui.less'

class Notice extends React.Component {
  openNotification = (type, direction) => {
    if(direction){
      notification.config({
        placement:direction
      })
    }
    notification[type]({
      message:'发工资了',
      description:'上个月考勤22天，实发1000000'
    })
  }

  render(){
    return (
      <div>
        <Card title="通知提醒框" className="card-warp">
          <Button type="primary" onClick={()=>this.openNotification('success')}>Success</Button>
          <Button type="primary" onClick={()=>this.openNotification('info')}>Info</Button>
          <Button type="primary" onClick={()=>this.openNotification('warning')}>Warning</Button>
          <Button type="primary" onClick={()=>this.openNotification('error')}>Error</Button>
        </Card>

        <Card title="通知提醒框" className="card-warp">
          <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>Success</Button>
          <Button type="primary" onClick={()=>this.openNotification('info', 'topRight')}>Info</Button>
          <Button type="primary" onClick={()=>this.openNotification('warning', 'bottomLeft')}>Warning</Button>
          <Button type="primary" onClick={()=>this.openNotification('error','bottomRight')}>Error</Button>
        </Card>
      </div>
    )
  }
}

export default Notice