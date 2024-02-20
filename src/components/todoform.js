import {useState} from 'react';

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className='TodoForm'>
            <input type="text" className="TodoInput" value={value} onChange={(e) => setValue(e.target.value)} placeholder="What needs to be done?" />
            <button type="submit" className="TodoSubmit">Add Task</button>
        </form>
    );
};