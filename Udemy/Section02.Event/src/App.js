import Expenses from "./components/Exepenses";
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
  return (
    <div>
      {/* 이렇게 개발자는 맞춤 태그를 개발할 수 있다. 
          대문자로 시작해야되며 위의 import에 정의된 이름을 사용한다.
     */}
    <h2>Lets get started!</h2>
    <Expenses item={expenses}/>
    </div>
  );
}

export default App;
