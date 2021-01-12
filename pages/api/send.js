
import emailjs from 'emailjs-com';

function xxx(e) {
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

  //document.getElementById("EmailID").textContent = "";
  alert("Mensagem enviada");
}

function sendEmail(service, emailtemplate, parameters, user) {
  console.log('xxx')
  emailjs.send(
    service,
    emailtemplate,
    parameters,
    user
  ).then((result) => {
    console.log(result.text);
  }, (error) => {
    console.log(error.text);
    alert(error);
  }
  );
}


export default (req, res) => {
  try {
    res.statusCode = 200
    res.json({ status: 'Enviado com sucesso' })
  } catch (error) {
    res.statusCode = 400
    res.json({ status: 'Erro no envio' })
  }
}