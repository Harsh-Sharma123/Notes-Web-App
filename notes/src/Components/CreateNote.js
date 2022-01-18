import React, {useState} from 'react';
import axios from "axios";

export default function CreateNote() {

    const [input, setInput] = useState({
        title: '',
        content: ''
    });

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    const handleClick = (event)=>{
        event.preventDefault();
        console.log(input);
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post("http://localhost:3001/create", newNote);
    }

    return (
        <div className='container'>
            <h1>Create Note Page</h1>
            <form>
                <div className='form-group my-3'>
                    <input onChange={handleChange} name="title" value={input.title} autocomplete="off" className='form-control' placeholder="note title"></input>
                </div>
                <div className='form-group my-3'>
                    <textarea onChange={handleChange} name="content" value={input.content} autocomplete="off" className='form-control' placeholder="note description"></textarea>
                </div>
                <button onClick={handleClick} className='btn btn-lg btn-info'>Add Note</button>
            </form>
        </div>
    )
}
