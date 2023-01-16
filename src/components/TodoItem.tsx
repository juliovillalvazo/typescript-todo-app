import styles from './TodoItem.module.css';

const TodoItem: React.FC<{
    id: string;
    text: string;
    key: string;
    handleClick: () => void;
}> = ({ id, text, handleClick }) => {
    return (
        <li onClick={handleClick} className={styles.item} key={id}>
            {text}
        </li>
    );
};

export default TodoItem;
