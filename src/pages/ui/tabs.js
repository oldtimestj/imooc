import React from 'react'
import {Card, Button, Modal, notification ,Tabs,message, Icon} from 'antd'
import './ui.less'


const { TabPane } = Tabs;
class Tab extends React.Component {
  newTabIndex = 0
  callback = (key) => {
    message.info('您选择了标签:' + key)
  }
  handleChangeTab = (activeKey) => {
    this.setState({
      activeKey
    })
  }
  handleEdit = (targetKey, action) => {
    this[action](targetKey);
  };
  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };
  componentWillMount(){
    const panes = [
      {
        title:'Tab 1',
        content: 'Tab 1',
        key: '1'
      },
      {
        title:'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title:'Tab 3',
        content: 'Tab 3',
        key: '3  '
      },
    ]
    this.setState({
      activeKey:panes[0].key,
      panes
    })
  }
  render(){
    return (
      <div>
        <Card title="Tab标签" className="card-warp">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              欢迎学习React课程
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
            欢迎学习React课程
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              React 是一个受欢迎的前端框架
            </TabPane>
          </Tabs>
        </Card>

        <Card title="Tab带有图标标签" className="card-warp">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">
              欢迎学习React课程
            </TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">
            欢迎学习React课程
            </TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">
              React 是一个受欢迎的前端框架
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带有图标标签" className="card-warp">
          <Tabs 
            onChange={this.handleChangeTab}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit = {this.handleEdit}
            >
            {
              this.state.panes.map((panel) => {
                return <TabPane tab={panel.title}
                key={panel.key}>
                </TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab