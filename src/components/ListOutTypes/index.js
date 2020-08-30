import React from "react";

function ListOutTypes(props) {
    return (
        <div>
            <h3>{props.heading}</h3>
            <ul>
                {props.arr.map(item => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default ListOutTypes;