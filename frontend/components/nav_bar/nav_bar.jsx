import React from 'react';
import { Link } from 'react-router-dom';
import Search from './search'
import Dropdown from './dropdown'

const NavBar = ({currentUser, demoUser, logout, openModal, closeModal, login }) => {
    
    const navSessionLinks = () =>(
        <nav className="login-signup-dropdown">
            <li>
                <ul className="login-buttons">
                    <button onClick={() => openModal('login')}>Login</button>
                    <button onClick={() => openModal('signup')}>Signup</button>
                    <button onClick={() => login(demoUser)}>Demo User</button>
                </ul>
            </li>
        </nav>
    )
    
   const navGreeting = () => (
       <div className="greeting-nav">
           <h2 className="greeting-first-name">Greetings, {currentUser.firstName}</h2>
           <button className="nav-logout-button" onClick={logout}>Log Out</button>
       </div>
   )

    return (
       currentUser ?
       navGreeting(currentUser, logout) :
       navSessionLinks()
    )
}

export default NavBar;