import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'
//import Navbar from './components/Navbar/Navbar.jsx' 
// import Home from './pages/home/home.jsx' 
// import Coin from './pages/coin/coin.jsx' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>      
    </BrowserRouter>
  </StrictMode>,
)
