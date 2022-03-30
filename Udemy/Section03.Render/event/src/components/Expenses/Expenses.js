import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'
import {useState} from 'react';
import ExpensesChart from "./ExpensesChart";


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
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>

    );
}

export default Expenses;