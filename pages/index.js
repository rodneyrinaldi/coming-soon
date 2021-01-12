import { useState } from 'react';

import Head from 'next/head'
import Image from 'next/image'

import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    callApi(email)
    console.log("Mensagem enviada")
  }

  function callApi(address) {
    let pathAPI = process.env.apiUrlPrd;
    if (process.env.NODE_ENV === 'development') {
      pathAPI = process.env.apiUrlDev;
    }
    console.log(pathAPI + address)
    const { data, error } = useSWR(pathAPI + address, fetcher);
    if (error) return <p className="title">Erro no carregamento</p>;
    if (!data) return <p className="title">Carregando...</p>;
    return <>{data.status}</>
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
            <input type="email" id="EmailID" name="Email" placeholder="E-mail" required className="email" onChange={e => setEmail(e.target.value)} />
            <input type="submit" value="ENVIAR" className="button" />
          </div>

        </form>

      </main>

    </div>
  )
}
