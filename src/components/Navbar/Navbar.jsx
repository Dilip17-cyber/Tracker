import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {

  const {setcurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch(event.target.value){
      case "usd": {
        setcurrency({
          name: "USD",
          symbol: "$"
        })
        break;
      }
      case "euro":{
        setcurrency({
          name: "EUR",
          symbol: "€"
        })
        break;
      }
      case "inr":{
        setcurrency({
          name: "INR",
          symbol: "₹"
        })
        break;
      }
      default:{
        setcurrency({
          name: "USD",
          symbol: "$"
        })
      }
    }


  }

  return (
    <div className='navbar'>
       <img src={logo} alt="" className='logo' />
       <ul>
        <li>Home</li>
        <li>Features</li>  
        <li>Pricing</li>
        <li>Blog</li>
       </ul>
       <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="euro">EUR</option>
            <option value="inr">INR</option>
            <option value="npr">NPR</option>
            <option value="jpy">JPY</option>
        </select>
        <button className='signup-btn'>Sign up <img src={arrow_icon} alt="" /></button>
       </div>
    </div>
  )
}

export default Navbar