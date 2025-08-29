import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import  Home from './pages/home/home'
import  Coin from './pages/coin/coin'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div className='app'>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
        <Footer />
    </div>
  )
}

export default App