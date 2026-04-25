import './App.css'
import StateEx from './StateEx'
import Counter from './Counter'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <StateEx fname="Trupti" age="21" course="AIML" />
      <Counter />

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;