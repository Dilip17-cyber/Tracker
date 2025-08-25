import './Table.css'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'

const Table = () => {
    const { coins, currency } = useContext(CoinContext)

    return (
        <table className="crypto-table">
            <thead>
                <tr>
                    <th>Coin</th>
                    <th className="price-column">Price</th>
                    <th className="change-column">24h Change</th>
                    <th className="market-cap-column">Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {coins.map((coin) => (
                    <tr key={coin.id}>
                        <td>
                            <div className="coin-info">
                                <img src={coin.image} alt={coin.name} />
                                <span>{coin.name}</span>
                            </div>
                        </td>
                        <td className="price-column">{currency.symbol}{coin.current_price.toLocaleString()}</td>
                        <td className={`change-column ${coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}`}>
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <td className="market-cap-column">{currency.symbol}{coin.market_cap.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
