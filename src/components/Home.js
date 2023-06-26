import React from 'react';
import { useState,useEffect } from 'react';
import budget from './Images/budget.png'

const Home = () => {
  const [currentIndex,setCurrentIndex] = useState(0);
  const positions = ["MERN Stack developer","Btech Student","Ex-SWE Intern at VitaVings",""]
  useEffect(() => {
    if (currentIndex === positions.length - 1) {
      setCurrentIndex(0);
    }
    const interval = setInterval(() => {
      const updatedData = currentIndex + 1;
      setCurrentIndex(updatedData);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className='home-content' id="home">
        <div className='content text-center p-5'>
                <h2 className='name'>I'm <br></br>Teja Chavva</h2>
                <h1 className='position'>{positions[currentIndex]}</h1>
        </div>
        {/* <div className='home-image'>
            <img src={home} alt="Perfection" />
        </div> */}

    </div>
  )
}

export default Home
