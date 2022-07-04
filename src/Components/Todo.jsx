import React from "react";
import TodoItems from "./TodoItems";

const Todo = (props) => {
    return (
        <ul>
            {props.todo.map((todo, i) => {
                return (
                    <TodoItems 
                    todo={todo} 
                    key={todo.id} 
                    index={i} 
                    onChange={props.onToggle}
                    />)
            })}
        </ul>
    );
};

export default Todo;