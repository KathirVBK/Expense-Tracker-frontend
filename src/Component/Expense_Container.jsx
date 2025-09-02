import React, { useEffect } from 'react'
import Form from './form'
import { useState } from 'react'
import {v4 as uid} from 'uuid'
import History from './History'
import BalanceContainer from './BalanceContainer'
function Expense_Container() {

  const EXPENSE=[{id:uid(),title:"Food",amount:50},{id:uid(),title:"transport",amount:50}]
   const [expense,setExpense]=useState(EXPENSE)
   async  function addExpense(title,amount)
   {try{
    const newExpense = await fetch("https://expense-tracker-6781.onrender.com/post",
      {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({title,amount})
    }
    )}
    catch(error){
      console.log(error)
    }
   }

   async function getExpenses(){
    const response=await fetch("https://expense-tracker-678l.onrender.com/get")
    const data= await response.json();
    setExpense(data.expenses)
   }
   useEffect(()=>{
    getExpenses();
   },[])

   async function deleteExpense(id){
   await fetch(`https://expense-tracker-678l.onrender.com/delete/${id}`,
  {
   method:"DELETE"
   });
   getExpenses();
  }
  return (
   
       <div className='expense-container'> 
       <BalanceContainer expense={expense}/>
        <Form addExpense={addExpense}/>
        <History expense={expense} deleteExpense={deleteExpense}/>
        </div>
        
  )
}
export default Expense_Container