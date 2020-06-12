import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './App.css';

import logo from './coding.gif';
import rrlogo from './logo.png';

function App() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const contactpar = {
      "sitename": process.env.REACT_APP_SITE_NAME,
      "emailcontact": process.env.REACT_APP_SITE_EMAIL,
      "emailaddress": email
    };
    sendEmail(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_CONTACT,
      contactpar,
      process.env.REACT_APP_USER_ID
    );

    const answerpar = {
      "sitename": process.env.REACT_APP_SITE_NAME,
      "emailaddress": email
    };
    sendEmail(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ANSWER,
      answerpar,
      process.env.REACT_APP_USER_ID
    );
  }

  function sendEmail(service, emailtemplate, parameters, user) {
    emailjs.send(
      service,
      emailtemplate,
      parameters,
      user
    ).then((result) => {
      console.log(result.text);
      setEmail();
      document.getElementById("EmailID").innerHTML = "";
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
          <input type="email" id="EmailID" name="Email" placeholder="E-mail" required className="Email" onChange={e => setEmail(e.target.value)} />
          <input type="submit" value="ENVIAR" className="Button" />
        </form>
      </header>
    </div>
  );
}

export default App;
