import React from 'react'
import './CoinStyle.css'

const Coin = (props) => {
    return (
        
        <div className="coin-container">
            
            <div className="coin-row">
                <div className="coin">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaPSVz-oBwIoVXcFkaqZLt2BpXBz6vRykBfQ&usqp=CAU" alt="" className="favorite" />
                    <img src={props.image} alt="" />
                    <h1>{props.name}</h1>
                    <p className="symbol">{props.symbol.toUpperCase()}</p>
                </div>
                <div className="coin-data">
                    <div className="coin-price">${props.price}</div>
                    <div className="coin-volume">${props.volume.toLocaleString()}</div>
                </div>
                {props.priceChange < 0 ? (<p className="red">{props.priceChange.toFixed(2)}%</p>) : (<p className="green">{props.priceChange.toFixed(2)}%</p>)}
                <p className="coin-marketcap">Mkt cap: ${props.marketCap.toLocaleString(2)}</p>
            </div>



        </div>
    )
}

export default Coin
