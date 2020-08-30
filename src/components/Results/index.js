import React from "react";
import ListOutTypes from "../ListOutTypes";
import {pokeTypes, typeEff} from "../../data";
import TypeFigure from "../TypeFigure";


function Results(props) {
    function getTypesArr(param) {
        if (!props.type2Prop) {
            if (param === "weak") {
                return pokeTypes.filter(type => typeEff[props.type1Prop][type] >= 2);
            }
            else if (param === "resist"){
                return pokeTypes.filter(type => !Number.isInteger(typeEff[props.type1Prop][type]));
            }
            else if (param === "immune") {
                return pokeTypes.filter(type => typeEff[props.type1Prop][type] === 0);
            }
        } else {
            if (param === "weak") {
                return pokeTypes.filter(type => typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type] >= 2);
            }
            else if (param === "resist") {
                return pokeTypes.filter(type => !Number.isInteger(typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type]));
            }
            else if (param === "immune") {
                return pokeTypes.filter(type => typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type] === 0);
            }
        } 
    }

    return (
        <div>
            <div>
                <h3>Your Pokémon Type:</h3>
                {!props.type2Prop ?
                    <TypeFigure type={props.type1Prop}/>
                :
                    <div>
                        <TypeFigure type={props.type1Prop}/>
                        <TypeFigure type={props.type2Prop}/>
                    </div>
                }
                <ListOutTypes 
                    heading="Your Pokémon Is Weak to These Types:"
                    arr={getTypesArr("weak")}
                />
                {getTypesArr("resist").length > 0 ?
                    <ListOutTypes 
                        heading="Your Pokémon Is Resistant to These Types:"
                        arr={getTypesArr("resist")}
                    />
                :
                    null
                }
                {getTypesArr("immune").length > 0 ?
                    <ListOutTypes 
                        heading="Your Pokémon Is Immune to These Types:"
                        arr={getTypesArr("immune")}
                    />
                :
                    null
                }
                <button onClick={props.onClick}>Go Back</button>
            </div>
        </div>
    );
}

export default Results;