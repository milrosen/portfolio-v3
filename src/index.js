import React from 'react';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom'
import {
	createRoot
} from 'react-dom/client';
import App from './App';

import {
	routes
} from './routs.jsx'

const router = createBrowserRouter([{
	path: '/',
	element: < App / > ,
	children: routes.map((route) => ({
		index: route.path === '/',
		path: route.path === '/' ? undefined : route.path,
		element: route.element,
	})),
}, ])


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render( < React.StrictMode >
		<
		RouterProvider router = {
			router
		} >
		<
		App / >
		<
		/RouterProvider> <
		/React.StrictMode>);