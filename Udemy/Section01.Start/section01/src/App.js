import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id : 'e1',
      title : 'toilet Paper',
      amount : 99,
      date : new Date(2022,1,25),
    },
    {
      id : 'e2',
      title : 'car insurance',
      amount : 234.55,
      date : new Date(2022,3,25),
    },
    {
      id : 'e3',
      title : 'car insurance',
      amount : 234.55,
      date : new Date(2022,3,25),
    },
    {
      id : 'e4',
      title : 'car insurance',
      amount : 234.55,
      date : new Date(2022,3,25),
    }
  ];
  return (
    <div>
      {/* 이렇게 개발자는 맞춤 태그를 개발할 수 있다. 
          대문자로 시작해야되며 위의 import에 정의된 이름을 사용한다.
     */}
    <h2>Lets get started!</h2>
      <ExpenseItem 
        title = {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
      />
      <ExpenseItem 
        title = {expenses[1].title}
        amount = {expenses[1].amount}
        date = {expenses[1].date}
      />
      <ExpenseItem 
        title = {expenses[2].title}
        amount = {expenses[2].amount}
        date = {expenses[2].date}
      />
      <ExpenseItem 
        title = {expenses[3].title}
        amount = {expenses[3].amount}
        date = {expenses[3].date}
      />
    </div>
  );
}

export default App;
