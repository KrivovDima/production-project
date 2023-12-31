import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from '../config/config'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routesConfig.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
            </Routes>
          </Suspense>
  )
}
