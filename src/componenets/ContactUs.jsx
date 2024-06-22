import React from 'react'

const ContactUs = () => {
  return (
    <section className='contact'>

        <div className="text-content">
        <h1>Contact Us</h1>
        <p>We are eager to hear your feedbacks,take your orders and listen to your complaints</p>
        </div>

        <div className="contact-cards">
            <div className="contact-card">
              <h4>Message us on Whatsapp:</h4>
              <p>(+234) 08071920976</p>
              <a href=" https://wa.me/08071920976"><button className="btn-contact-button">Locate</button></a>
            </div>

            <div className="contact-card">
              <h4>Send us an email:</h4>
              <p>emmanueloghene72@gmail.com</p>
              <a href=""><button className="btn-contact-button">Email</button></a>
            </div>

            <div className="contact-card">
              <h4>Location:</h4>
              <p>Ekiti State University</p>
              <a href=""><button className="btn-contact-button">Locate</button></a>
            </div>
        </div>
    </section>
  )
}

export default ContactUs
