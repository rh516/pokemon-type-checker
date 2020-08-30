import React from "react";
import Figure from 'react-bootstrap/Figure';
import "./styles.css";

function TypeFigure(props) {
    return(
        <Figure>
            <Figure.Image
                width={64}
                height={64}
                src={`${process.env.PUBLIC_URL}/typeIcons/${props.type}.png`}
                alt={`${props.type}-icon`}
            />
            <Figure.Caption>{props.type}</Figure.Caption>
        </Figure>
    )
}

export default TypeFigure;