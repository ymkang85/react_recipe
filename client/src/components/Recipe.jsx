import React, { useState } from 'react'
import { ArrowSmRight } from 'react-icons/hi'
import { ArrowSmLeft } from 'react-icons/hi'
import { AiFillHeart } from 'react-icons/ai'
import { recipeData } from '../data/data'

const Recipe = () => {
  const [foods, setFoods] = useState(recipeData);
  const category=(cat)=>{
    setFoods(
      recipeData.filter((item) =>{
        return item.category === cat;
      })
    );
  };
  
  return (
    <>
    <div className="max-w-[1540px] mx-auto my-12">
      <h1 className='text-orange-500 font-bold text-2xl text-center'>상품목록</h1>

      {/** 카테고리 **/}
    <div className="flex flex-col lg:flex-row justify-center">
      <button className='m-1 border-orange-700 textwhite bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700'onClick={()=>setFoods(recipeData)}> 전체보기 </button>
      <button className='m-1 border-orange-700 textwhite bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700' onClick={()=>category("한식")}> 한식 </button>
      <button className='m-1 border-orange-700 textwhite bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700' onClick={()=>category("중식")}> 중식 </button>
      <button className='m-1 border-orange-700 textwhite bg-orange-700 hover:bg-orange-100 hover:text-orange-950 hover:border-orange-700' onClick={()=>category("양식")}> 양식 </button>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
      {foods.map((item)=>(
        <div key={item.id} className="group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden ">
          <img src={item.img} alt={item.name} className='w-full h-[250px] object-cover transition-all duration-300 rounded-lg hover:brightness-90'/>
          {/* <div className="bg-yellow-300 h-[250px]  text-base pt-3 leading-9 font-bold">
            <p className='text-red-500 text-xl'>{item.title}</p><br />
            <p className='text-blue-500'>재료:  { item.material }</p>
            <p className='text-green-500'>종류:  {item.category}</p>
            <p className='text-violet-500'>가격:  {item.price}원</p>
          </div>
          <div className='hidden'style="">{item.content}</div> */}
          <a href="#" className="bg-yellow-400 bg-opacity-75 rounded-full border-orange-700 w-[40px] h-[40px] flex justify-center items-center text-orange-700 text-xl absolute top-4 right-4"><AiFillHeart /></a>
          <div className="absolute bg-black text-white py-5 px-5 left-0 w-full h-2/5 rounded-tr-lg rounded-tl-lg -top-20 bg-opacity-0 group-hover:bg-opacity-70 group-hover:top-0 transition-all duration-500">
            <p className='text-white font-bold'>가격:  {item.price}원</p>
            <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 border mr-5 border-gray-900 rounded h-9">장바구니</button>
            <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 border mr-5 border-gray-900 rounded h-9">상품구매</button>
          </div>
          <div className='flex pt-2 pb-2 px-2'>
            <p className='font-bold'>{item.title}</p>
          </div>
        </div>
        
      ))}
    </div>
    </div>
    </>
  )
}

export default Recipe