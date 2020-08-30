import React from "react";
import TypeFigure from "../TypeFigure"

function ListOutTypes(props) {
    return (
        <div>
            <h3>{props.heading}</h3>
            {props.arr.map(item => <TypeFigure type={item}/>)}
        </div>
    );
}

export default ListOutTypes;