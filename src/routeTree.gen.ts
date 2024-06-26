/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardLayoutImport } from './routes/_dashboard-layout'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardLayoutDashboardIndexImport } from './routes/_dashboard-layout/dashboard/index'
import { Route as DashboardLayoutDashboardSingleBoxImport } from './routes/_dashboard-layout/dashboard/single-box'
import { Route as DashboardLayoutDashboardMultiBoxImport } from './routes/_dashboard-layout/dashboard/multi-box'

// Create/Update Routes

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/_dashboard-layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardLayoutDashboardIndexRoute =
  DashboardLayoutDashboardIndexImport.update({
    path: '/dashboard/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutDashboardSingleBoxRoute =
  DashboardLayoutDashboardSingleBoxImport.update({
    path: '/dashboard/single-box',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

const DashboardLayoutDashboardMultiBoxRoute =
  DashboardLayoutDashboardMultiBoxImport.update({
    path: '/dashboard/multi-box',
    getParentRoute: () => DashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard-layout': {
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_dashboard-layout/dashboard/multi-box': {
      preLoaderRoute: typeof DashboardLayoutDashboardMultiBoxImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/_dashboard-layout/dashboard/single-box': {
      preLoaderRoute: typeof DashboardLayoutDashboardSingleBoxImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/_dashboard-layout/dashboard/': {
      preLoaderRoute: typeof DashboardLayoutDashboardIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  DashboardLayoutRoute.addChildren([
    DashboardLayoutDashboardMultiBoxRoute,
    DashboardLayoutDashboardSingleBoxRoute,
    DashboardLayoutDashboardIndexRoute,
  ]),
])

/* prettier-ignore-end */
