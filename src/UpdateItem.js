import {useState} from "react";

export const UpdateItem = (props) => {
    const [newContent, setNewContent] = useState(props.item.content);

    const handleChangeNewContent = (event) => {
        setNewContent(event.target.value);
    };

    const handleSaveNewContent = () => {
        props.setEditing(false);

        if (newContent === props.item.content) {
            return;
        }

        const updatedItem = {
            id: props.item.id,
            content: newContent,
            completed: props.item.completed,
        };
        props.saveItemUpdate(updatedItem);
    };

    return (
        <>
            <input type='text'
                   value={newContent}
                   onChange={(event) => {
                       handleChangeNewContent(event)
                   }}
            />
            <button onClick={() => {
                handleSaveNewContent()
            }}>Save
            </button>
        </>
    );
}