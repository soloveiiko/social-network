import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import WelcomePage from '../pages/WelcomePage'
import ProfilePage from '../pages/ProfilePage'
import DialogsPage from '../pages/DialogsPage'
import UsersPage from '../pages/UsersPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProtectedRoute from './ProtectedRoute'
import NoAccessPage from '../pages/NoAccessPage'

const AppRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="/profile/:id?" element={<ProfilePage />} />
      <Route path="/dialogs" element={<DialogsPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/403" element={<NoAccessPage />} />
    </Routes>
  )
}

export default AppRoutes
