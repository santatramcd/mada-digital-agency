import React from "react";






export default function Home() {
  return (
    <>
<div>
<section id="contact" className="contact section">

<div className="container section-title" data-aos="fade-up">
  <h2>Contact</h2>
  <p>Contact Us</p>
</div>

<div className="container" data-aos="fade-up" data-aos-delay="100">

  <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
    <iframe style={{border:0, width: "100%", height: "270px" }}src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>

  <div className="row gy-4">

    <div className="col-lg-4">
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>Madagascar , Antananarivo , 101</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+261 32 46 658 49</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>info@santatra-michado.com</p>
        </div>
      </div>

    </div>

    <div className="col-lg-8">
      <form className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" placeholder="Your Email" ></input>
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" placeholder="Subject" ></input>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" rows="6" placeholder="Message"></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</div>

</section>
</div>
    
    </>
  );
}
