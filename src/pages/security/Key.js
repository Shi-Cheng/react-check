import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Select, notification } from 'antd'
import { SmileOutlined } from '@ant-design/icons';
import './style.css'

const { Option } = Select;

class KeySecurity extends Component {
  refForm = React.createRef()

  onFinish = () => { this.openNotification() }
  onReset = () => { 
    if(this.refForm.current) {
      this.refForm.current.setFieldsValue({
        type: 'sm2',
        publicKey: '',
        securityKey: ''
      })
    }
   }
  openNotification = () => {
    notification.open({
      message: '校验成功',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const initialValues = {
      type: 'sm2'
    }
    return (
      <Fragment>
        <div className='security-content'>
          <Form ref={this.refForm} {...layout} name="control-hooks" initialValues={initialValues} onFinish={this.onFinish}>
            <Form.Item name="type" label="算法类型">
              <Select
                size='large'
                style={{ width: 400 }}
                placeholder="算法类型"
              >
                <Option value="sm2">SM2</Option>
                <Option value="sm4">SM4</Option>
              </Select>
            </Form.Item>
            <Form.Item name="publicKey" label="算法公钥" rules={[{ required: true }]}>
              <Input.TextArea
                placeholder="算法公钥"
                size='large'
                style={{ width: 400 }} />
            </Form.Item>
            <Form.Item name="securityKey" label="算法私钥" rules={[{ required: true }]}>
              <Input.TextArea
                placeholder="算法私钥"
                size='large'
                style={{ width: 400 }} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button size='large' type="primary" htmlType="submit" style={{ marginRight: 7 }}>
                立即校验
              </Button>
              <Button size='large' htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Form.Item>
          </Form>
          <div className='security-info'>
            <div className="help">
              <div>
                <div className="legend">简介</div>
                <p>非对称加密，也称公开密钥加密，是密码学的一类算法。它需要两个密钥，一个公开密钥，一个私有密钥；一个用作加密，另一个则用作解密。</p>
                <p>使用其中一个密钥把明文加密后所得的密文，只能用相对应的另一个密钥才能解密得到原文。</p>
                <p>本页支持了常用非对称加密算法RSA、SM2的密钥生成。</p>
                <p>注意：本页的数据仅供测试用。</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default KeySecurity