import React from 'react';
import {

    Link
  } from 'react-router-dom';
  import "./Nav.css"

export default function Nav() {
    return (
        <>
           <nav className='navbar bg-dark container'>
               <h4><Link className="link" to="/">Home</Link></h4>
               <h4><Link className="link" to="/notes">Notes</Link></h4>
               <h4><Link className="link" to="/createnote">Create Note</Link></h4>
           </nav>
        </>
    )
}
