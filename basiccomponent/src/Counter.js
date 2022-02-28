import React , {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props); //무조건 해줘야 됨
        //state의 초기값 설정
        this.state = {
            number : 0
        };
    }
    render(){
        const { number } = this.state;
        return (
            <div>
                <h1>{ number }</h1>
                <button
                    onClick={()=>{
                        this.setState({number : number + 1})
                    }}
                >
                    click
                </button>
            </div>
        );
    }
}

export default Counter;