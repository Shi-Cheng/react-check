import React, { Fragment, Component } from 'react'
import { Card, Table } from 'antd'
import { connect } from 'react-redux'
import Search from '../../../component/Search'
import Detail from '../../../component/Detail'
import moment from 'moment'
import { LogsSearchData, LogsBtnList } from '../../../component/Common/searchList'
import { actionCreators } from '../store'
import { logsDetail } from '../../../component/Common/detailList'

class Logs extends Component {
  handleClick(type, searchParams) {
    if (searchParams) {
      console.log(type)
      console.log(searchParams)
    } else {
      this.props.setAddUserStatus(true)
    }
  }
  changeDetailStatus(item) {
    console.log(item)
  }
  render() {
    const {
      query,
      logsInfo,
      detailVisibleStatus,
      handlePagination,
      changeDetailStatus,
      onCancle
    } = this.props
    let logs = []

    logs.push(
      {
        "id": 1,
        "username": "张洁",
        "operationModel": "登录",
        "loginAddress": "47.99.130.140",
        "operationTime": "2021-01-12 16:30:09",
        "avatar": "http://47.99.130.140:8888/public/images/default.png",
        "gender": 0
      },
      {
        "id": 2,
        "username": "张洁",
        "operationModel": "哈希散列",
        "loginAddress": "47.99.130.140",
        "operationTime": "2021-01-14 13:30:09",
        "avatar": "http://47.99.130.140:8888/public/images/default.png",
        "gender": 0
      },
      {
        "id": 3,
        "username": "张洁",
        "operationModel": "SM4加密",
        "loginAddress": "47.99.130.140",
        "operationTime": "2021-01-14 13:31:10",
        "avatar": "http://47.99.130.140:8888/public/images/default.png",
        "gender": 0
      },
      {
        "id": 4,
        "username": "张洁",
        "operationModel": "密钥合规性",
        "loginAddress": "47.99.130.140",
        "operationTime": "2021-01-14 14:20:09",
        "avatar": "http://47.99.130.140:8888/public/images/default.png",
        "gender": 0
      },
      {
        "id": 5,
        "username": "张洁",
        "operationModel": "证书检测",
        "loginAddress": "47.99.130.140",
        "operationTime": "2021-01-22 17:30:09",
        "avatar": "http://47.99.130.140:8888/public/images/default.png",
        "gender": 0
      },
      {
        "id": 6,
        "username": "张洁",
        "operationModel": "哈希/散列",
        "loginAddress": "47.99.130.140",
        "operationTime": "2021-01-19 13:09:19",
        "avatar": "http://47.99.130.140:8888/public/images/default.png",
        "gender": 0
      }
    )

    const colums = [
      {
        title: '序号',
        key: 'num',
        align: 'center',
        width: 80,
        render: (text, record, index) => {
          let num = ''
          if (!query.pageNumber) {
            num = index < 9 ? `0${index + 1}` : `${index + 1}`
          } else {
            if (query.pageNumber === 1) {
              num = index < 9 ? `0${index + 1}` : `${index + 1}`
            } else {
              num = `${(query.pageNumber - 1) * 10 + index + 1}`
            }
          }
          return num
        }
      }, {
        title: '用户名',
        dataIndex: 'username',
        align: 'center',
        ellipsis: true
      }, {
        title: '登录地点',
        dataIndex: 'loginAddress',
        align: 'center',
        ellipsis: true
      },
      {
        title: '操作模块',
        dataIndex: 'operationModel',
        align: 'center',
        ellipsis: true
      },
      {
        title: '操作时间',
        dataIndex: 'operationTime',
        align: 'center',
        render: (item) => item && moment(item).format('YYYY-MM-DD HH:mm:ss'),
        ellipsis: true
      },
      {
        title: '性别',
        dataIndex: 'gender',
        align: 'center',
        render: (item) => item && item ? '男' : '女',
        ellipsis: true
      },
      {
        title: '操作',
        key: 'active',
        align: 'center',
        width: 150,
        fixed: 'right',
        render: (item) => (
          <div style={{ textAlign: "center" }}>
            <span className='my-a' onClick={() => changeDetailStatus(item)}>查看</span>
          </div>
        ),
        ellipsis: true
      }
    ]
    return (
      <Fragment>
        <Card>
          <Search
            searchData={LogsSearchData}
            butList={LogsBtnList}
            handleClick={(type, params) => this.handleClick(type, params)}
          />
          <Card>
            <Table
              bordered
              size="small"
              rowKey='id'
              columns={colums}
              dataSource={logs}
              pagination={{
                // showSizeChanger: true,
                showTotal: total => `共 ${total} 条`,
                onChange: ((page, pageSize) => {
                  handlePagination(page, pageSize)
                })
              }}
            />
          </Card>
        </Card>
        <Detail
          visiable={detailVisibleStatus}
          detailList={logsDetail}
          detailData={logsInfo}
          handleCancle={onCancle}
          handleClose={() => this.handleClose()}
        />
      </Fragment>
    )
  }
}

const MapState = (state) => {
  return {
    pagination: state.getIn(['system', 'pagination']),
    detailVisibleStatus: state.getIn(['system', 'detailVisibleStatus']),
    query: state.getIn(['system', 'query']),
    logsInfo: state.getIn(['system', 'logsInfo']),
  }
}

const MapDispatch = (dispatch) => {
  return {
    handlePagination(page, pageSize) {
      const query = {
        pageNumber: page,
        pageSize: pageSize
      }
      dispatch(actionCreators.setChangePagination(query))
    }, 
    changeDetailStatus(item) {
      dispatch(actionCreators.setLogsHandleDetail(item))
    },
    onCancle() {
      dispatch(actionCreators.setSystemDetailStatus(false))
    },
  }
}

export default connect(MapState, MapDispatch)(Logs)