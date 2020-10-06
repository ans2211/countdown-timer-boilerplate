import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {count:0};
    }

    resetCount = () =>{
        this.setState({count:0});
    }

    onSetCountdownTime = (val) =>{
        this.setState({count:val});
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                {count!==0 &&
                <Clock timeInSeconds={count} resetCount={this.resetCount}/>
                }
                <CountdownForm onSetCountdownTime={this.onSetCountdownTime}/>
            </div>
        );
    }
}

export default Countdown;