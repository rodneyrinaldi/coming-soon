import { useState } from 'react';
import { useRouter } from "next/router"
import Head from 'next/head'
import Image from 'next/image'
import emailjs from 'emailjs-com'

function Home(props) {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const { query: { service }, } = router

  function handleSubmit(e) {
    e.preventDefault()

    const params = { sitename: service, emailaddress: email }

    console.log(process.env.EMAILJS_SERVICE_ID)
    console.log(process.env.EMAILJS_TEMPLATE_ID)
    console.log(process.env.EMAILJS_USER_ID)
    console.log(params)

    emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      params,
      process.env.EMAILJS_USER_ID
    ).then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })

    document.getElementById('user_email').value = ''
  }

  return (
    <div className="container">
      <Head>
        <title>Coming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Image
          src="/coding.gif"
          alt="Logo coding"
          width={280}
          height={210}
        />
        <br />
        <Image
          src="/rr-text-white.png"
          alt="rodneyrinaldi"
          width={515}
          height={102}
        />
        <form onSubmit={handleSubmit}>
          <p className="title">Inscreva-se na newsletter</p>
          <div className="line">
            <input type="email"
              id="user_email"
              name="user_email"
              placeholder="E-mail"
              required className="email"
              onChange={e => setEmail(e.target.value)} />
            <input type="submit" value="ENVIAR" className="button" />
          </div>
        </form>
      </main>
    </div>
  )
}

export async function getServerProps() {
  return {
    props: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsUserId: process.env.EMAILJS_USER_ID
    },
    query: {

    }
  }
}

export default Home
