import React, { useState } from 'react';

const Search = ({ handleChangeSearch }) => {

	const [search, setSearch] = useState('')
	const [type, setSType] = useState('')

	const handleChangeType = (event) => {
		setSType(event.target.value);
		handleChangeSearch(search, event.target.value);
	}
	const handleChange = (event) => {
		setSearch(event.target.value);
	}

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			handleChangeSearch(search, type);
		}
	}
	return (
		<div className='search'>
			<div className='search__top'>
				<input
					className='search__input'
					name='search'
					type='text'
					placeholder='Search'
					value={search}
					onChange={handleChange}
					onKeyDown={handleKey}
				/>
				<button className='search__button' onClick={() => handleChangeSearch(search, type)}>Search</button>
			</div>
			<div className='search__tipe'>
				<label>
					<input
						type='radio'
						name='type'
						value=''
						onChange={handleChangeType}
						checked={type === ''}
					/>
					All</label>
				<label>
					<input
						type='radio'
						name='type'
						value='movie'
						onChange={handleChangeType}
						checked={type === 'movie'}
					/>
					Movies only</label>
				<label>
					<input
						type='radio'
						name='type'
						value='series'
						onChange={handleChangeType}
						checked={type === 'series'}
					/>
					Series only</label>
			</div>
		</div>
	)
}

export default Search;