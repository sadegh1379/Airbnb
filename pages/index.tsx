import type { NextPage } from 'next'
import Head from 'next/head'
import { Banner, Header } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sadegh - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
    </div>
  )
}

export default Home
