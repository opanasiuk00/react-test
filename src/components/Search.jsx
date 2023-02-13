import React, { Component } from 'react';

class Search extends Component {

	state = {
		search: '',
		type: ''
	}

	handleChange = (event) => {
		this.setState(() =>
			({ [event.target.name]: event.target.value }), () => {
				this.props.handleChangeSearch(this.state.search, this.state.type)
			}
		)
	}

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.handleChangeSearch(this.state.search, this.state.type);
		}
	}

	render() {
		return (
			<div className='search'>
				<div className='search__top'>
					<input
						className='search__input'
						name='search'
						type='text'
						placeholder='Search'
						value={this.state.search}
						onChange={this.handleChange}
						onKeyDown={this.handleKey}
					/>
					<button className='search__button' onClick={() => this.props.handleChangeSearch(this.state.search)}>Search</button>
				</div>
				<div className='search__tipe'>
					<label>
						<input
							type='radio'
							name='type'
							value=''
							onChange={this.handleChange}
							checked={this.state.type === ''}
						/>
						All</label>
					<label>
						<input
							type='radio'
							name='type'
							value='movie'
							onChange={this.handleChange}
							checked={this.state.type === 'movie'}
						/>
						Movies only</label>
					<label>
						<input
							type='radio'
							name='type'
							value='series'
							onChange={this.handleChange}
							checked={this.state.type === 'series'}
						/>
						Series only</label>
				</div>
			</div>
		)
	}
}

export default Search;