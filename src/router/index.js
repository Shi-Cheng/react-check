import HomeSecurity from '../pages/home'
import HashSecurity from '../pages/security/Hash'
import CheckSecurity from '../pages/security/Check'
import SmFourSecurity from '../pages/security/SmFour'
import KeySecurity from '../pages/security/Key'
import UserSecurity from '../pages/system/user'
import LogsSecurity from '../pages/system/logs'


const menu = [
  {
    name: '首页',
    path: '/home',
    icon: 'icon-home',
    key: 'home'
  },
  {
    name: '哈希/散列',
    path: '/hash',
    icon: 'icon-unlock',
    key: 'hash'
  },
  {
    name: 'sm4加解密',
    path: '/sm',
    icon: 'icon-unlock',
    key: 'sm'
  }, {
    name: '密钥合规性',
    path: '/key',
    icon: 'icon-unlock',
    key: 'keys'
  }, {
    name: '数字证书',
    path: '/check',
    icon: 'icon-unlock',
    key: 'check'
  },
  
  {
    name: '系统管理',
    path: '/system',
    icon: 'icon-setting',
    key: 'system',
    children: [
      {
        name: '系统用户',
        path: '/system/user',
        icon: 'icon-user',
        key: 'user',
      }, {
        name: '系统日志',
        path: '/system/logs',
        icon: 'icon-survey',
        key: 'logs',
      }
    ]
  }
]

const tabs = [
  { key: 'home', path: '/home', component: HomeSecurity },
  { key: 'hash', path: '/hash', component: HashSecurity },
  { key: 'sm', path: '/sm', component: SmFourSecurity },
  { key: 'keys', path: '/key', component: KeySecurity },
  { key: 'check', path: '/check', component: CheckSecurity },
  { key: 'user', path: '/system/user', component: UserSecurity },
  { key: 'logs', path: '/system/logs', component: LogsSecurity }
]

export {
  menu,
  tabs
}
