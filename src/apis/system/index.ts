import http from '@/utils/http'
const prefix = '/mock'
import type { ApiListData } from '../type'
import type { ApiDeptItem, ApiRoleItem, ApiUserItem } from './type'

/** @desc 获取部门数据 */
export function getSystemDeptList() {
  return http.get<ApiListData<ApiDeptItem[]>>(`${prefix}/system/dept/list`)
}

/** @desc 获取用户数据 */
export function getSystemUserList() {
  return http.get<ApiListData<ApiUserItem[]>>(`${prefix}/system/user/list`)
}

/** @desc 获取角色数据 */
export function getSystemRoleList() {
  return http.get<ApiListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
}