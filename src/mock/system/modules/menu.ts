import type { MockMethod } from 'vite-plugin-mock'
import { successResponseWrap, failResponseWrap } from '@/mock/mock'
import { menus } from './data/menu'
import { MockMenuItem } from './data/type'
import { mapTree, findTree } from 'xe-utils'
import { transformPathToName, filterTree } from '@/utils/common'

const sortTree = (value: typeof menus) => {
  value?.sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0)) // 排序
  return mapTree(value, (item) => {
    item.children?.sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0)) // 排序
    return item
  })
}

const getRoleMenus = (value: typeof menus, roles: string[]) => {
  // 排序过后的数据
  const sortData = sortTree(value)
  // 如果是超级管理员角色
  if (roles.includes('role_admin')) return sortData
  // 如果是普通用户角色
  const userRoleMenu = filterTree<MockMenuItem>(
    sortData,
    (i) => i.path !== '/system' && i.roles.some((i) => roles.includes(i))
  )
  return userRoleMenu
}

export default [
  {
    url: '/mock/user/routes',
    method: 'get',
    timeout: 10,
    response: ({ headers }) => {
      const token = headers.token
      const isAdmin = token === 'TOKEN-admin'
      const roles = isAdmin ? ['role_admin'] : ['role_user']
      const data = getRoleMenus(menus, roles)
      const routes = mapTree(data, (item) => {
        const meta: any = {
          hidden: item.hidden,
          keepAlive: item.keepAlive
        }
        if (item.title) {
          meta.title = item.title
        }
        if (item.svgIcon) {
          meta.svgIcon = item.svgIcon
        }
        if (item.icon) {
          meta.icon = item.icon
        }
        if (item.affix === false) {
          meta.affix = item.affix
        }
        if (item.activeMenu) {
          meta.activeMenu = item.activeMenu
        }
        if (item.breadcrumb === false) {
          meta.breadcrumb = item.breadcrumb
        }
        if (item.alwaysShow === true) {
          meta.alwaysShow = item.alwaysShow
        }
        meta.roles = item.roles?.length ? item.roles : []
        meta.permissions = item.permissions?.length ? item.permissions : []

        return {
          component: item.component,
          path: item.path,
          name: transformPathToName(item.path),
          meta: meta,
          redirect: item.redirect
        }
      })

      if (token && ['TOKEN-admin', 'TOKEN-user'].includes(token)) {
        return successResponseWrap(routes)
      } else {
        return failResponseWrap(null, 'token失效', 401)
      }
    }
  },
  {
    url: '/mock/system/menu/detail',
    method: 'get',
    timeout: 100,
    response: ({ query }) => {
      const { id } = query
      let obj = findTree(menus, (i) => i.id === id)
      if (obj.item) {
        return successResponseWrap(obj.item)
      } else {
        return failResponseWrap(null, '没有该部门', 400)
      }
    }
  },
  {
    url: '/mock/system/menu/save',
    method: 'post',
    timeout: 350,
    response: () => {
      return successResponseWrap(true)
    }
  },
  {
    url: '/mock/system/menu', // 这个短的要放在后面，不然会优先匹配
    method: 'get',
    timeout: 10,
    response: () => {
      return successResponseWrap(mapTree(menus, (i) => ({ ...i })))
    }
  }
] as MockMethod[]
