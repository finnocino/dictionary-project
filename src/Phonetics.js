import React from "react";

export default function Phonetic(props) {
    if (props) {
        return (
            <div className="Phonetics">
                {props.phonetic}
            </div>
      );
} else {
  return null;
      }
  }
