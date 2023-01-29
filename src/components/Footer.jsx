import React from 'react'
import { moneyFormatter } from '../helper'

const Footer = ({basket, total, setBasket}) => {
    const resetCart=()=>{
        setBasket([]);
    }
  return (
    <div className='footer'>
        <div className="footer-header">Your Cart</div>
        <div className="footer-container">
            {
                basket.map((item)=>(
                    <div className="footer-basket-item" key={item.id}>
                        <span>{item.title}</span>
                        <span>{item.amount}</span>
                    </div>
                ))
            }
        </div>
        <div className="button-container">
            <span>Total:${moneyFormatter(total)}</span>
            <button onClick={resetCart} className="btn btn-reset">Reset</button>
        </div>
    </div>
  )
}

export default Footer