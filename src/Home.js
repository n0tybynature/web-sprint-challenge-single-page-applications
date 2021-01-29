import React from 'react'
import {BrowserRouter, useHistory, Link} from "react-router-dom"

export default function Home() {
  const history = useHistory();

  const homePage = () => {
    history.push();
  }

  return (
    <div className='home-wrapper'>
      <img
        className='pizzaimage'
        src='https://img-global.cpcdn.com/recipes/658cd407934ba702/1200x630cq70/photo.jpg'
        alt='pizzza'
        
      />
      <button 
        onClick={homePage}
        className='md-button shop-button'
      >
        <Link to='/Form'>ORDER NOW!</Link>
      </button>
      <div className="footerdiv">
        <h2>Lambda Pizza</h2>
        <footer>
          <nav>
            <ul><a href="https://www.pizzahut.com/#/contactus" target="_blank">Contact Us</a></ul>
            <ul><a href="https://blog.pizzahut.com/our-story/" target="_blank">Story</a></ul>
            <ul><a href="https://jobs.pizzahut.com/" target="_blank">Careers Us</a></ul>
          </nav>
        </footer>
      </div>
    </div>
  
  )
}