import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage from '../pages/about'
import Navbar from '../Components/navbar'

function App() {
  return (
    <div className='Container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutPage/>} />
          <Route  path="/about" element={<AboutPage/>} />
          <Route path="/services" element={<h1>SERVICES</h1>} />
          <Route path="/business" element={<h1>BUSINESS</h1>} />
          <Route path="/technology" element={<h1>TECHNOLOGY</h1>} />
          <Route path="*" element={<h1>No page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
