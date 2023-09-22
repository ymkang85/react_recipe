import { AiFillHeart } from 'react-icons/ai'

const RecipeCard = (props) => {
  return (
    <div key={props.id} className="group border-none hover:scale-105 duration-300 transition-all relative overflow-hidden ">
              <img src={props.img} alt={props.name} className='w-full h-[250px] object-cover transition-all duration-300 rounded-lg hover:brightness-90' />
              <a href="#" className="bg-yellow-400 bg-opacity-75 rounded-full border-orange-700 w-[40px] h-[40px] flex justify-center items-center text-orange-700 text-xl absolute top-4 right-4"><AiFillHeart /></a>
              <div className="absolute bg-black text-white py-5 px-5 left-0 w-full h-2/5 rounded-tr-lg rounded-tl-lg -top-20 bg-opacity-0 group-hover:bg-opacity-70 group-hover:top-0 transition-all duration-500">
                <p className='text-white font-bold'>가격:  {props.price}원</p>
                <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 border mr-5 border-gray-900 rounded h-9">장바구니</button>
                <button className="bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 border mr-5 border-gray-900 rounded h-9">상품구매</button>
              </div>
              <div className='flex pt-2 pb-2 px-2'>
                <p className='font-bold'>{props.title}</p>
              </div>
            </div>
  )
}

export default RecipeCard