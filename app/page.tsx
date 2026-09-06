import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Crew from '@/components/Crew'
import Abilities from '@/components/Abilities'
import WorldBand from '@/components/WorldBand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Crew />
        <Abilities />
        <WorldBand />
      </main>
      <Footer />
    </>
  )
}
