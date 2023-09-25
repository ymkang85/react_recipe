import React from 'react'
import { RouterProvider  } from 'react-router-dom'
import router from './router/router'
import TopNav from './components/TopNav'
import Category from './components/Category'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <TopNav />
      <RouterProvider router={router} />
      <Category />
      <Footer />
    </>
  )
}

export default App