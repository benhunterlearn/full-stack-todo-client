import {Item} from "./Item";

export const Items = (props) => {
    return <>
        <h2>Items</h2>
        <ul>
            {props.items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        item={item}
                        toggleItemCompleted={props.toggleItemCompleted}
                        deleteItem={props.deleteItem}
                        saveItemUpdate={props.saveItemUpdate}
                    />
                );
            })}
        </ul>
    </>
};