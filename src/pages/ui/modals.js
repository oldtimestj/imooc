import React from 'react'
import {Card, Button, Modal} from 'antd'
import './ui.less'

class Modals extends React.Component {
  state={
    shoeModal1:false,
    shoeModal2:false,
    shoeModal3:false,
    shoeModal4:false,
  }
  handleOpen =(type) => {
    this.setState({
      [type]:true
    })
  }
  handleConfirm = (type) => {
    Modal[type]({
      title:'确认？',
      content:'你确定你学会了React了吗？',
      onOk(){
        console.log('Ok')
      },
      onCancel(){
        console.log('cancel')
      }
    })
  }
  render() {
    return (
      <div>
        <Card title="基础模态框" className="card-warp">
          <Button type="primary" onClick={() =>this.handleOpen('shoeModal1')}>Open</Button> 
          <Button type="primary" onClick={() =>this.handleOpen('shoeModal2')}>自定义页脚</Button>
          <Button type="primary" onClick={() =>this.handleOpen('shoeModal3')}>顶部20px</Button>
          <Button type="primary" onClick={() =>this.handleOpen('shoeModal4')}>水平居中</Button>
        </Card>
        <Card title="信息确认框" className="card-warp">
          <Button type="primary" onClick={() =>this.handleConfirm('confirm')}>Confirm</Button> 
          <Button type="primary" onClick={() =>this.handleConfirm('info')}>Info</Button>
          <Button type="primary" onClick={() =>this.handleConfirm('success')}>Success</Button>
          <Button type="primary" onClick={() =>this.handleConfirm('warning')}>Warning</Button>
        </Card>
        <Modal
          title="React"
          visible={this.state.shoeModal1}
          onCancel={()=>{
            this.setState({
              shoeModal1:false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程！</p>
        </Modal>
        <Modal
          title="React"
          okText="好的"
          cancelText="算了"
          visible={this.state.shoeModal2}
          onCancel={()=>{
            this.setState({
              shoeModal2:false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程！</p>
        </Modal>
        <Modal
          title="React"
          style={{top:20}}
          visible={this.state.shoeModal3}
          onCancel={()=>{
            this.setState({
              shoeModal3:false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程！</p>
        </Modal>
        <Modal
          title="React"
          wrapClassName="vertical-center-modal"
          visible={this.state.shoeModal4}
          onCancel={()=>{
            this.setState({
              shoeModal4:false
            })
          }}
        >
          <p>欢迎学习慕课新推出的React高级课程！</p>
        </Modal>
      </div>
    )
  }
}
export default Modals