import React from 'react'
import banner from '../assets/images/banner.jpg'

const AboutUs = () => {
  return (
    <section className='about'>
       <div className="text-content">
       <h1>About Us</h1>

       <p>Listing is a company that is devoted to offering ideal and satisfactory services at affotdable prices.</p>

       <p>Our services are easy to use, our platform has a large array of various services or custmers to choose from</p>

       <p>We are Safe, Trusted and Reliable for all your service Needs.</p>
       </div>
       <div className="banner">
        <img src={banner} alt="" />
       </div>
    </section>
  )
}

export default AboutUs
