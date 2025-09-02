import React from 'react'

function Currentitem(props) {
  return (
    <div className='currency-item'>
       <div className='title'>{props.title}</div>
       <div className={`amount ${props.type}`}>{props.amount}</div>
    </div>
  )
}

export default Currentitem