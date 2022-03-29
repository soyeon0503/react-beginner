import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem  from "./ExpenseItem";
import './Expenses.css'
import {useState} from 'react';

function Expenses(props){
    const [filteredYear, setFilterYear] = useState('2022');

    const filterChangeHandler= selectedYear => {
        setFilterYear(selectedYear);
    };

    const filterExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return(
        <div>
            <Card className='expenses'>
                <ExpenseFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                {/* 두번째 인자로 index 넣는짓 하지마라 버그날 수도 있음*/}
                {filterExpenses.map((expense) => (
                    <ExpenseItem 
                        // key는 리액트 개별아이템을 식별할 수 있도록 도와줌
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date ={expense.date}
                    />
                ))}
            </Card>
        </div>

    );
}

export default Expenses;