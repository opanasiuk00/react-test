import React from 'react'

const Item = ({ Poster, Title, Type, Year }) => {
	return (
		<div className='item'>
			<img className='item__img' src={Poster} alt={Title} />
			<h2 className='item__title'>{Title}</h2>
			<div className='item__info'>
				<p className='item__type'>{Type}</p>
				<p className='item__year'>{Year}</p>
			</div>
		</div>
	)
}

export default Item