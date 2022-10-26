import Head from 'next/head'
import { Banner, Header, SmallCard } from '../components'

const Home = ({ posts }) => {
  console.log('posts', posts)
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
      <main className="max-w-4xl px-5 mx-auto sm:px-16">
        <section className="my-5">
            <h3 className="font-bold text-3xl py-2">Explore Nearby</h3>
            <div className="grid grid-cols-1 w-full gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3">
              {posts?.map((post) => (
              <SmallCard key={post.id} title={post.title} thumbnail={post.thumbnailUrl} id={post.id}/>
            ))}
            </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const posts = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
  .then(res => res.json())

  return{
    props:{
      posts,
    }
  }
}

export default Home
