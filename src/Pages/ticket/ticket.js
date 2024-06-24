import React from 'react';
import Endbar from '../../components/endBar/endBar';
import Navbar from '../../components/NavBar/NavBar';

import './ticket.css';

function TICKET(){
    return(
        <>
        <Navbar/>
        <div className='page-container'>
            <h1 className='page'>A TICKET</h1>
        </div>
        <div className = 'places'>
            <button className = 'france'> 
            <div className='image'></div>
            <div className='body'>
                <h1> France </h1>
                <p>France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports.</p>
            </div>
            </button>
            <button className = 'italy'> 
            <div className='image'></div>
            <div className='body'>
                <h1> Italy </h1>
                <p>It is the tenth-largest country in the Europe, covering an area of 301,340 km2 (116,350 sq mi), and third-most populous member state of the European Union, with a population of nearly 60 million. Its capital and largest city is Rome</p>
            </div>
            </button>
            <button className = 'japan'> 
            <div className='image'></div>
            <div className='body'>
                <h1> Japan </h1>
                <p>Japan is a part of the Ring of Fire, and spans an archipelago of 14,125 islands, with the four main islands being Hokkaido, Honshu (the "mainland"), Shikoku, and Kyushu.</p>
            </div>
            </button>

            <button className = 'germany'> 
                <div className='image'></div>
                <div className='body'>
                    <h1> Germany </h1>
                    <p> this is a paragraph about france. france has baguettes and an eiffel tower</p>
            
                </div>
            </button>
            <button className = 'greenland'> 
                <div className='image'></div>
                <div className='body'>
                    <h1> Greenland </h1>
                    <p> this is a paragraph about france. france has baguettes and an eiffel tower</p>
                </div>
            </button>
            <button className = 'australia'> 
                <div className='image'></div>
                <div className='body'>
                    <h1> Australia </h1>
                    <p> this is a paragraph about france. france has baguettes and an eiffel tower</p>
                </div>
            </button>
        </div>
        <div className='spacer'/>
        <Endbar/>
        </>
    )
}

export default TICKET;