import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem  from "./ExpenseItem";
import './Expenses.css'
import {useState} from 'react';
function Expenses(props){
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHandler= selectedYear => {
        setFilterYear(selectedYear);
    };
    return(
        <Card className='expenses'>
            <ExpenseFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            {props.items.map((expense) => (
                <ExpenseItem 
                    title={expense.title}
                    amout={expense.amount}
                    date ={expense.date} 
                />
            ))}
        </Card>
    
    );
}

export default Expenses;