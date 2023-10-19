import React, { useState } from 'react'
import './ToDoList.css'

function ToDoList(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [newValue, setNewValue] = useState(props.item);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        props.editItem(props.index, newValue);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        setNewValue(e.target.value);
    };

    const handleEnterPress = (e) => {
        if(e.keyCode === 13)
        {
            props.editItem(props.index, newValue);
            setIsEditing(false);
        }
    }

    return (
        <li className='list-item'>
            <div className='list-box'>
                {isEditing ? (
                    <input
                        type="text"
                        value={newValue}
                        onChange={handleInputChange}
                        onBlur={handleSaveClick}
                        onKeyDown={handleEnterPress}
                        autoFocus
                    />
                ) : (
                props.item
                )}
                    <span>
                        <div className='icons'>
                            <div className='icons-edit'>
                            {isEditing ? (
                                <i className="fa-solid fa-check" onClick={handleSaveClick} ></i>
                            ) : (
                                <i className="fa-solid fa-pencil" onClick={handleEditClick}></i>
                            )}
                            </div>
                            <div className='icons-delete'>
                                <i className='fa-solid fa-trash-can icon-delete' onClick={() => props.deleteItem(props.index)}></i>
                            </div>
                        </div>
                    </span>
            </div>
        </li>
    );
}

export default ToDoList