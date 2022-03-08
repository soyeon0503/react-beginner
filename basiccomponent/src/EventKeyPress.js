import React,{ Component } from 'react';

class EventKeyPress extends Component {
    state = {
        username : '',
        message : ''
    }

    handleChange = (e) =>{
        this.setState({
            //객체를 이렇게 []로 감싸면 key 값으로 인식
            [e.target.name] : e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ':' + this.state.message);
        this.setState({
            username : '',
            message : ''
        });
    }
    hanldeKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='사용자명'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name = 'message'
                    placeholder='아무거나 입력하세요'
                    value={this.state.message}
                    onChange={this.handleChange}

                    //enter 누르면 실행
                    onKeyPress ={this.hanldeKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
//inpit event
export default EventKeyPress;