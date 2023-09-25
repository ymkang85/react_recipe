import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { recipeData } from '../data/data';
import DetailView from './DetailView';

const Detail = () => {
const [food, setFood] = useState([]);   
const {productId} = useParams();
const details = () => {
    return recipeData.filter((item)=>( item.id === parseInt(productId)));
}

console.log(productId);

useEffect(()=>{
    setFood(details);
}, []);

console.log(food);

    return (
    <div className="app text-center">
        <div>          
          {
             food.map((item)=>(
                <DetailView 
                   id={item.id}
                   title={item.title}
                   img={item.img}
                   material={item.material}
                   price={item.price}
                   cate={item.category}
                   content = {item.content}
                />   
             ))
          }
        </div>
        <div><Link to="/">메인페이지로 이동</Link></div> 
    </div>
  )
}

export default Detail