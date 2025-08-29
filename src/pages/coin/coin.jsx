 import './coin.css'
import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/linechart/linechart'

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?x_cg_demo_api_key=CG-dsTAdAHu46KYjkLNH32LX5x9`);
      if (!response.ok) {
        throw new Error('Failed to fetch coin data');
      }
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error('Error fetching coin data:', err);
      setError('Failed to load coin data');
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name.toLowerCase()}&days=10&interval=daily&x_cg_demo_api_key=CG-dsTAdAHu46KYjkLNH32LX5x9`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch historical data');
      }
      const data = await response.json();
      setHistoricalData(data.prices);
    } catch (err) {
      console.error('Error fetching historical data:', err);
      setError('Failed to load price history');
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    
    const fetchData = async () => {
      if (!coinId) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        await Promise.all([fetchCoinData(), fetchHistoricalData()]);
      } catch (err) {
        if (isSubscribed) {
          setError('Failed to load data. Please try again.');
          console.error('Error:', err);
        }
      }
      
      if (isSubscribed) {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isSubscribed = false;
    };
  }, [coinId, currency.name]);

  if (isLoading) {
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

  if (!coinData || !historicalData) {
    return (
      <div className="error-message">
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className='coin'>
      <div className="coin-name">
        <img src={coinData.image?.large} alt={coinData.name} />
        <p><b>{coinData.name} ({coinData.symbol?.toUpperCase()})</b></p>
      </div>
      
      <div className="coin-chart">
        <LineChart historicalData={{ price: historicalData }} />
      </div>

      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data?.current_price[currency.name]?.toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market cap</li>
          <li>{currency.symbol} {coinData.market_data?.market_cap[currency.name]?.toLocaleString()}</li>
        </ul>
        <ul>
          <li>24h High</li>
          <li>{currency.symbol} {coinData.market_data?.high_24h[currency.name]?.toLocaleString()}</li>
        </ul>
        <ul>
          <li>24h Low</li>
          <li>{currency.symbol} {coinData.market_data?.low_24h[currency.name]?.toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Coin
