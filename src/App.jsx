import { useState } from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landingPage/landingPage'
import Project from './components/projects/projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <LandingPage />
     <Project />
    </>
  )
}

export default App
