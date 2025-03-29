import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from "react-redux"
import { store } from './store/store.js'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import EditUser from './pages/EditUser.jsx'
import UserLayout from './pages/UserLayout.jsx'
const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Login />}></Route>

      <Route path='user' element={<UserLayout />}>
        <Route path='/user/' element={<Home />}></Route>
        <Route path='/user/editPage/:userId' element={<EditUser />}></Route>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <RouterProvider router={myRouter}>

      </RouterProvider>
    </Provider>

  </StrictMode>,
)
