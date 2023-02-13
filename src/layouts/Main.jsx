import React, { Component } from 'react';
import Item from '../components/Item';
import Search from '../components/Search';


const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

	state = {
		movies: [],
		status: 'loading'
	}

	componentDidMount() {
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`).then(
			res => res.json()).then(
				({ Search }) => this.setState({ movies: Search, status: 'ok' }))
	}

	handleChangeSearch = (str = 'matrix', type = '') => {
		this.setState({ status: 'loading' })
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.length === 0 ? 'matrix' : str}&type=${type}`)
			.then(res => res.json())
			.then(({ Search }) => this.setState({ movies: Search, status: Search === undefined ? 'nothing' : 'ok' }))
			.catch(() => this.setState({ status: 'nothing' }))
	}
	render() {
		return (
			<main className='main'>
				<div className='container'>
					<Search handleChangeSearch={this.handleChangeSearch} />
					<div className='main__inner'>
						{(this.state.status === 'loading')
							? 'loading'
							: (this.state.status === 'ok')
								? this.state.movies.map(({ Poster, Title, Type, Year, imdbID }) => (
									<Item key={imdbID} Poster={Poster} Title={Title} Type={Type} Year={Year} />
								))
								: 'Nothing found'
						}
					</div>
				</div>
			</main>
		)
	}

}
export default Main