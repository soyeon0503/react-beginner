import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
      id : 'e1',
      title : 'toilet Paper',
      amount : 99,
      date : new Date(2022,1,25),
  },
  {
      id : 'e2',
      title : 'Paper',
      amount : 99,
      date : new Date(2022,1,25),
  },
  {
      id : 'e3',
      title : 'snacks',
      amount : 99,
      date : new Date(2022,1,25),
  },
  {
      id : 'e4',
      title : 'etc',
      amount : 99,
      date : new Date(2022,1,25),
  }
];

const App =  () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenses) => {
      setExpenses((prevExpense) => {
        return [expenses, ...prevExpense];
      });
  };
  return (
    <div>
      {/* 이렇게 개발자는 맞춤 태그를 개발할 수 있다. 
          대문자로 시작해야되며 위의 import에 정의된 이름을 사용한다.
     */}
    <NewExpense onAddExpeseHandler={addExpenseHandler} />
    <Expenses items={expenses}/>

    </div>
  );
}

export default App;
