import React from 'react'
import {NavLink} from 'react-router-dom'
import MenuConfig from './../../config/menuConfig'
import './index.less'
import {Menu, Icon} from 'antd';

const {SubMenu} = Menu;

class NavLeft extends React.Component {
  componentWillMount(nextProps, nextState, nextContext) {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  //菜单渲染
  renderMenu =(data) => {
    return data.map((item, index) => {
      if(item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div className="logo">
        <img src="/assets/logo-ant.svg" alt=""/>
        <h1>Imooc MS</h1>
        <Menu theme="dark">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default NavLeft