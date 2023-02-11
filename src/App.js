import React, { Component } from 'react';

class App extends Component {
	state = {
		posts: [
			{ id: 'abc1', name: 'JS Basics' },
			{ id: 'abc2', name: 'JS Advanced' },
			{ id: 'abc3', name: 'React JS' }
		]
	}

	handleDelete = (id) => {
		this.setState((prev) => {
			return { posts: prev.posts.filter(item => item.id !== id) }
		});
	}

	render() {
		return (
			<div className='app'>
				{this.state.posts.map((item) => (
					<div key={item.id}>
						<h2>{item.name}</h2>
						<button onClick={() => (this.handleDelete(item.id))}>delete</button>
					</div>
				))}
			</div>
		)
	}
}
export default App;
