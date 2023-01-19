import './App.css';
import WebglHero from './components/WebglHero';
import React from 'react'
import { NavLink, useLocation, useOutlet } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'


import { routes } from "./routs"


function App() {
	const location = useLocation();
	const currentOutlet = useOutlet();
	const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}

	return (
		<div className="App">
			<div className='topPanel'>
				<div className='name'>Milton Rosenbaum</div>
				<ul className='list'>
					{routes.map(({ path, name }, index) => (
						<NavLink to={path} className="navLink" key={index}>
							{name}
						</NavLink>
					))}
				</ul>
			</div>

			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					timeout={300}
					classNames="page"
					nodeRef={nodeRef}
					unmountOnExit
				>
					{(state) => (
						<div ref={nodeRef} className="page">
							{currentOutlet}
						</div>
					)}
				</CSSTransition>
			</SwitchTransition>

			<WebglHero />
		</div>
	);
}

export default App;
