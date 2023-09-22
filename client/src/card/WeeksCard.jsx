import React from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import { BsFillHeartFill } from 'react-icons/bs';

const WeeksCard = ({id, img, title, price}) => {
    return (
        <SplideSlide>
            <div className="relative 
                            bg-gray-100 
                            mb-10 
                            max-w-sm 
                            rounded 
                            overflow-hidden 
                            drop-shadow-md
                            transition
                            duration-500
                            ease-in-out
                            hover:drop-shadow-xl"
            >
                <img className="w-full h-[350px]" src={img} alt={id} />
                <div className="px-6 py-5">
                    <p className="px-2 pt-2 font-bold text-xl mb-2 truncate">
                        {title}
                    </p>
                    <p className="px-2 pb-5">{price}원</p>
                    {/* <p>{getDay}</p> */}
                    <div className="flex justify-between align-middle">
                        <button className="bg-gray-600 
                                        hover:bg-gray-900 
                                        text-white 
                                        font-bold
                                        py-2 px-4 border
                                        mr-5 border-gray-900 rounded">
                            레시피 보기
                        </button>
                        <button className="bg-gray-600 
                                        hover:bg-gray-900 
                                        text-white 
                                        font-bold
                                        py-2 px-4 border border-gray-900 rounded">
                            장바구니
                        </button>
                        <a href="#"><BsFillHeartFill className="text-2xl text-orange-600" style={{ "marginTop": "10px" }} /></a>
                    </div>
                </div>
            </div>
        </SplideSlide>
    )
}

export default WeeksCard