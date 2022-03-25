import './ExpenseItem.css';

//리액트에서 컴포넌트는 단지 JSX코드를 리턴하는 함수 일 뿐이다

function ExpenseItem(props){
    // 반드시 하나의 상위 root 요소를 가져야 한다.
    //{} 하면 기본 자바스클비트 표현을 쓸 수 있다. 
    const month = props.date.toLocaleString('en-US',{month : 'long'});
    const day = props.date.toLocaleString('en-US',{day : '2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className='expense-item'>
            <div>
                <div>{year}</div>
                <div>{month}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;