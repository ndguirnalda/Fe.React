import React, { useState } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from './../../features/events/eventDashboard/nav/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() {
	// const title = React.createElement('h1', {}, 'React Application' );
	// const div = React.createElement('div', {className: 'App'}, title );
	const [formOpen, setFormOpen] = useState(false);

	return (
		<div>
			<>	
				<NavBar setFormOpen={setFormOpen} />
				<Container className='main'>
					<EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
				</Container>
			</>	
		</div>  	
	);
}
