import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//리액트에서 컴포넌트는 단지 JSX코드를 리턴하는 함수 일 뿐이다

function ExpenseItem(props){
    // 반드시 하나의 상위 root 요소를 가져야 한다.
    //{} 하면 기본 자바스클비트 표현을 쓸 수 있다. 
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;