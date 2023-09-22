import React from 'react'
import CategoryCard from '../card/CategoryCard'
import {category} from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1540px] mx-auto my-12'>
        <h1 className="text-orange-500 font-bold text-2xl text-center py-2">Our Category</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
            {
                category.map(item => (
                    <CategoryCard key={item.id} img={item.images} name={item.name} />
                ))
            }
        </div>
    </div>
  )
}

export default Category