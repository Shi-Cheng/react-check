import React, { Component } from 'react'
import { Layout } from 'antd'
import SystemHeader from './component/Header'
import SystemContent from './component/Content'
import './style.less'
const { Header, Content, Footer } = Layout;

class SystemLayout extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <SystemHeader></SystemHeader>
        </Header>
        <Content>
          <SystemContent className='tabpane-box'></SystemContent>
        </Content>
        <Footer className='tab-footer'>
          区块链测评检测系统功能测试 ©{new Date().getFullYear()} Created by Dingxuan
        </Footer>
      </Layout>
    )
  }
}

export default SystemLayout