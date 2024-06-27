import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Profile from './pages/ProfilePage/Profile.jsx'
import CourtDetails from './pages/CourtDetailsPage/CourtDetails.jsx'
import TurfCreation from './pages/TurfCreationPage/TurfCreation .jsx'
import TurfUpdation from './pages/TurfUpdationPage/TurfUpdation.jsx'
import CreateUser from './pages/AddUserPage/CreateUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/auth',
    element: <AuthPage/>
  },
  {
    path: '/homepage',
    element: <HomePage/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/turf-details',
    element: <CourtDetails/>
  },
  {
    path: '/create-new-turf',
    element: <TurfCreation/>
  },
  {
    path: '/update-turf',
    element: <TurfUpdation/>
  },
  {
    path: '/create-new-user',
    element: <CreateUser/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
)
