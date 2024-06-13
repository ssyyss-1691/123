import { lazy, Suspense } from 'react'
import { Outlet, Navigate, useRoutes } from 'react-router-dom'

import Layouts from 'src/Layouts/Layouts'

export const IconKitchen = lazy(() => import('src/IconKitchen/IconKitchen'))
export const Charts = lazy(() => import('src/Charts/Charts'))
export const UserTable = lazy(() => import('src/UserTable/UserTable'))
export const ProductsPage = lazy(() => import('src/Products/Products'))
export const Page404 = lazy(() => import('src/components/page-not-found'))

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Layouts>
          <Suspense>
            <Outlet />
          </Suspense>
        </Layouts>
      ),
      children: [
        { element: <Charts />, index: true },
        { path: 'Kitchen', element: <IconKitchen /> },
        { path: 'products', element: <UserTable /> },
        { path: 'ProductsPage', element: <ProductsPage /> }
      ]
    },
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    {
      path: '404',
      element: <Page404 />
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return routes
}
