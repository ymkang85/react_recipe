import React from 'react'
import Slide from '../components/Slide'
import Delivery from '../components/Delivery'
import Weeks from '../components/Weeks'
import Recipe from '../components/Recipe'

const Main = () => {
    return (
        <div>
            <Slide />
            <Delivery />
            <Weeks />
            <Recipe />
        </div>
    )
}

export default Main