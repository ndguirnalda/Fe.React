import { React } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function NavBar({setFormOpen}){
    
    return(
        <Menu inverted fixed='top'>
            <Container> 
                <Menu.Item><i className="fas fa-calendar-week" style={{ marginRight: 15 }}></i></Menu.Item>

                <Menu.Item name='Events'></Menu.Item>   

                <Menu.Item header>
                   <Button onClick={ ()=> setFormOpen(true) } positive inverted content='Create Event'></Button> 
                </Menu.Item>
                
                <Menu.Item className="Item" name='React JS'></Menu.Item>
                
                <Menu.Item position='right'>
                   <Button basic inverted content='Login'/>
                   <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} /> 
                </Menu.Item>

                <Menu.Item>
                     <i className="fab fa-facebook-messenger fa-2x"></i>
                </Menu.Item>
 
            </Container>
        </Menu>
    )
}