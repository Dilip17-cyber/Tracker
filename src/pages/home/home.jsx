import React, { useContext, useState, useEffect} from 'react'
import './home.css'
import { CoinContext } from '../../context/CoinContext'

const home = () => {

const {allCoins, currency} = useContext(CoinContext);
const [displayCoins, setDisplayCoins] = useState([]);

useEffect(() => {
  setDisplayCoins(allCoins);
},[allCoins])

  return (
    <div className='home'>
     <div className="hero">
        <h1>Largest <br/> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Buy, sell, and trade with the best prices and the best security.</p>
        <form>
            <input type="text" placeholder="Search crypto.." className="search"/>
            <button type='submit'>Search</button>        
        </form>
     </div>
     <div className="crypto-table">
       <div className="table-layout">
        <p>#</p>
        <p>Coins</p>
        <p>Price</p>
        <p>24h Change</p>
        <p>Market Cap</p>
       </div>
       {
        displayCoins.slice(0,10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src ={item.image} alt="" />
              <p>{item.name + "- " + item.symbol}</p>
            </div>
            <p>{currency.symbol} {item.current_price}</p>

          </div>
        
        ))
       }
     </div>
    </div>
  )
}

export default home