import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      {/* 이렇게 개발자는 맞춤 태그를 개발할 수 있다. 
          대문자로 시작해야되며 위의 import에 정의된 이름을 사용한다.
     */}
      <ExpenseItem />
    </div>
  );
}

export default App;
