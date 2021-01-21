import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { getRandomData } from '../../component/utils/utils'
import './style.css'

const { Option } = Select;

class HashSecurity extends Component {
  hashForm = React.createRef();
  resultForm = React.createRef();
  UNSAFE_componentWillUpdate(newVal, oldVal) {
    this.resultForm.current.setFieldsValue({
      hashResult: newVal.hashResult
    })
  }

  onFinish = (data) => {
    const hashResult = getRandomData(64)
    this.props.handleSetHash(hashResult)
  }
  onReset = () => {
    this.hashForm.current.setFieldsValue({
      plain: ''
    })
  }
  onFill = () => {
    const randomLength = Math.floor(Math.random() * 20)
    this.hashForm.current.setFieldsValue({
      plain: getRandomData(randomLength)
    })
  }
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <Fragment>
        <div className='security-content'>
          <Form ref={this.hashForm} {...layout} name="control-hooks" onFinish={this.onFinish} initialValues={{ 'type': 'SM3' }}>
            <Form.Item name="plain" label="数据原文" rules={[{ required: true, message: '请输入数据原文', }]}>
              <Input.TextArea size='large' style={{ width: 400 }} />
            </Form.Item>
            <Form.Item name="type" label="算法类型">
              <Select
                size='large'
                style={{ width: 400 }}
                placeholder="算法类型"
              >
                <Option value="SM3">SM3</Option>
              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button size='large' type="primary" htmlType="submit" style={{ marginRight: 7 }}>
                提交
              </Button>
              <Button size='large' htmlType="button" onClick={this.onReset}>
                重置
              </Button>
              <Button type="link" htmlType="button" onClick={this.onFill}>
                随机生成数据原文
              </Button>
            </Form.Item>
          </Form>

          <Form {...layout} name='hash' ref={this.resultForm}>
            <Form.Item name="hashResult" label="计算结果">
              <Input.TextArea size='large' style={{ width: 600 }} autoSize={{ minRows: 4, maxRows: 6 }} />
            </Form.Item>
          </Form>

          <div className='security-info'>
            <div className="help">
              <div>
                <div className="legend">简介</div>
                <p>HASH（哈希、散列）是一种从任意长度的原文创建固定长度的值的单向操作。</p>
                <p>好的哈希函数有如下特性：如果两个哈希值是不相同的，那么这两个哈希值的原文也是不相同的。这种函数被称为单向哈希函数。</p>
                <p>哈希值又被称为消息摘要、数字指纹。</p>
                <p>哈希的应用场景非常广泛，主要是确保数据的真实性、完整性，在此基础上有多种应用场景如：校验下载文件、校验消息、语音识别等等。</p>
                <p>本页支持了国内算法：SM3。其它算法陆续更新中......</p>
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
    hashResult: state.getIn(['security', 'hashResult'])
  }
};
const mapDispatch = dispatch => ({
  handleSetHash: data => {
    dispatch(actionCreators.setHash(data))
  }
});

export default connect(mapState, mapDispatch)(HashSecurity)