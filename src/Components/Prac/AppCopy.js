import React, { useState } from 'react';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList';
import './AppCopy.css';

function AppCopy() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if(inputText !== '')
    {
      setListTodo([...listTodo, inputText]);
    }  
  }

  const deleteListItem = (key)=>{
    let newListTodo = ([...listTodo]);
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]); 
  }

  const editListItem = (key, newValue) => {
    let newListTodo = ([...listTodo]);
    newListTodo[key] = newValue;
    setListTodo([...newListTodo]);
  }
  return (
    <div className='container'>
      <div className='main-sub'>
        <ToDoInput addList={addList}/>
        <h1>TO-DO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <ToDoList key={i} item={listItem} deleteItem={deleteListItem} editItem={editListItem} index={i}/>
          )
        })}
      </div>
    </div>
  );
}

export default AppCopy;
