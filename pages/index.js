import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Samuzn.dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site!" />
        <p className="description">
          My name is Samuel! and I'm starting programming.<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
