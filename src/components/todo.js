import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({task, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p className='Todo-task-name'>
                {task.task}
            </p>
            <div className='Actions'>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};
