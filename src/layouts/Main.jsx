import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import Search from '../components/Search';


const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

	const [movies, setMovies] = useState([]);
	const [status, setStatus] = useState('loading');


	useEffect(() => {
		handleChangeSearch();
	}, []);

	const handleChangeSearch = async (str = 'matrix', type = '') => {
		setStatus('loading');
		await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str.length === 0 ? 'matrix' : str}&type=${type}`)
			.then(res => res.json())
			.then(({ Search }) => {
				setMovies(Search);
				setStatus(Search === undefined ? 'nothing' : 'ok');
			})
			.catch(() => setStatus('nothing'))
	}

	return (
		<main className='main'>
			<div className='container'>
				<Search handleChangeSearch={handleChangeSearch} />
				<div className='main__inner'>
					{(status === 'loading')
						? 'loading'
						: (status === 'ok')
							? movies.map(({ Poster, Title, Type, Year, imdbID }) => (
								<Item key={imdbID} Poster={Poster} Title={Title} Type={Type} Year={Year} />
							))
							: 'Nothing found'
					}
				</div>
			</div>
		</main>
	)

}
export default Main