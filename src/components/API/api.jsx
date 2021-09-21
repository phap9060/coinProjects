import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './CoinSpace/Coin'
import './ApiStyle.css'

const Api = () => {
    const [api, Setapi] = useState([])
    const [search, Setsearch] = useState('London')
 
    useEffect(() => {
        useEffect(()=>{
            axios
       
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                Setapi(res.data)
                console.log(res.data)
            }).catch(error => {
                alert("Erro na api")
            })
        },500)
        
    },[])

    const handleChange = e =>{
        Setsearch(e.target.value)
    }

    const filterCoins = api.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))



    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className="coin-text">Procure sua crip</h1>
                <form>
                    <input onChange={handleChange} className="coin-input" type="text" placeholder="Search..." />
                </form>
            </div>
            {filterCoins.map(coin => {
            return <Coin key={coin.id} 
                        name={coin.name} 
                        image={coin.image} 
                        symbol={coin.symbol}
                        price={coin.current_price}
                        volume={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        marketCap={coin.total_volume}
                        />
             
            
              })}
        </div>
        
      
    )
}

export {Api}

