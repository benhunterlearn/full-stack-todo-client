import {useState} from "react";
import {UpdateItem} from "./UpdateItem";

export const Item = (props) => {
    const [editing, setEditing] = useState(false);

    const renderStrikethroughForCompletedItems = () => {
        if (props.item.completed) {
            return <del>{props.item.content}</del>
        } else {
            return props.item.content;
        }
    }

    const renderViewItemOrEditItem = () => {
        if (editing) {
            return <UpdateItem
                item={props.item}
                setEditing={(isEditing) => setEditing(isEditing)}
                saveItemUpdate={props.saveItemUpdate}
            />;
        } else {
            return <>
                {renderStrikethroughForCompletedItems()}
                <button onClick={() => {
                    setEditing(true)
                }}>Edit
                </button>
            </>
        }
    };

    return (
        <li>
            <input type='checkbox'
                   checked={props.item.completed}
                   onChange={() => props.toggleItemCompleted(props.item)}
            />
            {renderViewItemOrEditItem()}
            <button onClick={() => props.deleteItem(props.item)}>
                X
            </button>
        </li>
    );
};