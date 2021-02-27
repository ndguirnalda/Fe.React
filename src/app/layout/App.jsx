import React, { useState } from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from './../../features/events/eventDashboard/nav/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() {
	// const title = React.createElement('h1', {}, 'React Application' );
	// const div = React.createElement('div', {className: 'App'}, title );
	const [formOpen, setFormOpen] = useState(false);

	const [selectedEvent, setSelectedEvent] = useState(null);

	function handleSelectEvent(event){
		setSelectedEvent(event);
		setFormOpen(true);
	}

	
	function handleCreateFormOpen(){
		setSelectedEvent(null);
		setFormOpen(true);
	}

	return (
		<div>
			<>	
				<NavBar setFormOpen={handleCreateFormOpen} />
				<Container className='main'>
					<EventDashboard 
						formOpen={formOpen}
 						setFormOpen={setFormOpen}
						selectEvent={handleSelectEvent}
						selectedEvent={selectedEvent}
						key={selectedEvent ? selectedEvent.id : null }
					/>
				</Container>
			</>	
		</div>  	
	);
}
