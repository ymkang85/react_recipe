import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        배달앱을 다운 받으시면 <span className='font-bold ms-3'>배달이 무료</span>
      </h3>
      <div className='max-w-[1000px] mx-auto grid md:grid-cols-2'>
        <img src="images/delivery.svg" className='w-[500px] mx-auto my-4' />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">GET A APP</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            매일 다른 레시피 요리 제공
          </h1>
          <p className='py-2'>
            품고 같이, 대한 이상은 지혜는 사막이다. 맺어, 청춘의 인생에 모래뿐일 뛰노는 우리 긴지라 가지에 것이다. 힘차게 평화스러운 천하를 심장은 곧 아니다.
          </p>
          <p className='py-2'>
            우리 영락과 대중을 것은 있을 청춘의 하여도 천자만홍이 약동하다. 끝에 그것을 그러므로 품고 교향악이다. 사랑의 곳으로 바로 살았으며, 대중을 위하여, 끓는다.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 auto md:mx-0 py-3'> Got Download </button>
        </div>
      </div>
    </div>
  )
}

export default Delivery