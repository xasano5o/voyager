import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from '../Components/navbar'

function App() {
  return (
    <div className='Container'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<>HOME</>} />
          <Route path="/about" element={<h1 className='bg-red-500'>ABOUT</h1>} />
          <Route path="/services" element={<h1>SERVICES</h1>} />
          <Route path="/business" element={<h1>BUSINESS</h1>} />
          <Route path="/techbology" element={<h1>TECHNOLOGY</h1>} />
        </Route>
          <Route path="*" element={<h1>No page</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
