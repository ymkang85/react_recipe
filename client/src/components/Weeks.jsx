import React from 'react'
import { Splide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import { weeksRecipe } from '../data/data'
import WeeksCard from '../card/WeeksCard';

const Weeks = () => {
  return (
    <div className="max-w-[1540px] mx-auto">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">한 주 레시피</h1>
      <div className="overflow-hidden lg:flex-max-w-[1520px] m-auto py-2 px-2">
        <Splide
          options={{
            perPage: 4,
            gap: "1.5rem",
            grag: "free",
            arrow: false
          }}
        >
          {weeksRecipe.map((item) => {
            const price = item.price.toLocaleString();
            return (
              < WeeksCard key={item.id} img = {item.img} id = {item.id} title={item.title} price = {price}/>
            )
          })}
        </Splide>
      </div>
    </div>
  )
}

export default Weeks