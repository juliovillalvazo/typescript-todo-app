import React, { useRef } from 'react';
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
    onAddTodo,
}) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = textInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        onAddTodo(enteredText);

        textInputRef.current!.value = '';
    };

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label>Todo text</label>
            <input type='text' id='text' ref={textInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;
