
import React, { useState } from 'react';
import "./payement.css";




const PayementForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [rememberCard, setRememberCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      // Validate the form fields
    if (!cardNumber || !expiryDate || !cvv || !name) {
      alert('Please fill in all required fields');
      return;
    }



    // Effectuer les actions nécessaires avec les données du formulaire
    // Par exemple, envoyer les informations de paiement au serveur

    // Réinitialiser les champs du formulaire
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setName('');
    setRememberCard(false);
  };

  return (

  <div>
    <form onSubmit={handleSubmit}>
    <h2 className='title'>payement method</h2>

      <div className='items'>
      <div >
      <div>
        <label htmlFor="cardNumber">Numero de carte :</label>
        <input
        placeholder='cardNumber*'
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
          style={{ border_bottom: !cardNumber && '2px solid red' }}   
        />
      </div>

      <div className='date'>
        <label htmlFor="expiryDate">Date d'expiration :</label>
        <input
        placeholder='expiryDate*'
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
         
        />
      </div>
      </div>
      <div>
     
      <div>
        <label htmlFor="name">Nom :</label>
        <input
                placeholder="Name on card*"

          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="cv">
        <label htmlFor="cvv">Cvv:</label>
        <input
          placeholder='Cvv*'
          type="text"
          required
          id="cvv"
          value={cvv}
          
          onChange={(e) => setCvv(e.target.value)}
          
        /> <br/><label >Last three digits on signature strip</label>
      </div>

      </div>
      </div>
      
      
      <div>
        <label htmlFor="rememberCard">
          <input
            type="checkbox"
            id="rememberCard"
            
            checked={rememberCard}
            onChange={(e) => setRememberCard(e.target.checked)}
          />
Remember credit  card details for next time
        </label>
      </div>

      <button className='btn' type="submit">Payer</button>
    </form>
    </div>
 
  );
};

export default PayementForm;

