import React from "react";

function ToDoItem({ text, onChecked, id }: any) {
    function handleClick() {
        onChecked(id);
    }

    return (
        <div onClick={handleClick}>
            <li className="li">{text}</li>
        </div>
    );
}

export default ToDoItem;
