import {useState} from "react";

export const TodoCreator = (props) => {
    const [newTodoContent, setNewTodoContent] = useState('');

    const handleCreateNewTodo = (event) => {
        event.preventDefault();

        // Check that the user put something in the text box.
        if (newTodoContent.length > 0) {
            props.createNewTodo(newTodoContent);
            setNewTodoContent('');
        }
    }

    return <>
        <h2>Todo Creator</h2>
        <form onSubmit={(event) => handleCreateNewTodo(event)}>
            <input type='text'
                   onChange={(event) => setNewTodoContent(event.target.value)}
                   value={newTodoContent}
            />
            <button type='submit'>Add</button>
        </form>
    </>
};