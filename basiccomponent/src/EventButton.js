import React,{ Component } from 'react';

class EventButton extends Component {
    state = {
        message : ''
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type='text'
                    name = 'message'
                    placeholder='아무거나 입력하세요'
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message : e.target.value
                            });
                        } //e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
                    }
                />
                <button onClick ={
                    ()=>{
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        });
                    }
                }>확인</button>
            </div>
        );
    }
}
//inpit event
export default EventButton;