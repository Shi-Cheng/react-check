import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { getRandomData, getBinaryData } from '../../component/utils/utils'
import './style.css'

const { Option } = Select;

class SmFourSecurity extends Component {
  refForm = React.createRef()
  resForm = React.createRef()

  UNSAFE_componentWillUpdate(newVal, oldVal) {
    this.resForm.current.setFieldsValue({
      resBase: newVal.baseRes,
      resHex: newVal.hexRes,
      resBinary: newVal.binaryRes
    })
  }
  onFinish = () => {
    const base = getRandomData(128)
    const hex = getRandomData(64)
    const binary = getBinaryData()
    this.props.setSM4EncryptData(base, hex, binary)
  }
  onReset = () => { }
  onFill = () => { }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    const initialValues = {
      type: 'sm4',
      model: 'ecb',
      padding: 'pkcs7'
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
                <Option value="sm4">SM4</Option>
              </Select>
            </Form.Item>
            <Form.Item name="plain" label="待加密/解密文本" rules={[{ required: true }]}>
              <Input.TextArea size='large' placeholder="待加密/解密文本" style={{ width: 400 }} />
            </Form.Item>
            <Form.Item name="model" label="迭代模式">
              <Select
                size='large'
                style={{ width: 400 }}
                placeholder="算法类型"
              >
                <Option value="ecb">ECB</Option>
                <Option value="cbc">CBC</Option>
                <Option value="cfb">CFB</Option>
                <Option value="ofb">OFB</Option>
              </Select>
            </Form.Item>
            <Form.Item name="padding" label="填充类型">
              <Select
                size='large'
                style={{ width: 400 }}
                placeholder="填充类型"
              >
                <Option value="pkcs7">pkcs7</Option>
                <Option value="pkcs5">pkcs5</Option>
                <Option value="nopadding">nopadding</Option>
              </Select>
            </Form.Item>
            <Form.Item name="keys" label="密钥key" rules={[{ required: true }]}>
              <Input.TextArea size='large' style={{ width: 400 }} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button size='large' type="primary" htmlType="submit" style={{ marginRight: 7 }}>
                加密
              </Button>
              <Button size='large' type="primary" htmlType="submit" style={{ marginRight: 7 }}>
                解密
              </Button>
              <Button size='large' htmlType="button" onClick={this.onReset}>
                重置
              </Button>
            </Form.Item>
          </Form>

          <Form ref={this.resForm} {...layout}>
            <Form.Item name="resBase" label="Base64">
              <Input.TextArea size='large' placeholder="base64加密结果" style={{ width: 600 }} autoSize={{ minRows: 4, maxRows: 6 }} />
            </Form.Item>
            <Form.Item name="resHex" label="Hex结果">
              <Input.TextArea size='large' placeholder="Hex加密结果" style={{ width: 600 }} autoSize={{ minRows: 4, maxRows: 6 }} />
            </Form.Item>
            <Form.Item name="resBinary" label="Binary计算结果">
              <Input.TextArea size='large' style={{ width: 600 }} autoSize={{ minRows: 4, maxRows: 6 }} />
            </Form.Item>
          </Form>

          <div className='security-info'>
            <div className="help">
              <div>
                <div className="legend">简介</div>
                <p>对称加密是密码学中的一类加密算法，这类算法在加密和解密时使用相同的密钥。</p>
                <p>主要的加密算法都为分组加密算法，即将明文分成固定大小的组进行迭代加密。迭代的方法即称为模式，有ECB、CBC、CFB等模式，其中ECB是最简单的一种模式，也是最容易被破解的模式，不建议使用。</p>
                <p>如果明文的最后一个分组不够固定长度大小，需要将其填充为固定长度，即padding。否则不需要填充，可以选择nopadding。</p>
                <p>本页支持了国内算法：SM4。支持公钥加密、私钥解密操作。</p>
                <p>注：DES算法早在1999年就以较短的时间被破解，已经不被建议使用。本页面提供的DES加解密功能仅供测试使用。</p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
const mapState = (state) => {
  return {
    baseRes: state.getIn(['security', 'baseRes']),
    hexRes: state.getIn(['security', 'hexRes']),
    binaryRes: state.getIn(['security', 'binaryRes'])
  }
};
const mapDispatch = dispatch => ({
  setSM4EncryptData: (base, hex, binary) => {
    const data = {
      base,
      hex,
      binary
    }
    dispatch(actionCreators.setSM4(data))
  }
});

export default connect(mapState, mapDispatch)(SmFourSecurity)