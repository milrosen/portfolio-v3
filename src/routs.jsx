import Blurb from './pages/blurb'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Resume from './pages/resume'


const routes = [
	{ path: '/', name: 'Home', element: <Blurb /> },
	{ path: '/projects', name: 'Projects', element: <Projects /> },
	{ path: '/contact', name: 'Contact', element: <Contact /> },
	{ path: '/resume', name: 'Resume', element: <Resume /> },
]

export { routes };
