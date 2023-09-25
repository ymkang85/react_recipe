import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs';
import { HiArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const RecipeCard = (props) => {
  return (
    <div key={props.id}
      className="group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden">
      <img src={props.img} alt={props.name}
        className="w-full h-[250px] object-cover rounded-lg transition-all duration-300 hover:brightness-50" />
      <a href="#" className=" bg-white bg-opacity-75 rounded-full border-orange-700 w-[40px] h-[40px] flex justify-center items-center text-orange-700 text-xl absolute top-4 right-4" ><BsFillHeartFill /></a>
      <div className=" absolute bg-black text-white  py-5 px-5 -top-36 left-1/2 -translate-x-1/2
          bg-opacity-0
          group-hover:bg-opacity-70
          group-hover:top-16
          h-7/12
          w-9/12
          rounded-lg
          transition-all duration-500
          ">
        <p className="text-center bold">
          {props.price.toLocaleString()}원
        </p>
        <div className="py-2 text-center flex justify-between color-white text-xl">
          <a href="#">내용보기</a>
          <a href="#"><HiArrowSmRight /></a>
        </div>
        <div className="flex m-auto w-w-11/12 justify-between">
          <button className="bg-orange-500 hover:bg-orange-700 font-bold py-2 px-4 rounded">장바구니</button>
          <Link to={`detail/${props.id}`} className="bg-orange-500 hover:bg-orange-700 font-bold py-2 px-4 rounded">레시피보기</Link>
        </div>
      </div>
      <div className="flex pt-2 pb-6 px-2">
        <p className="font-bold">{props.title}</p>
      </div>
    </div>
  )
}

export default RecipeCard