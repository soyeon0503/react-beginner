import React, { useState } from "react";
import './ExpenseForm.css';
import './NewExpense.css'
const ExpenseForm = (props) => {
    // 컴포넌트는 각각 여러개 state를 가질 수 있음
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmout] = useState();
    const [enteredDate, setEnteredDate] = useState('');

    //하나의 상태로 관리할 수도 있음
    // const [userInput, setUserInput]  = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     enteredTitle : event.target.value,
        // })
        // // 이렇게 하면 나머지 데이터들 사라짐
        // // setUserInput({
        // //     // ...userInput 으로 이전 상태를 가져오고
        // //     // 덮어쓰고 싶은거 
        // //     ...userInput,
        // //     enteredTitle : event.target.value,
        // // });
        // // 이게 근본임 이에 처럼 잘 안씀
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle : event.target.value};
        // });
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmout(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) =>{
        // 요청을 보내지 않으니 페이지가 다시 불러와질 것도 없음
        event.preventDefault();
        
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
        };

        // onSaveExpneseData를 ExpenseForm에서 불러올 수 있고
        //데이터를 매개변수로 보낼 수 있다.
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmout('');
        setEnteredDate('');
    };
    // onSumbit은 제출하면 페이지를 새로 불어옴
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    {/* event가 발생하면 props로 pass 함 */}
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.00' step='0.0' onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate}  min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button className='new-expense' type="submit">Add expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;