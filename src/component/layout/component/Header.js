import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import { menu, tabs } from '../../../router'
import MyIcon from '../../MyIcon'
import { actionCreators } from '../store'
import { setPath } from '../../utils/auth'


class Header extends Component {
  renderMenu = (menus) => {
    if (Array.isArray(menus)) {
      return menus.map(item => {
        if (!item.children || !item.children.length) {
          return (
            <Menu.Item key={item.key}>
              {/* <div onClick={() => { this.addPane(item, panes, activeMenu) }}> <MyIcon type={item.icon} /><span>{item.name}</span></div> */}
              <Link to={item.path} onClick={() => this.addPane(item)}>
                {item.icon ? <MyIcon type={item.icon} /> : ''}
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        } else {
          return (
            <Menu.SubMenu key={item.path} title={
              <span>
                {item.icon && <MyIcon type={item.icon} />}<span>{item.name}</span>
              </span>
            }>
              {this.renderMenu(item.children)}
            </Menu.SubMenu>
          )
        }
      })
    }
  }

  addPane(item) {
    const filterTab = tabs.filter(tab => tab.key === item.key)
    let panes = {
      path: item.path,
      name: item.name,
      key: item.key,
      component: filterTab[0].component
    }
    setPath('path', item.key)
    this.props.handleSetPanes(panes)
  }
  render() {
    const { selectedKeys } = this.props
    return (
      <Fragment>
        <Menu
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'center' }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={selectedKeys}>
          {this.renderMenu(menu)}
        </Menu>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    selectedKeys: state.getIn(['layout', 'selectedKeys']),
    panes: state.getIn(['layout', 'panes']),
  }
};
const mapDispatch = dispatch => ({
  handleSetPanes: data => {
    dispatch(actionCreators.setContentPanes(data))
  }
});

export default connect(mapState, mapDispatch)(withRouter(Header))