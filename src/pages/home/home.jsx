import './home.css'

const home = () => {
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
     </div>
    </div>
  )
}

export default home