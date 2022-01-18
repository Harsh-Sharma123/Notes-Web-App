import React, {useEffect, useState} from 'react';
import "./Notes.css"

export default function Notes() {

    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    useEffect(() => {
        fetch("/notes").then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(jsonRes => setNotes(jsonRes))
    })

    const head = {
        backgroundColor: '#f5a35b',
        borderRadius: '8px',
        padding: '5px',
        fontWeight: 'bold'
    }

    return (
        <div className='container'>
            <h1 className='text-center my-3 font-weight-bold' style={head}>Notes Page</h1>
            {notes.map(note => 
            <div className='container note'> 
                <h1 className='title'>{note.title}</h1>
                <p className='content'>{note.content}</p>
                </div>)}
        </div>
    )
}
