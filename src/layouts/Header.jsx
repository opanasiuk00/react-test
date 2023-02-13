import React from 'react';

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<div className='header__logo'>
						<h3 className='header__logo-title'>React movies</h3>
					</div>
					<nav className='header__menu'>
						<ul className='header__list'>
							<li className='header__item'>
								<a className='header__item-link' href='!#'>Repo</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>

		</header>
	)
}

export default Header;