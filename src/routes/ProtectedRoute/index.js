import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ children, isAuth, redirectPath = '/403' }) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoute
