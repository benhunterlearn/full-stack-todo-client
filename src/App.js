import './App.css';
import {useEffect, useState} from "react";
import {TodoCreator} from "./TodoCreator";
import {Items} from "./Items";

const API_URL = 'http://localhost:8080/api/items';

const App = () => {
    const [items, setItems] = useState([]);

    // Load all todo items from the back end after the component mounts.
    useEffect(() => {
        loadItems();
    }, [])

    const loadItems = () => {
        fetch(API_URL, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setItems(json));
    }
    const createNewTodo = (content) => {
        // POST to back end with default completed
        const newItem = {content: content, completed: false};
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then((response) => loadItems());
    }

    const toggleItemCompleted = (item) => {
        fetch(API_URL + '/' + item.id.toString(), {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...item, completed: !item.completed})
        })
            .then((response) => loadItems());
    };

    const deleteItem = (item) => {
        fetch(API_URL + '/' + item.id.toString(), {
            method: "DELETE",
        })
            .then((response) => loadItems());
    };

    const saveItemUpdate = (updatedItem) => {
        fetch(API_URL + '/' + updatedItem.id.toString(), {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...updatedItem})
        })
            .then((response) => loadItems());
    }

    return (
        <div>
            <h1>TODO</h1>
            <TodoCreator
                createNewTodo={(content) => createNewTodo(content)}
            />
            <Items items={items}
                   toggleItemCompleted={(item) => toggleItemCompleted(item)}
                   deleteItem={(item) => deleteItem(item)}
                   saveItemUpdate={(updatedItem) => saveItemUpdate(updatedItem)}
            />
        </div>
    );
};

export default App;
