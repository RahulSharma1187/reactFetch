import React, { useState } from 'react';
import List from './List';

const ToDoList = () => {
    const [myValue , setMyValue] = useState();
    const [newItem, setNewItem] = useState([]);

    const inputValue = (event) => {
        setMyValue(event.target.value)
    }

    const addItem = () => {
        setNewItem((oldItem) => {
            return [...oldItem, myValue]
        })
        setMyValue("");          
    }

    const deleteVal = (id) => {
        console.log('delete')
        setNewItem((oldItem) => {   
            return oldItem.filter((arrElem , index)  => {
                return index !== id
            })
        })
    }

    return(
        <>
            <div className="todoBox">
                <div className="todoBoxInput">
                    <input type="text" value={myValue} placeholder="Type Item Here" onChange={inputValue}></input>
                    <button onClick={addItem}> + Item </button>
                </div>
                <div className="itemList">
                    <ul>
                        {
                            newItem.map((crntElem, index) => {  
                                return(
                                <List 
                                    key={index}
                                    id={index}
                                    text={crntElem} 
                                    delete={deleteVal}
                                />
                                )
                            })    
                        }
                    </ul>
                </div>
            </div>
        </>     
    )
}

export default ToDoList;