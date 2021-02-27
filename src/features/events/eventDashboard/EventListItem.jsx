import React from 'react';
import { button, Icon, Item, List, Segment, SegmentGroup } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem({ event, selectEvent }){

    return(
        <SegmentGroup>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                            <Item.Content>
                                <Item.Header content={event.title} />
                                <Item.Description>
                                    Hosted by: {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>       

            <Segment>
                <span>
                    <Icon name='clock'/> {event.date}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment> 

            <Segment secondary>
                <List horizontal>
                {event.attendees.map(attendee => <EventListAttendee key={attendee.id} attendee={attendee} /> )}
                    
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <button
                    class="ui right floated labeled icon button" 
                    onClick={() => selectEvent(event) } 
                    color='teal'
                    floated='right'
                >
                <i class="right arrow icon"></i>
                View
                </button>
            </Segment>
        </SegmentGroup>
    );

}

