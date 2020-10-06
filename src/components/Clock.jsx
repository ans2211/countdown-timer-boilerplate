import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayTime: "",
            seconds: 0
        };
    }

    formatTime(timeInSeconds) {
        var seconds = timeInSeconds % 60;
        var minutes = Math.floor(timeInSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return minutes + ':' + seconds;
    }

    startTimer = ()=>{
        const{timeInSeconds} = this.props;
        this.clock = setInterval(()=>{
            this.setState({
                seconds: this.state.seconds-1,
                displayTime: this.formatTime(this.state.seconds-1)
            });
        },1000);

        setTimeout(()=>{
            clearInterval(this.clock);
            this.props.resetCount();
        },(timeInSeconds+1)*1000);
    }

    componentDidMount(){
        this.setState({seconds:this.props.timeInSeconds+1});
        if(this.props.timeInSeconds>0)
            this.startTimer();
    }

    render() {
        const {displayTime,seconds} = this.state;
        //Keep the classes name. Try to inject your code and do not remove existing code
        return (
            <div className="clock">
                <span className="clock-text">
                    {seconds !== 0 && displayTime}
                </span>
            </div>
        );
    }
}



export default Clock;