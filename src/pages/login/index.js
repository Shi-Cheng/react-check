import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { UserOutlined, UnlockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import '../../styles/login.css'
import { actionCreators } from './store/'


class Login extends Component {
  constructor(props) {
    super(props)
  }
  handleLogin = data => {
    // console.log(data)
    this.props.handleLoginDispatch(data)
    this.props.history.push('/')
    // return
    // setTimeout(() => {
    //   this.props.history.push('/')
    // }, 500)
  }
  render() {
    const { clickStatus } = this.props
    return (
      <div className='login-container'>
        <div className='login-box'>
          <span className='login-title'>区块链测评检测系统安全测试</span>
          <div className='login-info'>
            <div>
              <Input
                size="large"
                placeholder="large size"
                defaultValue="超级管理员"
                prefix={<UserOutlined />} />
            </div>
            <div>
              <Input.Password size="large"
                style={{ marginTop: 10 }}
                placeholder="large size"
                defaultValue="00000000"
                prefix={<UnlockOutlined />}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </div>
            <div>
              <Button
                style={{ marginTop: 30 }}
                type="primary"
                block size='large'
                loading={clickStatus}
                onClick={() => this.handleLogin(clickStatus)}
              >
                登录
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    clickStatus: state.getIn(['login', 'clickStatus']),
  }
};
const mapDispatch = dispatch => ({
  handleLoginDispatch: data => {
    dispatch(actionCreators.setClickStatus(data));    
  }
});

export default connect(mapState, mapDispatch)(withRouter(Login))