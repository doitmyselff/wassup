import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "574b156d-0731-49cd-a37d-3060327b15e2");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Email Submitted Successfully");
            event.target.reset();
            event.target,reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
    
      
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=""/></h3>
            <p>Feel free to reach out through contact informatiion below.Your feedback, questions and suggestions are important to us as we thrive to provide exceptional service to our university community. </p>
            <ul>
  <li>
    <img src={mail_icon} alt="" />
    <a href="mailto:Contact@GreatStack.dev">Contact@GreatStack.dev</a>
  </li>
  <li>
    <img src={phone_icon} alt="" />
    <a href="tel:+254734876576">+254734876576</a>
  </li>
  <li>
    <img src={location_icon} alt="" />
    <a 
      href="https://www.google.com/maps/search/?api=1&query=50204+Kimilili,+Bungoma,+Kenya" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      50204 Kimilili, Bungoma<br />1156, Kenya
    </a>
  </li>
</ul>

        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                
                <label>Phone Number</label>
                <input type="text" name="name" placeholder='Enter your phone number' required/>
               
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit<img  src={white_arrow} alt=""/></button>
               
                
            
            
            </form>
            <span>{result}</span>

        </div>
      
    </div>
  )
}

export default Contact
