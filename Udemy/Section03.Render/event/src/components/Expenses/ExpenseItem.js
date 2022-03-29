import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React,{useState} from'react';

//리액트에서 컴포넌트는 단지 JSX코드를 리턴하는 함수 일 뿐이다

const ExpenseItem = (props) => {
    // 이렇게하면 Dom에 반영 안되는 이유는 뭘까?
    // 컴포넌트가 다시 실행되는 것이 아니기 때문!!
    // let title = props.title;
    // const clickHandler = () =>{
    //     title = 'update!';
    // };
    //useStae는 기본 상태값 변수가 변화하면서 컴포넌트 함수를 다시 불러와서 하는 거임
    // 모든 Item은 개별 상태를 받고 컴포넌트마다 상태는 분리되어 있음을 명심하자
    //=> React는 컴포넌트 기반이다
    // 그리고 왜 const를 사용하는 걸까?
    //우리는 함수(useState)를 불러오는 거지 title = 'value'라고 값을 할당하는 것이 아니다

    const [title,setTitle] = useState(props.title);
    const clickHandler = ()=>{
        setTitle('change~!');
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;