import React from "react";
import ListOut from "../ListOutTypes";
import {pokeTypes, typeEff} from "../../data";

function Results(props) {
    return (
        <div>
            {!props.type2Prop ?
                <div>
                    <ListOut 
                        heading="Your Pokémon Is Weak to These Types:"
                        arr={pokeTypes.filter(type => typeEff[props.type1Prop][type] >= 2)}
                    />
                    <ListOut 
                        heading="Your Pokémon Is Resistant to These Types:"
                        arr={pokeTypes.filter(type => !Number.isInteger(typeEff[props.type1Prop][type]))}
                    />
                    {pokeTypes.filter(type => typeEff[props.type1Prop][type] === 0).length > 0 ?
                        <ListOut 
                            heading="Your Pokémon Is Immune to These Types:"
                            arr={pokeTypes.filter(type => typeEff[props.type1Prop][type] === 0)}
                        />
                    :
                        null
                    }
                    <button onClick={props.onClick}>Go Back</button>
                </div>
            :
                <div>
                    <ListOut 
                        heading="Your Pokémon Is Weak to These Types:"
                        arr={pokeTypes.filter(type => typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type] >= 2)}
                    />
                    {pokeTypes.filter(type => !Number.isInteger(typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type])).length > 0 ?
                        <ListOut 
                            heading="Your Pokémon Is Resistant to These Types:"
                            arr={pokeTypes.filter(type => !Number.isInteger(typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type]))}
                        />
                    :
                        null
                    }
                    {pokeTypes.filter(type => typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type] === 0).length > 0 ?
                        <ListOut 
                            heading="Your Pokémon Is Immune to These Types:"
                            arr={pokeTypes.filter(type => typeEff[props.type1Prop][type] * typeEff[props.type2Prop][type] === 0)}
                        />
                    :
                        null
                    }
                    <button onClick={props.onClick}>Go Back</button>
                </div>
            }
        </div>
    );
}

export default Results;