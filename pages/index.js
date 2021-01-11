import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
        // width={400}
        // height={300}
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
