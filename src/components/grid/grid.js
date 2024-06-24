import React,{useState, useNavigate} from 'react';
import './grid.css';



const Grid = () => {
    return (
        <>
        <div className='grid'>
            <ul className ='row1'> 
                <a href ='/TV'>
                <button className='tv'>
                    <center>
                        <div className='label'> 
                         <h>a TV</h>
                        </div>
                    </center>
                </button>
                </a>
                
                <a href ='/Library'>
                <button className='library' >
                    <center>
                        <div className='label'> 
                         <h>a library</h>
                        </div>
                    </center>
                </button>
                </a>

                <a href ='/Ticket'>
                <button className='ticket'>
                    <center>
                        <div className='label'> 
                         <h>a ticket</h>
                        </div>
                    </center>
                </button>
                </a>

            </ul>

            <ul className ='row2'> 
            <a href ='/Money'>
                <button className='somemoney'>
                    <center>
                        <div className='label'> 
                         <h>some Money</h>
                        </div>
                    </center>
                </button>
                </a>


                <a href ='/Mirror'>
                <button className='amirror'>
                    <center>
                        <div className='label'> 
                         <h>a mirror</h>
                        </div>
                    </center>
                </button>
                </a>


                <a href ='/Apple'>
                <button className='anapple'>
                    <center>
                        <div className='label'> 
                         <h>an apple</h>
                        </div>
                    </center>
                </button>
                </a>
            </ul>
        </div>
        </>
    )
}

export default Grid;