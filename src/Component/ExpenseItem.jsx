import React from 'react'

function Expenseitem(props) {
    const{title,amount,_id}=props.expense
    const type=amount>0?"income":"expense";
    function handledelete(){
        props.deleteExpense(_id)
    }
  return (
    <div className={`expense-item ${type}`}>
        <div className='expense-title'>{title}</div>
        <div className='expense-amount'>${amount}</div>
        <div className='delete-button-overlay'>
            <button onClick={handledelete}>Delete</button>
        </div>
    </div>
  )
}

export default Expenseitem