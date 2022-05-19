import type { NextPage } from 'next'
import { Featured } from '../components/Featured'
import { Header } from '../components/Header'
import { Home } from '../components/Home'
import { Newsletter } from '../components/Newsletter'
import { Scrollup } from '../components/Scrollup'

const Index: NextPage = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Featured />
        <Newsletter />
      </main>

      <Scrollup />
    </>
  )
}

export default Index
