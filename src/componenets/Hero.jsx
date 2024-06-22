import React from 'react'

const Hero = () => {
  return (
    <section className='hero'>

        <div className="text-content">
            <h1>The Supreme Platform For All Your Service Needs</h1>
            <p>Listing offers the most efficient order and delivery for various products and services.</p>
        </div>

       <div className="heroes-container">
       <div className="heroes contactus-card">
            <h1>Contact Us</h1>
            <p>Contact Us so you can get your desired product and hear complaints.</p>
            <a href="/contact"><button className="btn btn-contact">Contact Us</button></a>
        </div>

        <div className="heroes about-card">
            <h1>About Us</h1>
            <p>Who we are, our history,  what we offer and why we are the best!</p>
            <a href="/about"><button className="btn btn-contact">About Us</button></a>
        </div>

        <div className="heroes Products-card">
            <h1>Products</h1>
            <p>A list of various high quality Products you can choose from.</p>
            <a href="/products"><button className="btn btn-contact">Products</button></a>
        </div>
       </div>
    </section>
  )
}

export default Hero
