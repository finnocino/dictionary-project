import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4>
                <div>
                   <div className="definition">
                        {props.meaning.definition}
                   </div>
                   <div className="example">
                         {props.meaning.example}
                   </div>
                   <div className="example">
                        <Synonyms synonyms={props.meaning.synonyms} />
                   </div>
               </div>
        </div>
    );
}

