import { useState } from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landingPage/landingPage'
import Project from './components/projects/projects'
import About from './components/about/about'
import Testimonial from './components/testimonial/testimonial'
import Contact from './components/form/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <LandingPage />
     <Project />
     <About />
     <Testimonial />
     <Contact />
    </>
  )
}

export default App
