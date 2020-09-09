import React from "react";
import TypeFigure from "../TypeFigure";
import "./styles.css";

function ListOutTypes(props) {
    return (
        <div className="list-out-div">
            <h3>{props.heading}</h3>
            {props.arr.map(item => <TypeFigure type={item}/>)}
        </div>
    );
}

export default ListOutTypes;