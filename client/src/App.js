import React from 'react'
import TopNav from './components/TopNav'
import Slide from './components/Slide'
import Delivery from './components/Delivery'
import Weeks from './components/Weeks'
import Recipe from './components/Recipe'
import Category from './components/Category'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App'>
      <TopNav />
      <Slide />
      <Delivery />
      <Weeks />
      <Recipe />
      <Category />
      <Footer />

    </div>
  )
}

export default App