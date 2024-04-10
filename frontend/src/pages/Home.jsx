import Header from '../components/Header'
import Explore from '../components/Explore'
import { useState } from 'react'
import FoodDisplay from '../components/FoodDisplay';

const Home = () => {

  const[category,setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home 