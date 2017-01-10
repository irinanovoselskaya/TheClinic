import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import {currentRoomIsChanged} from '../actions/index';

/**
 * Renders a top navigation
 */
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: this.props.currentRoom};
    }

    onClick(activeKey){
        const {currentRoomIsChanged} = this.props;
        this.setState({activeKey});
        currentRoomIsChanged(activeKey);
    }

    render() {
        const {rooms} = this.props;
        const activeKey=this.state.activeKey;
        const listOfRoom = rooms.map(room => {
            return <NavItem key={room.id}
                            active={activeKey == room.id}
                            eventKey={room.id}
                            onClick={() => this.onClick(room.id)}>
                {room.title}
                </NavItem>
        });

        return <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>The Clinic</Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav activeKey={activeKey}>
                    <NavItem eventKey={0}
                             active={activeKey == '0'}
                             key='0'
                             onClick={() => this.onClick(0)}>All</NavItem>
                    {listOfRoom}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

export default Header;
