import { React } from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar({ setFormOpen }) {
  
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push("/");
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <i className="fas fa-calendar-week" style={{ marginRight: 15 }}></i>
        </Menu.Item>

        <Menu.Item as={NavLink} to="/events" name="Events"></Menu.Item>

        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button
              onClick={() => setFormOpen(true)}
              positive
              inverted
              content="Create Event"
            ></Button>
          </Menu.Item>
        )}

        <Menu.Item className="Item" name="React JS"></Menu.Item>

        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}

        <Menu.Item>
          <i className="fab fa-facebook-messenger fa-2x"></i>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
