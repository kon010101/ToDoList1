import './ToDoList.css';
import React, { useState } from "react";

//import components
import ToDoItem from './ToDoItem'
import AddToDoLine from './AddToDoLine'

function ToDoList() {
    //states
    const [todos, setTodos] = useState([]);

    const addToDo = (newTodo) => {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    }

    const getTodos = () => {
        const toDoItems = todos.map((item, index) => {
            return <ToDoItem 
                        text={item.text} 
                        key={item.key} 
                        finished={item.finished} 
                        todos={todos} 
                        todo={item}
                        setTodos={setTodos}/>;
        });
        return toDoItems;
    }

    return (
        <div className="todo-list-container">
            <h1>List</h1>
            <ul>{getTodos()}</ul>
            <AddToDoLine todos={todos} setTodos={setTodos} />
        </div>
    );
}


export default ToDoList;
