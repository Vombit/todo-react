import React from "react";

const TodoItems = ({todo, index, onChange}) => {
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li>
            <span className={classes.join(' ')}>
                <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={()=> onChange(todo.id)}/>
                <strong>{index+1}</strong>
                {todo.description}
            </span>
            <button className="btn">&times;</button>
        </li>
    );
};

export default TodoItems;