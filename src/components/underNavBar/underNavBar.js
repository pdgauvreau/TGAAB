import React, {useState} from 'react';

import './underNavBar.css';

const UnderNavBar = () => {
    
return (
    <div className='underNavBar'>
        <div className = 'container'> 
            <ul >
                <li><a href ='/TV'>TV</a></li>
                <li><a href ='/Library'>LIBRARY</a></li>
                <li><a href ='/Ticket'>TICKET </a></li>
                <li><a href ='/Money'>SOME MONEY</a></li>
                <li><a href ='/Mirror'>A MIRROR</a></li>
                <li><a href ='/Apple'>AN APPLE</a></li> 
            </ul> 

        </div>
        
    </div>
)

}

export default UnderNavBar;