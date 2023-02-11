import React, { Component } from 'react';

class App extends Component {
	state = {
		email: '',
		checkbox: false,
	}
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleCkeckboxChange = (event) => {
		this.setState({ [event.target.name]: event.target.checked })
	}

	handleSend = (event) => {
		event.preventDefault();
		if (!this.state.email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
			alert('Email invalid');
		} else if (this.state.checkbox === false) {
			alert('You should accept all agreements');
		} else {
			alert('Thank you for your subscription');
			this.setState({
				email: '',
				checkbox: false
			});
		}
	}

	render() {
		return (
			<div className='app'>
				<form>
					<input
						name='email'
						type='text'
						placeholder='Your email'
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<label>
						<input
							name='checkbox'
							type='checkbox'
							checked={this.state.checkbox}
							onChange={this.handleCkeckboxChange}
						/>
						I agree with terms and conditions
					</label>
					<button onClick={this.handleSend}>Send</button>
				</form>
			</div>
		)
	}
}

export default App;
