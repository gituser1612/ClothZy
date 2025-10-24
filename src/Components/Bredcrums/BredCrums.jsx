import React from 'react'
import './BredCrums.css'
import arrow_icon from '../../assets/arrow_icon.png'
const BredCrums = (props) => {
const {product} = props;
  return (
    <div className='bredcrums'>
        HOME &gt; SHOP &gt; {product.category} &gt; {product.name} 
    </div>
  )
}

export default BredCrums