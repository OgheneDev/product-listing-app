import React from 'react'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'

const Footer = () => {
  return (
    <footer>
        <div className="content">
        <div className="title"><a href="/"><h1>Listing</h1></a></div>

        <article>
            <h4>Let Us Help you get your desired product</h4>
            <p>Check our Product List for your desired Product</p>
        </article>
        </div>

        <div className="navigation">
            <ul className='navigation-links'>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/products">Products</a></li>
            </ul>

            <ul className='socials'>
                <li className='facebook'><a href="https://www.facebook.com/emmanuel.oghene.792"><img src={facebook} alt="" /></a></li>
                <li><a href="https://www.instagram.com/lou_bloom14?ighs=YzljYTk1ODg3Zg=="><img src={instagram} alt="" /></a></li>
                <li><a href="https://x.com/LouBloom2014?t=lVF7bvZh32IK27_uhYWJzg&s=09"><img src={twitter}alt="" /></a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer
