import Header from '../components/Header'
import Explore from '../components/Explore'
import { useState } from 'react'
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';

const Home = () => {

  const[category,setCategory] = useState("All");

  return (
    <div className="w-full">
        <Header/>
        <Explore category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home 