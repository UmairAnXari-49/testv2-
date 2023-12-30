import React from "react";
import "./ContactSection.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4";

function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-section" id="contact">
      <div className="background-title-contact">CONTACT</div>

      <div className="form-container">
        <video autoPlay loop muted className="contact-form-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="form-overlay">
         


          <form name="contact" method="post">
      <div>
        <label htmlFor="name">Full Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jane Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="doe@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label> <br />
        <textarea
          id="message"
          name="message"
          placeholder="Your message here!"
          required
        ></textarea>
      </div>
      <div>
        <input type="submit" className="submit" value="Send Message" />
      </div>
    </form>



          
       

          
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
