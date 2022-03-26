import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import './style.scss'
import logo from '../../assets/logo_patent.png'
import {NavLink} from "react-router-dom";

function Menu() {
    const navItems = [
        { id: 0, to: '/', text: 'О нас' },
        { id: 1, to: '/news', text: 'Новости' },
        { id: 2, to: '/about', text: 'Стартаперам' },
        { id: 3, to: '/about', text: 'Инвесторам' },
    ]
    return (
        <div >
            <Navbar bg="light" expand="lg" fixed="top" className='shadow-lg p-3 bg-white rounded d-flex justify-content-around'>
                <Container className=''>
                    <Navbar.Brand href="#home">
                        <img src={logo} className='nav-logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-a">
                            {/*<div className=''>*/}
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <NavLink
                                            // activeClassName={styles.active}
                                            className='navLink'
                                            to={item.to}
                                        >
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))}
                                <li>
                                    <NavLink to={'/sign-in'} className='navLink '>Зарегистрироваться / Войти</NavLink>
                                </li>
                            {/*</div>*/}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    )
}

export default Menu
