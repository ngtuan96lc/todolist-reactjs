import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import { TodoForm } from './todoform';
import { Todo } from './todo'; 
import { EditTodoForm } from './edittodoform';


export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false}
        ]);
    };

    const deleteTodo = (id) => {
        setTodos(
            todos.filter((todo) =>
                todo.id !== id
            )
        );
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            )
        );  
    };

    const editTask = (task, id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
            )
        );
    };

    return (
        <div className="Todo-wrapper">
            <h1>Get Things Done!</h1>

            <TodoForm addTodo={addTodo} />
            
            {todos.map((todo) => 
                todo.isEditing
                ? (<EditTodoForm 
                    editTask={editTask}
                    task={todo}
                />)
                : (<Todo 
                    key={todo.id}
                    task={todo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />)
            )}
        </div>
    );
}