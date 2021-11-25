import React from 'react';

const List = (props) => {
    return(
        <>
            <li>{props.text} 
                <span onClick={() => {props.delete(props.id)}}>X</span>
            </li>
        </>
    )
}

export default List