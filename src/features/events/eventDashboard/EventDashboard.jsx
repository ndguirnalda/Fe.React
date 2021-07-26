import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
// import EventForm from './eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

// inside eventDashboard function {formOpen, setFormOpen, selectEvent, selectedEvent } managing things on a single page
export default function EventDashboard(){

const [events, setEvents]= useState(sampleData);

// CRUD FUNCTIONS
// create event
// function handleCreateEvent(event){
//         setEvents([...events, event]);
// }

// update event
// function handleUpdateEvent(updatedEvent){
//     // .map is like foreach statement 
//     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent :  evt )); 
//     selectEvent(null);
//     // console.log(updatedEvent);
// // setFormOpen(false);
// }

// Delete Event
function handleDeleteEvent(eventId){

    setEvents(events.filter(evt => evt.id !== eventId));

}

return(
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} deleteEvent= {handleDeleteEvent} />
            </Grid.Column>       

            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>

        </Grid>
    )
}