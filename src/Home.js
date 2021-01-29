import React from 'react'
import {useHistory} from "react-router-dom"

export default function Home() {
  const history = useHistory();

  const homePage = () => {
    history.push();
  }

  return (
    <div className='home-wrapper'>
      <img
        className='pizzaimage'
        src='https://www.seriouseats.com/recipes/images/2016/05/20160503-spicy-spring-pizza-recipe-37.jpg'
        alt='pizzza'
      />
      <button
        onClick={homePage}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}