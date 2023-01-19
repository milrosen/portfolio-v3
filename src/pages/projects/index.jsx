import React from 'react'
import './projects.css'

const pro = [
	{ link: '/', name: 'Sienfield Theme', desc: 'Im claiming I made the Sienfield theme.' }
];

export default function projects() {
	return (
		<div className='page bottom-right project'>
			<div>Projects</div>
			{pro.map(({ link, desc, name }) => {
				return (
					<div>
						<h2>{name}</h2>
						<div>{desc}</div>
					</div>
				)
			})}
		</div>
	)
}
