/**
 * system user 详情
 */

const detailUser = {
  width: 800,
  title: '用户信息',
  list: [
    {
      name: 'username',
      label: '用户名'
    },
    {
      name: 'gender',
      label: '性别'
    },
    {
      name: 'rIp',
      label: '注册IP地址'
    },
    {
      name: 'rTime',
      label: '注册时间'
    },
    {
      name: 'rNation',
      label: '注册国家'
    },
    {
      name: 'rProvince',
      label: '注册省份'
    },
    {
      name: 'rCity',
      label: '注册城市'
    },
    {
      name: 'lastLoginAddress',
      label: '上一次登陆地址'
    },
    {
      name: 'lastLoginTime',
      label: '上一次登陆时间'
    }
  ]
}

const logsDetail = {
  width: 800,
  title: '日志详情',
  list: [
    {
      name: 'username',
      label: '用户名'
    },
    {
      name: 'gender',
      label: '性别'
    },
    {
      name: 'loginAddress',
      label: '登录地点'
    },
    {
      name: 'operationModel',
      label: '操作模块'
    },
    {
      name: 'operationTime',
      label: '操作时间'
    }
  ]
}
export {
  detailUser,
  logsDetail
}