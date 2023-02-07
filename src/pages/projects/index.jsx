import React from 'react'
import './projects.css'

const pro = [
	{ link: 'milrosen.github.io/pfaucet', name: 'Plumber\'s Faucet', desc: 'Designed and developed the website for Mcgill\'s premier humor magazine' }
];

export default function projects() {
	return (
		<div className='page bottom-right'>
			<div>Projects</div>
			{pro.map(({ link, desc, name }, index) => {
				return (
					<a key={index} href={link}>
						<h2>{name}</h2>
						<div>{desc}</div>
					</a>
				)
			})}
		</div>
	)
}
