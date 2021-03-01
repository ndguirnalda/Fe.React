import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from './eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';


export default function EventDashboard({formOpen, setFormOpen, selectEvent, selectedEvent }){

const [events, setEvents]= useState(sampleData);

// CRUD FUNCTIONS

// create event
function handleCreateEvent(event){
        setEvents([...events, event]);
}

// update event
function handleUpdateEvent(updatedEvent){
    // .map is like foreach statement 
    setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent :  evt )); 
    selectEvent(null);
// setFormOpen(false);
}

function handleDeleteEvent(eventId){

    setEvents(events.filter(evt => evt.id !== eventId));

}

return(
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent= {handleDeleteEvent} />
            </Grid.Column>       

            <Grid.Column width={6}>
                { formOpen && 
                    <EventForm 
                    setFormOpen={setFormOpen} 
                    setEvents={setEvents} 
                    createEvent={handleCreateEvent} 
                    selectedEvent={selectedEvent}
                    />
                }
            </Grid.Column>

        </Grid>
    )
}