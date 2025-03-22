import React from 'react'
import home_img from './assets/slide-7.webp'

export default function Home() {
  return (
    <div>
        <section className="home" id="home">
        <div className="content">
         <div className="text">
            <h3>its time</h3>
            <h3>to celebrate!</h3>
            <h3>the best </h3>
            <h3> 
              <span> Event organizers</span> 
            </h3>
            <a href="#" className="btn"> Contact Us </a>
            <a href="#" className="btn"> book now </a>
          </div>
          <div className="img">
            <img src={home_img} alt="home image"/> 
          </div>
        </div>
        </section>
    </div>
  )
}
