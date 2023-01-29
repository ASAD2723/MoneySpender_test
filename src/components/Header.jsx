import React from 'react'
import { moneyFormatter } from '../helper';

const Header = ({money, total}) => {
  return (
    <div className='header'>
        {
            total > 0 && money - total !==0 && (
                <span>
                    To spend <span className='money'>
                        ${moneyFormatter(money - total)}
                    </span>
                    You have lot of Money
                </span>
            )
        }

        {
            total === 0 && (
                <span>
                    To Spend <span className='money'>
                        ${moneyFormatter(money)} You have this much money
                    </span>
                </span>
            )
        }
        {
            money-total === 0 && (
                <span>
                    <span className='money'>${moneyFormatter(total)}</span>
                </span>
            )
        }
    </div>
  )
}

export default Header;