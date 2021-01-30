import React from 'react'
import {BrowserRouter, useHistory, Link} from "react-router-dom"
import photo from "./photos/photo.jpg"

export default function Home() {
  const history = useHistory();

  const homePage = () => {
    history.push();
  }

  return (
    <div className='home-wrapper'>
      <img
        className='pizzaimage'
        src={photo}
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
            <ul>
              <li><a href="https://www.pizzahut.com/#/contactus" target="_blank">Contact Us</a></li>
              <li><a href="https://blog.pizzahut.com/our-story/" target="_blank">Story</a></li>
              <li><a href="https://jobs.pizzahut.com/" target="_blank">Careers Us</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  
  )
}