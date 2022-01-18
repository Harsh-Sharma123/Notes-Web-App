import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'

export default function Home() {
    const a = 5;
    const b= 5;

    const mystyle = {
        margin: '20px',
        height: "250px",
        borderRadius: "50%",
        float: 'center'
    }

    const head = {
        backgroundColor: '#f5a35b',
        borderRadius: '8px',
        padding: '5px',
        fontWeight: 'bold'
    }

    const ben = {
        margin: '20px',
        paddingBottom: '10px',
        backgroundColor: '#3deb8e',
        borderRadius: '8px'
    }

    const ti={
        fontWeight: 'bold',
        padding: '10px',
        backgroundColor: '#f5b47a'
    }

    const item = {
        fontSize: '20px',
        fontWeight :'bold'
    }

    return (
        <>

            <div className='container'>
            <div className='text-center'>
            <img src={logo} style={mystyle}  class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle|" alt="" />
            </div>          
            <h1 style={head} className='text-center font-weight-bold'>Notes App</h1> 
            <div className='text-center' style={ben}>
            <h3 className='text-center' style={ti}>Benefits of Using this Notes App : </h3>
            <ul style={item}>
                <li>Easy to Use</li>
                <li>Store data on online database which makes it easy to access it from anywhere</li>
                <li>Safe</li> 
                <li>Simple UI to understand</li>   
            </ul>     
            </div>
            </div>
        </>
    )
}
