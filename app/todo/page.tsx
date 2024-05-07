"use client"

import React, { useState } from "react";
import styles from "../../assets/todoapp/style.module.css";
import ToDoItem from "@/components/component/todoItem";

interface TodoItem {
    id: number;
    text: string;
}

export default function TodaApp() {
    const [inputText, setInputText] = useState<string>("");
    const [items, setItems] = useState<TodoItem[]>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems((prevItems: TodoItem[]) => {
            return [...prevItems, { id: prevItems.length, text: inputText }];
        });
        setInputText("");
    }

    function deleteItem(id: number) {
        setItems((prevItems: TodoItem[]) => {
            return prevItems.filter((item) => item.id !== id);
        });
    }

    return (
        <div className={styles.container_body}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>To-Do List</h1>
                </div>
                <div className={styles.form}>
                    <input
                        onChange={handleChange}
                        type="text"
                        value={inputText}
                        className={styles.input}
                    />
                    <button onClick={addItem} className={styles.button}>
                        <span>Add</span>
                    </button>
                </div>
                <div>
                    <ul>
                        {items.map((todoItem) => (
                            <ToDoItem
                                key={todoItem.id}
                                text={todoItem.text}
                                id={todoItem.id}
                                onChecked={deleteItem}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}


