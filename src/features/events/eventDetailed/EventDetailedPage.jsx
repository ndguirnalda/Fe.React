import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSbar from './EventDetailedSbar';

export default function EventDetailedPage(){
    return(
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />                
            </Grid.Column>

            <Grid.Column width={6}>
                <EventDetailedSbar />
            </Grid.Column>
        </Grid>
    )
}