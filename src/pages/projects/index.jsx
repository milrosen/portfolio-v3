import React from 'react'
import './projects.css'

const pro = [
	// { link: 'milrosen.github.io/pfaucet', name: 'Plumber\'s Faucet', desc: 'Designed and developed the website for Mcgill\'s premier humor magazine' }
	{ link: 'https://github.com/milrosen/calculus-of-constructionsgithub.com', name: 'Calculus of Constructions in Elixir', desc: 'the engine of a proof checker based on the curry-howard correspondance'},
	{ link: 'https://milrosen.github.io/rust-js-asteroids/', name: 'Rust and Wasm Asteroids', desc: 'recreated the classic asteroids game, in Rust, running in webassembly'},
	{ link: 'https://milrosen.github.io/Pathfinding-Visualizer/', name: 'Pathfinding Visualizer', desc: 'react-based visualizer of various pathfinding algorithms, including A*, DFS, and Djikstra\'s'},
	{ link: 'https://github.com/milrosen/RICS-in-pytorch', name: 'RICS in pytorch', desc: 'Implemented a custom rotation-invariant version of a convolution layer in Pytorch as part of my final project in a ML course'}
];

export default function projects() {
	return (
		<>
		<div className='page bottom-right project-grid'>
			{pro.map(({ link, desc, name }, index) => {
				return (
					<a key={index} href={link}>
						<h2>{name}</h2>
						<div>{desc}</div>
					</a>
				)
			})}
		</div>
		</>
	
	)
}
