import React from 'react'
import Expenseitem from './Expenseitem'

function History(props) {
  return (
    <div className='history'>
        <h1>History</h1>
        {props.expense.map((item)=>(
            <Expenseitem key={item.id} expense={item}
            deleteExpense={props.deleteExpense}/>
            ))}
    </div>
  )
}

export default History