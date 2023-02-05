import React from "react";
import './header.css'
import { useState } from "react";


const Header = ({addTodo}) => {
    const [text, setText] = useState('')

    const onSubmit = () => {
        addTodo(text)
        setText('')
    }

    return(
        <header className="header">
            <input type="text" 
                value = {text}
                placeholder = "What do you want to do?" 
                onChange = {(e) => setText(e.target.value)}
                onKeyDown = {(e) => {
                    if (e.key === 'Enter') onSubmit()
            }}
            />
            <button onClick = {() => onSubmit()}><i className = "fa-solid fa-check"></i></button>
        </header>
    )
}


export { Header }