import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Student from './Components/Student'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Student name="Atharv" age={20}/>
    </>
  )
}

export default App
