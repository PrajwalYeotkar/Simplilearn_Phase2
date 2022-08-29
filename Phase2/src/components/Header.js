import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = props => {

    const { branding } = props;

    return (

        <Navbar  bg="info" variant="dark" className="mb-3">
            <Link to="/" className="navbar-brand" style={{color:'#fff' }} ><strong>{branding}</strong></Link>
            <Nav className="mr-auto"></Nav>
            <Nav>
                <strong>
                <Link to="/" className="nav-link" style={{color:'#fff'}}>Home</Link>
                </strong>
                <strong>
                <Link to="/event/add" className="nav-link" style={{color:'#fff'}} >Add Event</Link>
                </strong>
                <strong>
                <Link to="/about" className="nav-link" style={{color:'#fff'}}>AboutUS</Link>
                </strong>
            </Nav>
        </Navbar>
    )
}

Header.defaultProps = {
    branding: 'My React App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;
