import React from 'react';
import './Panel.css';

//import components
import ToDoList from './ToDoList'

function Panel() {

    return (
        <div className="panel">
            <ToDoList />
            <ToDoList />
        </div>
    );
}


export default Panel;
