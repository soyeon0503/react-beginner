import Card from './Card';
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
    let [title,setTitle] = useState(props.title);
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