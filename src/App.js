import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './App.css';

import logo from './coding.gif';
import rrlogo from './logo.png';

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const parameters = {
      "sitename": process.env.REACT_APP_SITE_NAME,
      "emailaddress": email
    };
    console.log(parameters);
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      parameters,
      process.env.REACT_APP_USER_ID
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" alt="logo" />
        <img src={rrlogo} className="Logorr" alt="rrlogo" />
        <form onSubmit={handleSubmit}>
          <p className="Message">Novidades em breve, inscreva-se para recebê-las</p>
          <input type="email" name="Email" placeholder="E-mail" required className="Email" onChange={e => setEmail(e.target.value)} />
          <input type="submit" value="ENVIAR" className="Button" />
        </form>
      </header>
    </div>
  );
}

export default App;
