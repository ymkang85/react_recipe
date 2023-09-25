import React from 'react'

const DetailView = ({ id, title, img, material, price, cate, content }) => {
  return (
    <div className='app pt-5 items-center flex'>
      <div>
        <h2 className='text-5xl text-bolder pb-7'>{title}</h2>
        <div className="w-[500px] mx-auto">
          <img src={`../${img}`} alt={title} />
        </div>
        <div>
          
        </div>

        <p className='w-[1000px] items-center'> {content}</p>
      </div>
    </div>
  )
}

export default DetailView