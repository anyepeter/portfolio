import { useState } from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/landingPage/landingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <LandingPage />
    </>
  )
}

export default App
