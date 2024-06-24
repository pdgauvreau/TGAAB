import React from 'react';

import './NavBar.css'

const Navbar = () => {

return (
    <>
    <div className = "navbar">
        
        <div className='buttons'>  
            <a className='logo' href ='/'></a>
            <ul>  
                <button className='dropdown'>-</button>
                <ul className='dropdown-content'>
                    <a href ='/TV'>TV</a>
                    <a href ='/Library'>LIBRARY</a>
                    <a href ='/Ticket'>TICKET </a>
                    <a href ='/Money'>SOME MONEY</a>
                    <a href ='/Mirror'>A MIRROR</a>
                    <a href ='/Apple'>AN APPLE</a>
                </ul>

                <a href ='/TV'>TV</a>
                <a href ='/Library'>LIBRARY</a>
                <a href ='/Ticket'>TICKET </a>
                <a href ='/Money'>SOME MONEY</a>
                <a href ='/Mirror'>A MIRROR</a>
                <a href ='/Apple'>AN APPLE</a>
            </ul>
        </div>
    </div>
    </>
)


}
export default Navbar;