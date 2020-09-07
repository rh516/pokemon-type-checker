import React, { useState } from "react";
import {pokeTypes} from "../../data";
import "./styles.css";

function TypeForm(props) {
    const [state, setState] = useState({
        type1: "",
        type2: ""
    });

    // form validation
    function handleSubmit(event) {
        if (!state.type1) {
            event.preventDefault();
            setState({
                type1: "",
                type2: ""
            });
            alert("Please enter a Type 1.");
        } 
        else if (state.type1 && !state.type2) {
            if (!pokeTypes.includes(state.type1.toLowerCase())) {
                event.preventDefault();
                setState({
                    type1: "",
                    type2: ""
                });
                alert("Invalid type. Try again.");
            } else {
                event.preventDefault();
                props.onSubmit(state.type1.toLowerCase(), state.type2);
            }
        }
        else {
            if (!pokeTypes.includes(state.type1.toLowerCase()) || !pokeTypes.includes(state.type2.toLowerCase())) {
                event.preventDefault();
                setState({
                    type1: "",
                    type2: ""
                });
                alert("Invalid type. Try again.");
            } else {
                event.preventDefault();
                props.onSubmit(state.type1.toLowerCase(), state.type2.toLowerCase());
            }

        }
    }


    function handleChange(event) {
        const {name, value} = event.target;
        
        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            };
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                name="type1"
                type="text"
                placeholder="Type 1"
                value={state.type1}
                onChange={handleChange}
            />
            <input
                name="type2"
                type="text"
                placeholder="Type 2 (Optional)"
                value={state.type2}
                onChange={handleChange}
            />
            <button className="submit-btn" type="submit">Submit</button>
        </form>
    );
}

export default TypeForm;