import React from 'react';
import "./../../../public/css/Contact.css"


import Faq from './Faq';
function Contact() {
    return (
     
      <div className="contact">
       
        <h1>Contactez-nous</h1>
        
        <form>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <label>
            Email :
            <input type="email" name="email" />
          </label>
          <label>
            Message :
            <textarea name="message" />
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
        
    );
  }
  export default Contact;