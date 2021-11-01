import React from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "./../../features/events/eventDashboard/nav/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router";
import HomePage from "./../../features/home/HomePage";
import eventDetailedPage from "./../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "./../../features/events/eventDashboard/eventForm/EventForm";

export default function App() {

  return (
    <>
      <Route exact path="/" component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar />
              <Container className="main">
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={eventDetailedPage} />
                <Route
                  path={(["/createEvent"], "/manage/:id")}
                  component={EventForm}
                />
              </Container>
            </>
          )}
        />
    </>
  );
}
