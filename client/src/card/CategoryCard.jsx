import React from 'react'

const CategoryCard = ({id, name, img}) => {
  return (
    <a href="#" className='p-4 flex flex-col justify-center border items-center rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 hover:bg-slate-100'>
        <img src={img} alt={name} className='w-[120px] h-[120px] object-cover border-4 ronded-full' />
        <p className="text-center pt-2">
            {name}
        </p>
    </a>
  )
}

export default CategoryCard