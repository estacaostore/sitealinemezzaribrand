import type { NextPage } from 'next'
import { Featured } from '../components/Featured'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import { Newsletter } from '../components/Newsletter'
import { Story } from '../components/Story'
import { Testimonial } from '../components/Testimonial'

const Index: NextPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Story />
        <Featured />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />

    </>
  )
}

export default Index
