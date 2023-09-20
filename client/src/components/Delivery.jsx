import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className="text-orange-500 font-bold text-2xl text-center">
            배달앱을 다운 받으시면 <span className='font-bold ms-3'>배달이 무료</span>
        </h3>
        <div className='max-w-[1000px] max-auto grid md:grid-col-2'>
            <img src="images/delivery.svg" className='w-[500px] mx-auto my-4' />
        </div>
    </div>
  )
}

export default Delivery