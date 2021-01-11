import Head from 'next/head'
import Image from 'next/image'

import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {

  const { data, error } = useSWR(
    // "https://rr-coming-soon.vercel.app/api/send/",
    "http://localhost:3000/api/send/",
    fetcher
  );

  if (error) return "Erro no carregamento.";
  if (!data) return "Carregando...";


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

        <form>

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
