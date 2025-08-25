import { createContext, useState } from "react";
import { useEffect } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoins, setAllCoins] = useState([]);
    const [currency, setcurrency] = useState({
        name: "USD",
        symbol: "$"
        
    })

    const fetchAllcoin = async() => {

        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-dsTAdAHu46KYjkLNH32LX5x9'}
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoins(res))
        .catch(err => console.error(err));
    }
useEffect(() => {
    fetchAllcoin();
},[currency])


    const contextvalue = {

        allCoins, currency, setcurrency,
    }

    return(
        <CoinContext.Provider value={contextvalue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;