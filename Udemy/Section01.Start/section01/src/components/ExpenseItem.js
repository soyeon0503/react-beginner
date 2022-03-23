import './ExpenseItem.css';

//리액트에서 컴포넌트는 단지 JSX코드를 리턴하는 함수 일 뿐이다

function ExpenseItem(){
    const expenseDate = new Date(2021,2,28).toISOString();
    const expenseTitle = 'CarInsurance';
    const expenseAmount = 294.81;
    // 반드시 하나의 상위 root 요소를 가져야 한다.
    //{} 하면 기본 자바스클비트 표현을 쓸 수 있다. 
    return(
        <div className='expense-item'>
            <div>{expenseDate}</div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>
                    ${expenseAmount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;