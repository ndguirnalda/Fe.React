import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm( { setFormOpen, setEvents, createEvent, selectedEvent, updateEvent } ){
    
//  if selectedEvent is null pass anything to the right, if not set to selectedEvent value
// ?? is the no official operators
    
    const initialValues = selectedEvent ?? {
            title:'',
            category:'',
            description:'',
            city:'',
            venue:'',
            date:''
        };

    const [values, setValues ] = useState(initialValues);
    
    function handleFormSubmit() {

        selectedEvent 
        ? updateEvent({...selectedEvent, ...values})
        : createEvent({
            ...values, 
            id: cuid(), 
            hostedBy: 'Bob', 
            attendees: [], 
            hostPhotoURL:'/assets/user.png'
        });
         
        setFormOpen(false);
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        setValues({...values, [name]: value });
    }

    return(
        <Segment clearing>
            <Header content={ selectedEvent ? 'Edit the Event' : 'Create New Event'} />
            <Form onSubmit={ handleFormSubmit }>
                <Form.Field>
                    <div className="ui labeled input">
                        <div className="ui label">Event Title</div>
                        <input 
                            type='text' 
                            placeholder='Event Title'
                            name='title' 
                            value={values.title}
                            onChange={ (e) => handleInputChange(e) } 
                        />
                    </div>
                </Form.Field>
                <Form.Field>
                    <div className="ui labeled input">
                        <div className="ui label">Category</div>
                        <input type='text' placeholder='Category' 
                        name='category' 
                        value={values.category}
                        onChange={ (e) => handleInputChange(e) }  />
                    </div>
                </Form.Field>
                <Form.Field>
                <div className="ui labeled input">
                        <div className="ui label">Description</div>
                        <textarea type='text' placeholder='Description' 
                        name='description' 
                        value={values.description}
                        onChange={ (e) => handleInputChange(e) } 
                        />
                </div>
                </Form.Field>
                <Form.Field>
                <div className="ui labeled input">
                        <div className="ui label">City</div>
                    <input type='text' placeholder='City' 
                    name='city' 
                    value={values.city}
                    onChange={ (e) => handleInputChange(e) } 
                    />
                </div>
                </Form.Field>
                <Form.Field>
                <div className="ui labeled input">
                        <div className="ui label">Venue</div>
                    <input type='text' placeholder='Venue' 
                    name='venue' 
                    value={values.venue}
                    onChange={ (e) => handleInputChange(e) } 
                    />
                </div>
                </Form.Field>
                <Form.Field>
                <div className="ui labeled input">
                        <div className="ui label">Date</div>
                    <input type='date' placeholder='Date' 
                    name='date' 
                    value={values.date}
                    onChange={ (e) => handleInputChange(e) } 
                    />
                </div>
                </Form.Field>

                <Button type='submit' floated='right' positive content='Submit'  />
                <Button onClick={() => setFormOpen  (false) } 
                        negative 
                        type='text' 
                        floated='right' 
                        content='Cancel' 
                />
            </Form>
        </Segment>
    );
}