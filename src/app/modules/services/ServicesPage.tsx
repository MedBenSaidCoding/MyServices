import React, {useEffect} from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle, useLayout} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Offers} from './components/Offers'
import {HouseworkService} from './components/HouseworkService'
import {MoveService} from './components/MoveService'
import {GardeningService} from './components/GardeningService'
import {ServicesHeader} from './ServicesHeader'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Services',
    path: '/services/housework',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ServicesPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route
          path='housework'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Housework</PageTitle>
              <HouseworkService />
            </>
          }
        />
        <Route
          path='move'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Move</PageTitle>
              <MoveService />
            </>
          }
        />
        <Route
          path='gardening'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Gardening</PageTitle>
              <GardeningService />
            </>
          }
        />
        <Route
          path='offers'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Offers</PageTitle>
              <Offers />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/overview' />} />
      </Route>
    </Routes>
  )
}

export default ServicesPage
