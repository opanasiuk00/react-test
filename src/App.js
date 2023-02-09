import React, { Component } from 'react';

class App extends Component {
	state = {
		count: 0,
	};

	handleClickPlus = (a) => {
		this.setState((prev) => {
			return { count: prev.count + 1 }

		})
	}
	handleClickMinus = (a) => {
		this.setState((prev) => {
			return { count: prev.count - 1 }
		})
	}

	render() {
		return (<div>
			<button onClick={this.handleClickMinus}>-</button>
			<p>{this.state.count}</p>
			<button onClick={this.handleClickPlus}>+</button>
		</div>)
	}
}
export default App;
