import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout, { loader as rootLoader } from './Layout/RootLayout/RootLayout.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import MeetUp from './pages/MeetUp/MeetUp.jsx'
// import Change from './pages/Change/Change.jsx'
import Change, { action as add } from './pages/Change/Change.jsx'
import MyPage from './pages/MyPage/MyPage.jsx'
import Detail, { loader as detail } from './pages/Detail/Detail.jsx'
import Edit, { action as edit } from './pages/Edit/Edit.jsx'
import { action as del } from './pages/Delete/Delete.js'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    loader: rootLoader,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/change',
        element: <Change />,
        action: add,
      },
      {
        path: '/meetup',
        element: <MeetUp />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
        loader: detail,
      },
      {
        path: '/detail/:id/edit',
        element: <Edit />,
        loader: detail,
        action: edit
      },
      {
        path: '/detail/:id/delete',
        action: del
      },
      {
        path: '/mypage',
        element: <MyPage />
      }
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
