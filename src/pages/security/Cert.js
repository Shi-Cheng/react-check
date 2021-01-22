import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Form, Input, Button, Select, Upload, Modal, Col, Row } from 'antd'
import { InboxOutlined } from '@ant-design/icons';

import './style.css'

const { Option } = Select;

class CheckSecurity extends Component {
  onFinish = () => {
    const status = false
    this.props.setCertDetailStatus(status)
  }
  handleStatus = (status) => {
    this.props.setCertDetailStatus(status)
  }
  fileUpdate = () => {
    console.log('file')
  }
  refForm = React.createRef()
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const initialValues = {
      type: 'code'
    }
    const action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
    const { certDetailVisible, handleStatus } = this.props
    return (
      <Fragment>
        <div className='security-content'>
          <Form {...layout} ref={this.refForm} name="control-hooks" initialValues={initialValues} onFinish={this.onFinish}>
            <Form.Item name="type" label="算法类型">
              <Select
                size='large'
                style={{ width: 400 }}
                placeholder="算法类型"
              >
                <Option value="code">粘贴代码</Option>
                {/* <Option value="file">上传文件</Option> */}
              </Select>
            </Form.Item>
            <Form.Item name="plain" label="数据原文" rules={[{ required: true }]}>
              <Input.TextArea size='large' style={{ width: 400 }} />
            </Form.Item>
            {/* <Form.Item label="证书文件" name="dragger">
              <Upload.Dragger
                name="files" 
                action={action} 
                customRequest={this.fileUpdate}
                style={{width: 400}}
                >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或或拖拽上传签名文件</p>
              </Upload.Dragger>
            </Form.Item> */}
            <Form.Item {...tailLayout}>
              <Button size='large' type="primary" htmlType="submit" style={{ marginRight: 7 }}>
                验证
              </Button>
            </Form.Item>
          </Form>
          <div className='security-info'>
            <div className="help">
              <div>
                <div className="legend">简介</div>
                <p>数字证书就是网络通讯中标志通讯各方身份信息的一系列数据，其作用类似于现实生活中的身份证。</p>
                <p>它是由一个权威机构发行的，来识别对方的身份。最简单的证书包含一个公开密钥、名称以及证书授权中心的数字签名。</p>
                <p>一般情况下证书中还包括密钥的有效时间，发证机关(证书授权中心)的名称，该证书的序列号等信息，证书的格式遵循ITUT-X.509国际标准。。</p>
                <p>注意：本页的数据仅供测试用。</p>
              </div>
            </div>
          </div>
          <Modal
            title="证书详情"
            visible={certDetailVisible}
            onOk={() => this.handleStatus(certDetailVisible)}
            onCancel={() => this.handleStatus(certDetailVisible)}
            width='40%'
            centered={true}
          >
            <Form>
              <Row>
                <Col span={12}>
                  <Form.Item label="部门">
                    <span>市场部门</span>
                  </Form.Item>
                  <Form.Item label="城市">
                    <span>北京</span>
                  </Form.Item>
                  <Form.Item label="省份">
                    <span>北京</span>
                  </Form.Item>
                  <Form.Item label="国家">
                    <span>中国</span>
                  </Form.Item>
                  <Form.Item label="颁发者">
                    <span>BCIA</span>
                  </Form.Item>
                  <Form.Item label="签名算法">
                    <span>SM3withSM2</span>
                  </Form.Item>
                  <Form.Item label="验签结果">
                    <span>通过</span>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="证书版本号">
                    <span>1.0.1</span>
                  </Form.Item>
                  <Form.Item label="证书序列号">
                    <span>kyHbWj3RmbGNWarN</span>
                  </Form.Item>
                  <Form.Item label="失效日期">
                    <span>2020-03-01 09:20:00</span>
                  </Form.Item>
                  <Form.Item label="剩余天数">
                    <span>20</span>
                  </Form.Item>
                  <Form.Item label="证书指纹">
                    <span>ca8c474ee2cc41bc5f17dff4ef76e9c30d96f619</span>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </div>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    certDetailVisible: state.getIn(['security', 'certDetailVisible'])
  }
};
const mapDispatch = dispatch => ({
  setCertDetailStatus: (status) => {
    dispatch(actionCreators.setCertVisiable(status))
  }
});

export default connect(mapState, mapDispatch)(CheckSecurity)