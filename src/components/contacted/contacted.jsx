import React from 'react';
import './contacted.css';

function Contacted() {
    return (
     
      <div className="contact">
       
        
        
        <form>
        <h1>Contactez-nous</h1>
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
  export default Contacted;