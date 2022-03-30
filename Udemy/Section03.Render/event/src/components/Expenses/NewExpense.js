import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './ExpenseForm.css';
import './NewExpense.css'
const NewExpense = (props) =>{


    //자식 컴포넌트인 ExpenseForm 컴포넌트에서 데이터 가져오기
    const saveExpenseDataHandler = (endteredExpneseData) => {
        const expenseData = {
            ...endteredExpneseData,
            id : Math.random().toString(),
            
        };
        props.onAddExpeseHandler(expenseData);
    };
   

    return (
        <div className='new-expense'>
            {/* 데이터를 매개로 소통한다. */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );  
};

export default NewExpense;