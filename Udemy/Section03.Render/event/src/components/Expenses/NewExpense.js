import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';
import './NewExpense.css'
const NewExpense = (props) =>{

    const [isEditing, setIsEditing] = useState(false);

    //자식 컴포넌트인 ExpenseForm 컴포넌트에서 데이터 가져오기
    const saveExpenseDataHandler = (endteredExpneseData) => {
        const expenseData = {
            ...endteredExpneseData,
            id : Math.random().toString(),
            
        };
        props.onAddExpeseHandler(expenseData);
        props.setIsEditing(false);
    };
   const startEditingHandler= ()=>{
       setIsEditing(true);
   };
   const stopEditingHandler = () =>{
       setIsEditing(false);
   };

    return (
        <div className='new-expense'>
            {/* 데이터를 매개로 소통한다. */}
            {!isEditing && <button onClick={startEditingHandler}>ADD NEW EXPENSE</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler}/> }
        </div>
    );  
};

export default NewExpense;