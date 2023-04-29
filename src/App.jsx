import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="flex hover:inline-flex texxt">Hello world!</h1> 
    </>
  )
}

export default App
