import React, { useState } from 'react';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitement du formulaire ici (par exemple, envoyer les données à une API)
    console.log('Message envoyé :', { name, email, message });
  };

  return (
    <div>
      <h1>Contactez-nous</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email :</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Message :</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactPage;
