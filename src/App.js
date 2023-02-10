import React, { Component } from 'react';

class App extends Component {
	state = {
		timer: 0,
		status: false
	}

	componentDidMount() {
		this.time = localStorage.getItem('react-time');
		const data = this.time ? JSON.parse(this.time) : { timer: 0, status: false };
		this.setState({
			timer: data.timer,
			status: data.status
		});
		if (data.status === true) {
			this.startTimer();
		}
	}

	componentDidUpdate() {
		this.json = JSON.stringify(this.state);
		localStorage.setItem('react-time', this.json);
	}

	handleClickStartStop = () => {
		if (this.state.status === false) {
			this.startTimer();
		} else {
			clearInterval(this.timerId);
		}
		this.setState(({ status }) => {
			return { status: !status };
		})
	}

	startTimer = () => {
		this.timerId = setInterval(() => {
			this.setState(({ timer }) => {
				return { timer: timer + 1 }
			});
		}, 1000);
	}

	resetTimer = () => {
		clearInterval(this.timerId);
		this.setState({
			timer: 0,
			status: false
		});
	}


	render() {
		return (
			<div className='app'>
				<button onClick={this.handleClickStartStop}>{this.state.status ? 'stop' : 'start'}</button>
				<span>{this.state.timer}</span>
				<button onClick={this.resetTimer}>reset</button>
			</div>
		)
	}
}
export default App;
