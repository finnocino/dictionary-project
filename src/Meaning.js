import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
                <div>
                    <p> Definition: 
                        {props.meaning.definition}
                    <br />
                   <em> Example: {props.meaning.example}</em>
                   </p>
               </div>
        </div>
    );
}

