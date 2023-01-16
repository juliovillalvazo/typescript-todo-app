import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
    props
) => {
    return (
        <ul className={styles.todos}>
            {props.items.map((item) => (
                <TodoItem
                    handleClick={props.onRemoveTodo.bind(null, item.id)}
                    id={item.id}
                    text={item.text}
                    key={item.text}
                />
            ))}
        </ul>
    );
};

export default Todos;
