import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Crew from '@/components/Crew'
import Episodes from '@/components/Episodes'
import Trailers from '@/components/Trailers'
import WorldBand from '@/components/WorldBand'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Crew />
        <Episodes />
        <Trailers />
        <WorldBand />
      </main>
      <Footer />
    </>
  )
}
